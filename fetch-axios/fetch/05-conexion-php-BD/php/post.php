<?php 

	require('./guests.php');
	
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$email = $_POST['email'];

	$guest = new Guest( $firstname, $lastname, $email );
	echo $guest->save();

?>