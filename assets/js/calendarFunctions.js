// ----------------------------------------------
// 		Agregar un nuevo evento
// ----------------------------------------------
$( '#btnAgregar' ).click( () => {

	let nuevoEvento = {

		title: $( '#txtTitulo' ).val(),
		start: `${ $( '#txtFecha' ).val() } ${ $( '#txtHora' ).val() }`,
		color: $( '#txtColor' ).val(),
		description: $( '#txtDescription' ).val(),
		textColor: '#ffffff',
	};

	console.log( nuevoEvento );

	// cierra el modal
	$( '#modalEventos' ).modal( 'toggle' );

});