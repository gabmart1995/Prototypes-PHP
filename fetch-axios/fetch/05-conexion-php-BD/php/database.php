<?php 
	
	class Database {

		private $host = 'localhost';
		private $db = 'myDB';
		private $user = 'test';
		private $password = '123456';
		private $mysqli = null;

		public function connect() {

			$this->mysqli = new mysqli(
				$this->host,
				$this->user,
				$this->password,
				$this->db
			);

			if ( $this->mysqli->connect_error ) {
				echo 'Error' .$this->mysqli->connect_error;
			}

			echo "conexion exitosa";
		}

		public function close() {

			if ( $this->mysqli != null ) {
				$this->mysqli->close();
				$this->mysqli = null;
			}

			echo "conexion cerrada";
		}

		public function insert( $sql, $data ) {
			
			$message = null;
			$stmt = null;

			$this->connect();
			
			if ( $stmt = $this->mysqli->prepare( $sql ) ) {

					$stmt->bind_param(
						'ssss', 
						$data['firstname'], 
						$data['lastname'],
						$data['email'],
						$data['reg_date']
					);

					$stmt->execute();
				
				} else {

					$this->close();
					
					$message = $this->showJSON( 500, false, 'error al crear stmt' );
					
					return $message;
				}

				$message =  $this->showJSON( 200, true, $data );

				$this->close();

				return $message;
		}

		private function showJSON( $status, $ok, $message ) {

			return array(
				'status' => $status,
				'ok' => $ok,
				'message' => $message
			);
		}
	}

?>