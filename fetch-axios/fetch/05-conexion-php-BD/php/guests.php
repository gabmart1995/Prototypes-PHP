<?php 
	
	require('./database.php');

	class Guest {

		public $firstname = '';
		public $lastname = '';
		public $email = '';
		public $regDate = '';
		private $database = null;

		public function __construct( $firstname, $lastname, $email ) {

			$this->firstname = $firstname;
			$this->lastname = $lastname;
			$this->email = $email;
			$this->regDate = date('Y-m-d');
			$this->database = new Database();
		}

		public function testData() {

			return json_encode( $this->getJSON() );
		}

		private function getJSON() {

			$guest = array(
				'id' => 1,
				'firstname' => $this->firstname,
				'lastname' => $this->lastname,
				'email' => $this->email,
				'reg_date' => $this->regDate
			);

			$message = array(
				'status' => 200,
				'ok' => true,
				'guest' => $guest
			);

			return $message;
		}

		public function save() {

			$sql = "INSERT INTO MyGuests ( firstname, lastname, email, reg_date ) VALUES ( ?, ?, ?, ? )";
			
			$guest = array(
				'firstname' => $this->firstname,
				'lastname' => $this->lastname,
				'email' => $this->email,
				'reg_date' => $this->regDate
			);

			$result = $this->database->insert( $sql, $guest );
			return json_encode( $result );
		}
	}

?>