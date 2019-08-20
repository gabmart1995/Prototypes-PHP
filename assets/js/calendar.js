const urlData = 'http://localhost/tutorial-php/calendarioWeb/data/events.php';

const calendarOptions = {

	plugins: [ 'dayGrid', 'interaction' ],
	locale: 'es',

	header: {
		left: 'today,prev,next, boton1',
		center: 'title',
		right: 'dayGridMonth,dayGridWeek,dayGridDay'
	},

	customButtons: {
		boton1: botones.mensaje, 
	},

	events: urlData,  // eventos

	eventClick: ( info ) => {

		// console.log( info );

		calendarController.validateButtons( 'eventClick' );		
		calendarController.getData( info );

		$( '#modalEvent' ).modal();
	},

	dateClick: ( info ) => {

		// console.log( info );

		calendarController.validateButtons( 'dateClick' );
		calendarController.getEmpty();

		$( '#txtDate' ).val( info.dateStr );

		$( '#modalEvent' ).modal();
	}
};

let calendarEl = document.getElementById( 'calendar' );

const calendar = new FullCalendar.Calendar( calendarEl, calendarOptions );

$( document ).ready( () => {

	calendar.render();
});