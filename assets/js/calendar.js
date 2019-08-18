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

	//trae los datos de los archivos de PHP 
	events: urlData,

	eventClick: ( info ) => {

		// console.log( info ); 

		let tituloEvento = info.event._def.title;
		let descripcionEvento = info.event._def.extendedProps.description;

		$( '#titulo' ).html( tituloEvento );
		$( '#descripcionEvento' ).html( descripcionEvento );

		$( '#consultEvent' ).modal();
	},

	dateClick: ( info ) => {

		// console.log( info );

		$( '#tituloEvento' ).html( 'Nuevo Evento' );
		$( '#txtFecha' ).val( info.dateStr );

		$( '#modalEventos' ).modal();
	}
};

let calendarEl = document.getElementById( 'calendar' );

const calendar = new FullCalendar.Calendar( calendarEl, calendarOptions );

$( document ).ready( () => {

	calendar.render();
});