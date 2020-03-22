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

		public function consultAllGuests() {

			$sql = 'SELECT * FROM MyGuests';

			$result = $this->database->consultAll( $sql );
			return json_encode( $result );
		}

		public function editGuest( $id ) {

			$sql = "UPDATE MyGuests SET firstname=?, lastname=?, email=? WHERE id=?";

			$guest = array(
				'id' => $id,
				'firstname' => $this->firstname,
				'lastname' => $this->lastname,
				'email' => $this->email,
			);

			$result = $this->database->edit( $sql, $guest );
			return json_encode( $result );
		}

		public function deleteGuest( $id ) {

			$sql = "DELETE FROM MyGuests WHERE id=?";

			$result = $this->database->delete( $sql, $id );
			return json_encode( $result );
		}
	}

?>