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

			$this->mysqli->select_db('myDB');
		}

		public function close() {

			if ( $this->mysqli != null ) {
				$this->mysqli->close();
				$this->mysqli = null;
			}
		}

		public function insert( $sql, $guest ) {
			
			$message = null;

			$this->connect();
			
			// mysql object			
			if ( $stmt = $this->mysqli->prepare( $sql ) ) {

					$stmt->bind_param(
						'ssss', 
						$guest['firstname'], 
						$guest['lastname'],
						$guest['email'],
						$guest['reg_date']
					);

					$stmt->execute();
				
			} else {

				$this->close();
				
				$message = $this->showJSON( 500, false, 'error en la consulta SQL' );
				
				return $message;
			}

			$message =  $this->showJSON( 201, true, $guest );

			$stmt->close();
			$this->close();

			return $message;
		}

		private function showJSON( $status, $ok, $payload ) {

			return array(
				'status' => $status,
				'ok' => $ok,
				'payload' => $payload
			);
		}
	}

?>