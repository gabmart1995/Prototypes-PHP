// ----------------------------------------------
// 		Agrega un nuevo evento
// ----------------------------------------------
$( '#btnAgregar' ).click( () => {

	let nuevoEvento = {

		title: $( '#txtTitulo' ).val(),
		start: `${ $( '#txtFecha' ).val() } ${ $( '#txtHora' ).val() }`,
		color: $( '#txtColor' ).val(),
		description: $( '#txtDescription' ).val(),
		textColor: '#ffffff',
	};

	// añade un evento al calendario y renderiza
	calendar.addEvent( nuevoEvento );
	calendar.render();

	// cierra el modal
	$( '#modalEventos' ).modal( 'toggle' );

});