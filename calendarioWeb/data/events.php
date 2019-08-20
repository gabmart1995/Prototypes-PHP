<?php 

	/* 
		MODO DE RECEPCION y ASIGNACIÓN DE DATOS PHP 
		Ejemplo de Salida de formato JSON:

		'id' => '1'
		'title' => 'Titulo Evento',
		'description' => 'description',
		'color' => 'black',
		'textColor' => 'white',
		'start' => '2019-09-02 10:30:00',
		'end' => '2019-09-02 10:30:00'
	*/
	
	header( 'Content-Type: application/json' );	

	$accion = ( isset( $_GET['accion'] )) ? $_GET['accion'] : 'leer';

	// Conexion por PDO https://www.php.net/manual/es
	$pdo = new PDO( 'mysql:host=localhost;dbname=calendar', 'test', 't3stL0c?lhost' );

	switch ( $accion ) {
		
		case 'agregar':
			
			$sql = "INSERT INTO events( title, description, color, textColor, start, end ) ";
			$sql .= "VALUES( :title, :description, :color, :textColor, :start, :end  )";

			$sentenceSQL = $pdo -> prepare( $sql );
			
			$result = $sentenceSQL -> execute( array(

				"title" => $_POST['title'],
				"description" => $_POST['description'],
				"color" => $_POST['color'],
				"textColor" => $_POST['textColor'],
				"start" => $_POST['start'],
				"end" => $_POST['end']
			));

			echo json_encode( $result ); // true or false

			break;

		case 'eliminar':
			
			// instruccion eliminar
			echo "instruccion eliminar";

			break;

		case 'modificar':
			
			// instruccion modificar
			echo "instruccion modificar";

			break;
		
		default:
				
			try {
				// consulta BD.
				$sql = "SELECT * FROM events";
					
				$sentenceSQL = $pdo -> prepare( $sql );
				$sentenceSQL -> execute();

				$result = $sentenceSQL -> fetchAll( PDO::FETCH_ASSOC );

				echo json_encode( $result );
	
			} catch( PDOException $e ) {
		
				echo "¡Error!: " . $e -> getMessage() . "<br/>";

    			die();
			}

			break;
	}

?>