var nuevoEvento = {};

// ----------------------------------------------
// 		calendarController
// ----------------------------------------------
const calendarController = {

	getData: function( info ) {

		let eventStart = info.event._instance.range.start;

		let eventDate = this.getDate( eventStart ); 
		let eventHour = this.getHour( eventStart );
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
	},

	getEmpty: () => {

		$( '#eventTitle' ).html( 'Nuevo Evento' );

		$( '#txtId' ).val( '' );
		$( '#txtTitle' ).val( '' );
		$( '#txtDescription' ).val( '' );
		$( '#txtColor' ).val( '' );
		$( '#txtHour' ).val( '' );
	},


	validateButtons: ( evento ) => {

		if ( evento === 'eventClick' ) {

			document.getElementById( 'btnAdd' ).disabled = true;
			document.getElementById( 'btnModify' ).disabled = false;
			document.getElementById( 'btnClear' ).disabled = false;
		}

		else {
			
			document.getElementById( 'btnAdd' ).disabled = false;
			document.getElementById( 'btnModify' ).disabled = true;
			document.getElementById( 'btnClear' ).disabled = true;
		}
	},

	getDate: ( event ) => {
		
		let data = event.toISOString();
		let newDate = data.split( 'T' );

		return newDate[0];
	},

	getHour: ( event ) => {

		let data = event.toUTCString();
		let newHour = data.split( ' ' );

		return newHour[4];
	},

	getDataForm: () => {

		nuevoEvento = {

			id:  parseInt( $( '#txtId' ).val() ),
			title: $( '#txtTitle' ).val(),
			start: `${ $( '#txtDate' ).val() } ${ $( '#txtHour' ).val() }`,
			color: $( '#txtColor' ).val(),
			description: $( '#txtDescription' ).val(),
			textColor: '#ffffff',
			end: `${ $( '#txtDate' ).val() } ${ $( '#txtHour' ).val() }`, 
		};

		return nuevoEvento
	},

	sendDataDB: ( accion, event ) => {

		// consulta informacion sobre Ajax en:
		// https://api.jquery.com/jQuery.Ajax/#jQuery-ajax-url-settings

		$.ajax({
			
			type: 'POST',
			url: `./data/events.php?accion=${ accion }`,
			data: event,

			success: ( msg ) => {

				if ( msg ) {

					calendar.refetchEvents();
					$( '#modalEvent' ).modal( 'toggle' );
				}
			},

			error: () => {

				alert('Hay un error ...');
			} 
		});
	}
};

// 	Metodos de fullcalendar
// 	https://fullcalendar.io/docs/upgrading-from-v3

// ----------------------------------------------
// 		Agrega un nuevo evento
// ----------------------------------------------
$( '#btnAdd' ).click( () => {

	calendarController.getDataForm();
	calendarController.sendDataDB( 'agregar', nuevoEvento );
});

// ----------------------------------------------
// 		Eliminar un evento
// ----------------------------------------------
$( '#btnClear' ).click( () => {

	calendarController.getDataForm();
	calendarController.sendDataDB( 'eliminar', nuevoEvento );
});

// ----------------------------------------------
// 		Actualizar un evento
// ----------------------------------------------
$( '#btnModify' ).click( () => {

	calendarController.getDataForm();
	calendarController.sendDataDB( 'modificar', nuevoEvento );
});