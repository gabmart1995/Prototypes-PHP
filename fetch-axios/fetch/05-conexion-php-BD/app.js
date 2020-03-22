const formulario = document.getElementById('formulario');
const table = document.getElementById('table');
const formEdit = document.getElementById('editForm');

formEdit.addEventListener('submit', editGuest );
formulario.addEventListener('submit', insertGuest );

function insertGuest( $event ) {

	$event.preventDefault();

	const form = new FormData( formulario );
	
	const guest = {
		firstname: form.get('firstname'),
		lastname: form.get('lastname'),
		email: form.get('email'),
	}

	const request = new Request( 
		'./php/post.php?method=agregar',  
		{
			method: 'POST',
			body: JSON.stringify( guest )
	});

	fetch( request )
		.then( async function( response ) {
			
			const data = await response.json();

			if ( data.status === 500 ) {
				console.error( data );
			} 

			else {

				console.log( data );
				
				showMessage( 
					'El usuario ha sido creado con éxito consulta la tabla', 
					'w3-text-green',
					document.getElementById('insert') 
				);
			}

		})
		.catch( function( error ) {
			console.log( error );
		});
}

function editGuest( $event ) {

	$event.preventDefault();

	const form = new FormData( formEdit );

	const guest = {
		firstname: form.get('firstname'),
		lastname: form.get('lastname'),
		email: form.get('email')
	};

	const request = new Request(
		`./php/post.php?method=modificar&id=${ form.get('id') }`, 
		{
			method: 'PUT',
			body: JSON.stringify( guest )
	});

	fetch( request )
		.then( async function( response ) {
		
			const data = await response.json();
		
				if ( data.status === 500 ) {
					console.error( data );
				} 

				else {
					console.log( data );

					showMessage( 
					'El usuario ha sido cambiado con éxito vuelve a consultar la tabla', 
					'w3-text-green',
					document.getElementById('edit') 
				);
				}

			console.log( data );
			closeModal('editModal');
		})
		.catch( function( error ) {

			closeModal('editModal');
			console.log( error );
		});
}


function deleteGuest() {

	let id = document.getElementById('modal-title');
	id = id.innerText.split(' ');
	id = id[2];

	const request = new Request(
		`./php/post.php?method=eliminar&id=${ id }`,
		{ method: 'DELETE' }
	);

	fetch( request )
	.then( async function( response ) {
		
		const data = await response.json();

		if ( data.status === 500 ) {
			console.error( data );
		
		} else {

			console.log( data );

			showMessage( 
				'El usuario ha sido eliminado con éxito vuelve a consultar la tabla', 
				'w3-text-green',
				document.getElementById('delete') 
			);
		}

		closeModal('deleteModal');

	})
	.catch( function( error ) {
			console.log( error );
			closeModal('deleteModal');
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

function showMessage( message, className, elementHTML ) {

	elementHTML.innerHTML = `<p class=${ className }>${ message }</p>`;
}

function showTable( guestArray ) {

	const message = document.getElementById('message');

	table.innerHTML = '';

	if ( guestArray.length > 0 ) {

		guestArray.forEach( function( guest ) {

			table.innerHTML += `
				<tr>
					<td class="w3-center">${ guest.id }</td>
					<td class="w3-center">${ guest.firstname }</td>
					<td class="w3-center">${ guest.lastname }</td>
					<td class="w3-center">${ guest.email }</td>
					<td class="w3-center">${ guest.reg_date }</td>
					<td class="w3-center">
						<button onclick="showEditGuest(
								{ 
									id: ${ guest.id }, 
									firstname: '${ guest.firstname }',
									lastname: '${ guest.lastname }',
									email: '${ guest.email }',
									reg_date: '${ guest.reg_date }'
								})" class="w3-btn w3-blue">
							Editar
						</button>
						<button onclick="showDeleteGuest( ${ guest.id } )" class="w3-btn w3-red">
							Eliminar
						</button>
					</td>
				</tr>
			`;
		});

		message.hidden = true;
	
	} else {

		message.hidden = false;
	}

}

function showEditGuest( guest ) {

	formEdit[0].value = guest.id;
	formEdit[1].value = guest.firstname;
	formEdit[2].value = guest.lastname;
	formEdit[3].value = guest.email;

	document.getElementById('editModal').style.display = 'block';	
}

function showDeleteGuest( id ) {
	
	const title = document.getElementById('modal-title');
	title.innerText = 'Eliminar usuario ' + id;

	document.getElementById('deleteModal').style.display = 'block'
}

function closeModal( idElement ) {

	document.getElementById( idElement ).style.display = 'none';
}
