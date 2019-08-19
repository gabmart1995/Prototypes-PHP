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

		let eventStart = info.event._instance.range.start;

		let eventDate = calendarFunctions.getDate( eventStart ); 
		let eventHour = calendarFunctions.getHour( eventStart );
		let eventTitle = info.event._def.title;
		let eventId = info.event._def.publicId;
		let eventDescription = info.event._def.extendedProps.description;
		let eventTextColor = info.event._def.ui.backgroundColor;

		$( '#eventTitle' ).html( eventTitle );

		$( '#txtId' ).val( eventId );
		$( '#txtTitle' ).val( eventTitle );
		$( '#txtDescription' ).val( eventDescription );
		$( '#txtColor' ).val( eventTextColor );
		$( '#txtDate' ).val( eventDate );
		$( '#txtHour' ).val( eventHour );

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