// ----------------------------------------------
// 		Agrega un nuevo evento
// ----------------------------------------------
$( '#btnAgregar' ).click( () => {

	let nuevoEvento = {

		title: $( '#txtTitulo' ).val(),
		start: `${ $( '#txtFecha' ).val() } ${ $( '#txtHora' ).val() }`,
		color: $( '#txtColor' ).val(),
		description: $( '#txtDescripcion' ).val(),
		textColor: '#ffffff',
	};

	// añade un evento al calendario
	calendar.addEvent( nuevoEvento );
	calendar.render();

	$( '#modalDate' ).modal( 'toggle' );

});