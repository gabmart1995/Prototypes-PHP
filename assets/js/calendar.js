let calendarEl = document.getElementById( 'calendar' );

// botones personalizados
let botones = {

	mensaje: {
		text: 'Mensaje',
		click: () => {
			alert( 'Hola mundo' );
		}
	},

	accion: {
		text: 'accion',
		click: () => {
			alert( 'Accion' );
		}
	}
};

let calendarOptions = {

	plugins: [ 'dayGrid', 'interaction', 'moment', 'timeGrid' ],
	locale: 'es',

	// header
	header: {
		left: 'today,prev,next', // boton1,boton2',
		center: 'title',
		right: 'dayGridMonth,dayGridWeek,dayGridDay'
	},

	// botones personalizados
	customButtons: {
		boton1: botones.mensaje,
		boton2: botones.accion
	},

	dateClick: ( response ) => {
		
		// console.log( response );

		console.log( `Valor seleccionado: ${ response.dateStr }` );
		console.log( `Vista actual: ${ response.view.type }` );

		// let style = response.dayEl.style;
		// style.backgroundColor = 'red';
	}
};

document.addEventListener( 'DOMContentLoaded', () => {

	const calendar = new FullCalendar.Calendar( calendarEl, calendarOptions );

	calendar.render();
});