<?php 
	
	include './conexion.php';
	
	class Guest {

		public $name = '';
		public $lastname = '';
		public $email = '';
		public $regDate = '';
		// private $DB = new Conexion();

		public function __construct( $name, $lastname, $email ) {

			$this->name = $name;
			$this->lastname = $lastname;
			$this->email = $email;
			$this->regDate = date('Y-m-d');
		}

		public function testData() {

			// array JSON
			$arrayJSON = array(
				'name' => $this->name, 
				'lastname' => $this->lastname,
				'email' => $this->email,
				'regDate' => $this->regDate
			);

			return json_encode( $arrayJSON );
		}
	}

?>