<?php 

	/* 
		RECEPCION DE DATOS PHP 
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

	// Conexion por PDO: https://www.php.net/manual/es/book.pdo.php
	$pdo = new PDO( 'mysql:host=localhost;dbname=calendar', 'test', 't3stL0c?lhost' );

	switch ( $accion ) {
		
		case 'agregar':
			
			$sql = "INSERT INTO events( title, description, color, textColor, start, end ) ";
			$sql .= "VALUES( :title, :description, :color, :textColor, :start, :end  );";

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

		case 'modificar':
			
			// SQL
			$sql = "UPDATE events SET ";
			$sql .= "title=:title, ";
			$sql .= "description=:description, ";
			$sql .= "color=:color, ";
			$sql .= "textColor=:textColor, ";
			$sql .= "start=:start, ";
			$sql .= "end=:end WHERE id=:ID;";

			$sentenceSQL = $pdo -> prepare( $sql );
			$result = $sentenceSQL -> execute( array(
				
				'ID' => $_POST['id'], 
				"title" => $_POST['title'],
				"description" => $_POST['description'],
				"color" => $_POST['color'],
				"textColor" => $_POST['textColor'],
				"start" => $_POST['start'],
				"end" => $_POST['end']
			));

			echo json_encode( $result );

		break;

		case 'eliminar': 

			$sql = "DELETE FROM events WHERE id=:ID;";
			$result = false;

			if ( isset( $_POST['id'] ) ) {

				$sentenceSQL = $pdo -> prepare( $sql );
				$result = $sentenceSQL -> execute( array( 'ID' => $_POST['id'] ) );
			}

			echo json_encode( $result );

		break;
		
		default:
				
			try {
				// consulta BD.
				$sql = "SELECT * FROM events;";
					
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