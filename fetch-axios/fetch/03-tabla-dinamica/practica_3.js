const boton = document.querySelector('#boton');
const contenido = document.querySelector('#contenido');

boton.addEventListener( 'click', getDataResource );

function getDataResource() {

	fetch('./tabla.json')
		.then( async function( response ) {
			
			const data = await response.json();
			renderTable( data );

		})
		.catch( function( error ) {
			console.log( error );
		});
}

function renderTable( data ) {
	
	data.forEach( function( user, index ) {

		if ( index % 2 === 0 ) {

			contenido.innerHTML += `
				<tr>
					<td>${ user.id }</td>
					<td>${ user.nombre }</td>
					<td>${ user.email }</td>
					<td>${ user.estado ? "Activo" : "Eliminado" }</td>
				</tr>
			`
		} else {

			contenido.innerHTML += `
				<tr class="gray">
					<td>${ user.id }</td>
					<td>${ user.nombre }</td>
					<td>${ user.email }</td>
					<td>${ user.estado ? "Activo" : "Eliminado" }</td>
				</tr>
			`
		}

	});
}