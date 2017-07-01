<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "demo";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$postdata = file_get_contents("php://input");
$obj=json_decode($postdata);

$img = $obj->pimages;

$file = $_FILES['$img'];
$name = $file['name'];
$path = 'form/myimage/' . basename($name);
if (move_uploaded_file($file['tmp_name'], $path)) {
    echo "Move succeed.";
}
else {
    echo "Move failed. Possible duplicate?";
}

$sql = "INSERT INTO  products (product_img) VALUES ('$path','$name')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);



?>