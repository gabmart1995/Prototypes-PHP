// ----------------------------------------------
// 		Funciones adicionales del calendario
// ----------------------------------------------
const calendarFunctions = {

	getDate: ( event ) => {
		
		let data = event.toISOString();
		let newDate = data.split( 'T' );

		return newDate[0];
	},

	getHour: ( event ) => {

		let data = event.toUTCString();
		let newHour = data.split( ' ' );

		return newHour[4];
	}
};

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