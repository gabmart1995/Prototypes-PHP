<?php 

	include './../models/carModel.php';

		$car1 = new Car( 'BMW', 'blue', 100 );
		$car2 = new Car( 'Mascerati', 'green', 250 );
		$car3 = new Car( 'Ferrari', 'red', 320 );

	include './../views/carView.php';

?>