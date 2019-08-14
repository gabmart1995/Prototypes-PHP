<?php 

	class Car {

		private $model;
		private $color;
		private $speed;

		public function __construct( $model, $color, $speed ) {

			$this -> model = $model;
			$this -> color = $color;
			$this -> speed = $speed;
		}

		public function getModel() {

			return $this -> model;
		}

		public function getColor() {

			return $this -> color;
		}

		public function getSpeed() {

			return $this -> speed;
		}

		public function accelerate() {

			$this -> speed++;
		}

		public function brake() {

			$this -> speed--;
		} 

		public function showContent() {

			$info = "<h4>car info:</h4>";
			$info .= "modelo: " . $this -> getModel();
			$info .= "<br/>Color: " . $this -> getColor();
			$info .= "<br/>Velocidad: " . $this -> getSpeed();

			return $info;
		}

	}
?>