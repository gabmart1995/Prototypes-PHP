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

			case 'modificar':

					$request = file_get_contents('php://input');

					$data = json_decode( $request, true );

					$id = isset( $_GET['id'] ) ? $_GET['id'] : null;

					if ( $id != null ) {

						$guest = new Guest(
							$data['firstname'],
							$data['lastname'],
							$data['email']
						);

						echo $guest->editGuest( $id );
					}

				break;

			case 'eliminar':
					
					$id = isset( $_GET['id'] ) ? $_GET['id'] : null;

					if ( $id != null ) {

						$guest = new Guest(
							$data['firstname'],
							$data['lastname'],
							$data['email']
						);

						echo $guest->deleteGuest( $id );
					}

				break;
		
		default:

				$guest = new Guest('', '', '');
				echo $guest->consultAllGuests();

			break;
	};

?>