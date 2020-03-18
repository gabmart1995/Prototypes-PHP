<?php 
	
	class Conexion {

		private $serverName = 'localhost';
		private $username = 'test';
		private $password = '123456';
		private $conn = null;

		public function connectDatabase() {

			$this->conn = mysqli_connect(
				$this->serverName,
				$this->username,
				$this->password
			);

			if ( !$this->conn ) {
				die('conexion fallida: '. mysqli_connect_error());
			}

			echo 'conexion exitosa';

			//  selecciona la bd
			mysqli_select_db( $this->conn, 'myDB' ) or die('No se encunetra la BD.');
		}

		public function closeConnection() {
		
			mysqli_close( $this->conn ); 
		}

		public function createDatabase() {

			$sql = "CREATE DATABASE myDB";

			if ( $this->conn->query( $sql ) ) {
				
				print 'Base de datos creada exitosamente';

			} else {

				echo 'La base de datos ya esta creada';
			}
		}

		public function createTables() {

			$sql = "

				CREATE TABLE MyGuests(
					id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
					firstname VARCHAR(30) NOT NULL,
					lastname VARCHAR(30) NOT NULL,
					email VARCHAR(50) NOT NULL,
					reg_date DATE NOT NULL
				)
			
			";

			if ( $this->conn->query( $sql ) ) {

				echo 'Tabla creada';

			} else {

				echo 'La tabla ya se encuentra creada';
			}
		}

		public function insertData( $guest ) {

			return $guest;

			/*$sql = "
				INSERT INTO MyGuests( firstname, lastname, email, reg_date )
					VALUES( ?, ?, ?, ? );
				";

			$result = mysqli_prepare( $this->conn, $sql );
			
			$ok = mysqli_stmt_bind_param( 
				$result, 
				'ssss', 
				$guest->firstname, 
				$guest->lastname,
				$guest->email,
				$guest->reg_date
			);

			$ok = mysqli_stmt_execute( $result );

			if ( $ok ) {
				
				echo json_encode('registro creado');
				
				mysqli_stmt_close( $result );
			
			} else {

				echo json_encode('error en crear registro'); 
			}*/
		}

	}

?>