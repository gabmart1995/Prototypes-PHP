<?php 
	
	$usuario = $_POST['usuario'];
	$password = $_POST['password'];

	if ( $usuario === '' || $password === '' ) {
		
		echo json_encode('error');
	
	} else {

		$message = 'Correcto <br>Usuario: ' .$usuario. '<br>Pass: ' .$password;

		echo json_encode( $message );
	}

?>