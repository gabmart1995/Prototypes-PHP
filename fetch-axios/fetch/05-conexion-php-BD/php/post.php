<?php 

	require('./guests.php');

	$accion = isset( $_GET['method'] ) ? $_GET['method'] : 'leer';

	switch ( $accion ) {
		
		case 'agregar':

				$request = file_get_contents('php://input');  // obtiene el JSON 
				$data = json_decode( $request, true );	// convierte en un array asociativo
					
				$guest = new Guest( 
					$data['firstname'], 
					$data['lastname'],
					$data['email']
				);

				echo $guest->save();

			break;
		
		default:
			# code...
			break;
	};

?>