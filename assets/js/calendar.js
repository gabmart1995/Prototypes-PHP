const calendarOptions = {

	plugins: [ 'dayGrid', 'interaction', 'moment', 'timeGrid' ],
	locale: 'es',

	header: {
		left: 'today,prev,next', // boton1,boton2',
		center: 'title',
		right: 'dayGridMonth,dayGridWeek,dayGridDay'
	},

	customButtons: {
		boton1: botones.mensaje,
		boton2: botones.accion
	}, 

	//trae los datos de los archivos de PHP 
	events: 'http://localhost/php/calendarioWeb/data/events.php',

	eventClick: ( info ) => {

		// console.log( info );

		let tituloEvento = info.event._def.title;
		let descripcionEvento = info.event._def.extendedProps.description;

		// inyeccion de HTML con JQuery.
		$( '#tituloEvento' ).html( tituloEvento );
		$( '#descripcionEvento' ).html( descripcionEvento );

		$( '#calendarModal' ).modal();
	},

	dateClick: ( info ) => {

		// console.log( info );

		$( '#tituloEvento' ).html( 'Nuevo Evento' );
		$( '#descripcionEvento' ).html( '...' );

		$( '#calendarModal' ).modal();
	}
};

let calendarEl = document.getElementById( 'calendar' );

$( document ).ready( () => {

	const calendar = new FullCalendar.Calendar( calendarEl, calendarOptions );

	calendar.render();
});