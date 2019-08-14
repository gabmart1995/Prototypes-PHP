<?php 

	// Archivo de conexion a BD de forma tradicional
	// modo de consulta

	class DB {

		private $serverName = 'localhost';
		private $userName = 'test';
		private $password = '123456';
		private $db = 'person';

		public function connect() {
		
			$conn = new mysqli( $this -> serverName, 
								$this -> userName, 
								$this -> password, 
								$this -> db );

			//check the connection
			if ( $conn -> connect_error ) {

				die( 'Conection failed. ' . $conn -> connect_error );
			}

			// print "Conexion exitosa\n";

			return $conn; 
		}

		public function createTable() {

			$conection = $this -> connect();

			// sql
			$sql = 'CREATE TABLE users(';
			$sql .= 'id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, ';
			$sql .= 'firstname CHAR(30) NOT NULL, ';
			$sql .= 'lastname CHAR(30) NOT NULL, ';
			$sql .= 'email CHAR(30) );';

			$this -> verifySQL( $conection, $sql, "Tabla creada exitosamente\n" );

			$conection -> close(); // close the conection
		}

		public function insertData() {

			$conection = $this -> connect();

			// sql
			$sql = "INSERT INTO users (";
			$sql .= "firstname, lastname, email )";
			$sql .= "VALUES( 'test', 'test', 'test@test1.com' );";

			$this -> verifySQL( $conection, $sql, "Nuevo registro creado\n" );

			$conection -> close(); // close the conection
		}

		public function insertDataLastId() {

			$conection = $this -> connect();

			// sql
			$sql = "INSERT INTO users (";
			$sql .= "firstname, lastname, email )";
			$sql .= "VALUES( 'test2', 'test2', 'test@test2.com' );";

			$this -> verifySQLLastId( $conection, $sql, "Nuevo registro creado. último id es: " );

			$conection -> close(); // close the conection
		}

		public function selectData() {

			$conection = $this -> connect();

			//sql
			$sql = "SELECT id, firstname, lastname, email FROM users;";

			$result = $conection -> query( $sql );

			$this -> printResult( $result );

			$conection -> close(); // close the conection
		}

		public function deleteData() {

			$conection = $this -> connect();

			//sql
			$sql = "DELETE FROM users WHERE id=4";

			$this -> verifySQL( $conection, $sql, "Registro eliminado existosamente\n" );

			$conection -> close(); // close the conection
		}

		public function updateData() {

			$conection = $this -> connect();

			//sql 
			$sql = "UPDATE users SET firstname='Gabriel', ";
			$sql .= "lastname='Martinez', email='gabmart1995@gmail.com' ";
			$sql .= "WHERE id=2;";

			$this -> verifySQL( $conection, $sql, "Registro actualizado existosamente\n" );

			$conection -> close(); // close the conection
		}

		private function verifySQL( $conection, $sql, $message ) {

			if ( $conection -> query( $sql ) == true ) {

				print $message;
			}

			else {

				print "Error: " . $conection -> error;
			}
		}

		private function verifySQLLastId( $conection, $sql, $message ) {

			if ( $conection -> query( $sql ) ) {

				$lastId = $conection -> insert_id;
				
				print  $message . $lastId . "\n";
			}

			else {

				print "Error: " . $conection -> error;
			}
		}

		private function printResult( $result ) {

			if ( $result -> num_rows > 0 ) {

				print "id:\tfistname:\tlastname:\temail:\n";

				while ( $row = $result -> fetch_assoc() ) {

					print $row["id"]. "\t" .$row["firstname"] . "\t\t" . $row["lastname"].  "\t" . $row["email"]. "\n";
				}
			}

			else {

				print "0 results"; 
			}
		}
	}

?>