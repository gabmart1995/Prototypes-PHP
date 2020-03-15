<?php 

	include './guests.php';
	
	$name = $_POST['name'];
	$lastname = $_POST['lastname'];
	$email = $_POST['email'];

	$GUEST = new Guest( $name, $lastname, $email );

	echo $GUEST->testData();

?>