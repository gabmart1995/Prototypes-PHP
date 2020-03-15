var nuevoEvento = {};

// ----------------------------------------------
// 		calendarController
// ----------------------------------------------
const calendarController = {

	getDataJSON: function( info ) {

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

			$( '#btnAdd' ).prop( 'hidden', true );
			$( '#btnModify' ).prop( 'hidden', false );
			$( '#btnClear' ).prop( 'hidden', false );
		}

		else {
				
			$( '#btnAdd' ).prop( 'hidden', false );
			$( '#btnModify' ).prop( 'hidden', true );
			$( '#btnClear' ).prop( 'hidden', true );
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
	},

	sendDataDB: ( accion, event , modal ) => {

		// consulta informacion sobre Ajax en:
		// https://api.jquery.com/jQuery.Ajax/#jQuery-ajax-url-settings

		$.ajax({
			
			type: 'POST',
			url: `./data/events.php?accion=${ accion }`,
			data: event,

			success: ( msg ) => {

				if ( msg ) {

					calendar.refetchEvents();

					if ( modal ) {

						$( '#modalEvent' ).modal( 'toggle' );
					}
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
	calendarController.sendDataDB( 'agregar', nuevoEvento, true );
});

// ----------------------------------------------
// 		Eliminar un evento
// ----------------------------------------------
$( '#btnClear' ).click( () => {

	calendarController.getDataForm();
	calendarController.sendDataDB( 'eliminar', nuevoEvento, true );
});

// ----------------------------------------------
// 		Actualizar un evento
// ----------------------------------------------
$( '#btnModify' ).click( () => {

	calendarController.getDataForm();
	calendarController.sendDataDB( 'modificar', nuevoEvento, true );
});