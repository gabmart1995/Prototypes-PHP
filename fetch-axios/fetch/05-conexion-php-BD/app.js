const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function( $event ) {

	$event.preventDefault();

	const form = new FormData( formulario );
	
	sendData( form );
});

function sendData( form ) {

	const options = {
		method: 'POST',
		body: form
	}

	fetch('./php/post.php', options)

		.then( async function( response ) {
			
			const data = await response.text();
			console.log( data );
		})
		.catch( function( error ) {
			
			console.log( error );
		});
}