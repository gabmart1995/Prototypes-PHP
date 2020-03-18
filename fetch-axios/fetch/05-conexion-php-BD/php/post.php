<?php 

	require('./guests.php');
	
	$name = $_POST['name'];
	$lastname = $_POST['lastname'];
	$email = $_POST['email'];

	$guest = new Guest( $name, $lastname, $email );
	echo $guest->createGuest();

?>