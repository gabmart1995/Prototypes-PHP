<?php 
	
	include './../config/database.php';

	$db = new DB();
	
	// $db -> createTable(); crea la tabla SQL
	// $db -> insertData(); inserta data SQL
	// $db -> insertDataLastId();  muestra el ultimo id creado
	// $db -> deleteData(); // elimina un registro
	// $db -> updateData(); // actualiza un registro 
	$db -> selectData(); // muestra los datos

?>