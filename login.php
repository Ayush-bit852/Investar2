<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'root', '','db_connect');

// get the post records
$txtEmail = $_POST['txtEmail'];
$txtPassword = $_POST['txtPassword'];


// database insert SQL code
$sql = "INSERT INTO `tbl_login` ( `fldEmail`, `fldPassword`) VALUES ('$txtEmail', '$txtPassword')";

// insert in database 
$rs = mysqli_query($con, $sql);

if($rs)
{
	echo "Login Records Inserted";
}

?>v 

