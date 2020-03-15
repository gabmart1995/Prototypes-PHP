const formulario = document.getElementById('formulario');
const respuesta = document.getElementById('respuesta');

formulario.addEventListener( 'submit',  function( $event ) {

	$event.preventDefault();

	const datos = new FormData( formulario );

	sendData( datos );
});

function sendData( form ) {

	const options = {
		method: 'POST',
		body: form
	};

	fetch('./post.php', options)
		.then( async function( response ) {
			
			let message = await response.json();
			validData( message );
		})
		.catch( function( error ) {
			console.log( error );
		});
}

function validData( message ) {

	if ( message === 'error' ) {
		
		respuesta.innerHTML = `
			<div class="error">
				LLena todos los campos
			</div>
		`

	} else {

		respuesta.innerHTML = `
			<div class="success">
				${ message }
			</div>
		`
	}
}