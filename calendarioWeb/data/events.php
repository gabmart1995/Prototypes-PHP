<?php 
	
	// Conexion por PDO https://www.php.net/manual/es

	header( 'Content-Type: application/json' );	
	
	try {

		$sql = "SELECT * FROM events";
		$pdo = new PDO( 'mysql:host=localhost;dbname=calendar', 'test', '123456' );

		$sentenceSQL = $pdo -> prepare( $sql );
		$sentenceSQL -> execute();

		$result = $sentenceSQL -> fetchAll( PDO::FETCH_ASSOC );

		echo json_encode( $result );
	
	} catch( PDOException $e ) {
		
		print "¡Error!: " . $e -> getMessage() . "<br/>";
    	die();
	}

?>