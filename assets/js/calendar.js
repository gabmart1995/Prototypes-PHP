document.addEventListener( 'DOMContentLoaded', () =>  {

	var calendarEl = document.getElementById( 'calendar' );
	
	var calendar = new FullCalendar.Calendar( calendarEl, {
					
		plugins: [ 'dayGrid', 'interaction' ],
		
		dateClick: ( info ) => {
			console.log( `click el ${ info.dateStr }` );
		}
	});

	calendar.render();
});