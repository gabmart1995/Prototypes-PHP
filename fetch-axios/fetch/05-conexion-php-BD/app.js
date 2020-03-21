const formulario = document.getElementById('formulario');
const insert = document.getElementById('respuesta-insert');
const table = document.getElementById('table');

formulario.addEventListener('submit', function( $event ) {

	$event.preventDefault();

	const form = new FormData( formulario );
	
	const guest = {
		firstname: form.get('firstname'),
		lastname: form.get('lastname'),
		email: form.get('email'),
	}

	const request = new Request( './php/post.php?method=agregar',  {
		method: 'POST',
		body: JSON.stringify( guest )
	});

	sendData( request );
});

function sendData( request ) {

	fetch( request )
		.then( async function( response ) {
			
			const data = await response.json();

			if ( data.status === 500 ) {
				console.error( data );
			} 

			else {

				console.log( data );
				
				showMessage( 'El usuario ha sido creado con éxito' );
			}

		})
		.catch( function( error ) {
			console.log( error );
		});
}

function consultAllGuest() {

	const request = new Request( './php/post.php?method=leer' );

	fetch( request )
	.then( async function( response ) {

		const data = await response.json();

			if ( data.status === 500 ) {
				console.error( data );
			} 

			else {
				
				console.log( data );

				const { payload } = data;
				showTable( payload );
			}

	})
	.catch( function( error ) {
			console.log( error );
		});
}

function showMessage( message ) {

	insert.innerHTML = `
		<p>${ message }</p>
	`
}

function showTable( guestArray ) {

	const message = document.getElementById('message');

	table.innerHTML = '';

	if ( guestArray.length > 0 ) {

		guestArray.forEach( function( guest ) {

			table.innerHTML += `
				<tr>
					<td>${ guest.id }</td>
					<td>${ guest.firstname }</td>
					<td>${ guest.lastname }</td>
					<td>${ guest.email }</td>
					<td>${ guest.reg_date }</td>
				</tr>
			`
		});

		message.hidden = true;
	
	} else {

		message.hidden = false;
	}

}