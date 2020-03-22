const formulario = document.getElementById('formulario');
const insert = document.getElementById('respuesta-insert');
const table = document.getElementById('table');
const formEdit = document.getElementById('editForm');

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
				
				showMessage( 'El usuario ha sido creado con éxito', 'w3-text-green' );
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

function showMessage( message, className ) {

	insert.innerHTML = `
		<p class=${ className }>${ message }</p>
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
					<td>
						<button onclick="editGuest(
								{ 
									id: ${ guest.id }, 
									firstname: '${ guest.firstname }',
									lastname: '${ guest.lastname }',
									email: '${ guest.email }',
									reg_date: '${ guest.reg_date }'
								})" class="w3-btn w3-blue">
							Editar
						</button>
						<button onclick="deleteGuest( ${ guest.id } )" class="w3-btn w3-red">
							Eliminar
						</button>
					</td>
					<td></td>
				</tr>
			`;
		});

		message.hidden = true;
	
	} else {

		message.hidden = false;
	}

}

function editGuest( guest ) {

	formEdit[0].value = guest.firstname;
	formEdit[1].value = guest.lastname;
	formEdit[2].value = guest.email;

	document.getElementById('editModal').style.display = 'block';	
}

function deleteGuest( id ) {
	
	const title = document.getElementById('modal-title');
	title.innerText = 'Eliminar usuario ' + id;

	document.getElementById('deleteModal').style.display = 'block'
}

function closeModal( idElement ) {
	document.getElementById( idElement ).style.display = 'none';
}