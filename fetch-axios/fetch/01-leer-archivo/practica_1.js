const boton = document.querySelector('#boton');
const contenido = document.querySelector('#contenido');

boton.addEventListener( 'click', search );

async function search() {
	
	const response = await fetch('./texto.txt');
	let texto = await response.text();

	contenido.innerHTML = `<p>${ texto }</p>`	
} 