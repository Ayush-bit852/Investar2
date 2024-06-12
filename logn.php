<?php
// Establish your database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db_connect";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Fetch data from the form
    $email = $_POST['txtEmail1'];
    $password = $_POST['txtPassword1'];

    // Perform SQL query (Please do not store passwords in plain text in a real scenario)
    $sql = "INSERT INTO your_table_name (email, password) VALUES ('$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>