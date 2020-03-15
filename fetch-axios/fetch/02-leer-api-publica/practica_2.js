const URL = 'https://randomuser.me/api/';
const boton = document.querySelector('#boton');
const contenido = document.querySelector('#contenido');

boton.addEventListener( 'click', getDataResource );

function getDataResource() {
	
	fetch( URL )
		.then( async function( response ) {

			let { results } = await response.json();
			let name = `${ results[0].name.first } ${ results[0].name.last }`

			contenido.innerHTML = getTemplateUser( 
					name, 
					results[0].picture.large 
				);

		})
		.catch( function( error ) {
			
			console.log( 'comprueba tu conexion a internet', error );
		});
}

function getTemplateUser( name,  image ) {
	
	return `
					<img src="${ image }" alt="image" />
					<p>Nombre: ${ name }</p>
				`
}