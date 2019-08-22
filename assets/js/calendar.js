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

	eventClick: ( info ) => {

		// console.log( info );

		calendarController.validateButtons( 'eventClick' );		
		calendarController.getDataJSON( info );

		$( '#modalEvent' ).modal();
	},

	dateClick: ( info ) => {

		// console.log( info );

		calendarController.validateButtons( 'dateClick' );
		calendarController.getEmpty();

		$( '#txtDate' ).val( info.dateStr );

		$( '#modalEvent' ).modal();
	},

	events: urlData,  // eventos

	editable: true,

	eventDrop: ( info ) => {

		// console.log( info );

		calendarController.getDataJSON( info );
		calendarController.getDataForm();
		calendarController.sendDataDB( 'modificar', nuevoEvento, false );
	}
};

const optionsClockPicker = {

	placement: 'right',
	align: 'left',
	autoclose: true
};

let calendarEl = document.getElementById( 'calendar' );



const calendar = new FullCalendar.Calendar( calendarEl, calendarOptions );

$( document ).ready( () => {

	calendar.render();
});

// ----------------------------------------------
// 		Boostrap ClockPicker
// ----------------------------------------------
$( '.clockpicker' ).clockpicker( optionsClockPicker );