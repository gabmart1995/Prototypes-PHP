<?php 

	class Person {

		private $firstName = 'Gabriel';
		private $lastName = 'Martínez';
		private $age = 24;	


		public function greet() {

			echo "Hello my name is: " . $this -> getName() . " " . $this -> getLastName() .  
				" <br> ";

			echo "My age is: " . $this -> getAge();
		}

		public function getName() {

			return $this -> firstName;
		}

		public function getLastName() {

			return $this -> lastName;
		}

		public function getAge() {

			return $this -> age;
		}
	}

?>