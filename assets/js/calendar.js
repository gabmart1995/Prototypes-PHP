const calendarOptions = {

	plugins: [ 'dayGrid', 'interaction', 'moment', 'timeGrid' ],
	locale: 'es',

	header: {
		left: 'today,prev,next,', // boton1,boton2',
		center: 'title',
		right: 'dayGridMonth,dayGridWeek,dayGridDay'
	},

	/*
	customButtons: {
		boton1: botones.mensaje,
		boton2: botones.accion
	}, 
	*/

	eventSources: [{
		
		events: [
			{
				title: eventos[0].title,
				start: eventos[0].start,
				descripcion: eventos[0].descripcion,
				color: eventos[0].color,
				textColor: eventos[0].textColor
			},
			{
				title: eventos[1].title,
				start: eventos[1].start,
				descripcion: eventos[1].descripcion,
				end: eventos[1].end
			},
			{
				title: eventos[2].title,
				start: eventos[2].start,
				allDay: eventos[2].allDay,
				descripcion: eventos[2].descripcion,
				color: eventos[2].color,
				textColor: eventos[2].textColor
			}
		],

		textColor: 'yellow',
		color: 'black'
	}],

	eventClick: ( info ) => {

		// console.log( info );

		let tituloEvento = info.event._def.title;
		let descripcionEvento = info.event._def.extendedProps.descripcion;

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