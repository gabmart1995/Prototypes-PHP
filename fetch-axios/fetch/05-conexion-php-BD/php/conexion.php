<?php 
	
	class Conexion {

		private $serverName = 'localhost';
		private $username = 'test';
		private $password = '123456';
		private $conn = null;

		public function connectDataBase() {

			$this->conn = mysqli_connect(
				$this->serverName,
				$this->username,
				$this->password
			);

			if ( !$this->conn ) {
				die('conexion fallida: '. mysqli_connect_error());
			}

			echo 'conexion exitosa';
			
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

				CREATE TABLE myDB.MyGuests(
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

		public function insertData( $data ) {

			$sql = "
				INSERT INTO MyDB.MyGuests( firstname, lastname, email, reg_date )
					VALUES( ?, ?, ?, ? );
				";

			if ( $this->conn->query( $sql ) ) {

				return 'Registro creado';
			
			} else {

				return 'Error en crear registro ' .$sql->error; 
			}
		}

	}

?>