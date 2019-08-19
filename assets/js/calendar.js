const urlData = 'http://localhost/tutorial-php/calendarioWeb/data/events.php';

const calendarOptions = {

	plugins: [ 'dayGrid', 'interaction' ],
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

	events: urlData,  // eventos

	eventClick: ( info ) => {

		// console.log( info ); 

		let titleEvent = info.event._def.title;
		let descriptionEvent = info.event._def.extendedProps.description;

		$( '#titleEvent' ).html( titleEvent );

		$( '#txtTitle' ).html( titleEvent );
		$( '#txtDescription' ).html( descriptionEvent );

		$( '#modalEvent' ).modal();
	},

	dateClick: ( info ) => {

		// console.log( info );

		$( '#txtFecha' ).val( info.dateStr );

		$( '#modalDate' ).modal();
	}
};

let calendarEl = document.getElementById( 'calendar' );

const calendar = new FullCalendar.Calendar( calendarEl, calendarOptions );

$( document ).ready( () => {

	calendar.render();
});