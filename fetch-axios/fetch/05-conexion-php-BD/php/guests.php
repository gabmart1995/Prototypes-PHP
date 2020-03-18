<?php 
	
	require('./conexion.php');
	
	class Guest {

		public $name = '';
		public $lastname = '';
		public $email = '';
		public $regDate = '';
		private $db;

		public function __construct( $name, $lastname, $email ) {

			$this->name = $name;
			$this->lastname = $lastname;
			$this->email = $email;
			$this->regDate = date('Y-m-d');
			$this->db = new Conexion();
		}

		public function testData() {

			return json_encode( $this->getJSON() );
		}

		public function createGuest() {

			return json_encode( $this->db->insertData( $this->getJSON() ) );

		}

		private function getJSON() {
			
			$guest = array(
				'name' => $this->name,
				'lastname' => $this->lastname,
				'email' => $this->email,
				'reg_date' => $this->regDate 
			);

			return $guest;
		}
	}

?>