<?php
include("dbconnect.php");
?>

<?php
$obj=json_decode(file_get_contents('php://input'), true);
$datas = json_decode($_POST['uploadinfo']);
$pname =  $datas->pname;
$price =  $datas->pprice;
$rating =  $datas->prating;
$description =  $datas->pdescription;


$file = $_FILES['file'];
$name = $file['name'];
$imgpath = 'form/myimage/'. basename($name);
$path = '../../form/myimage/' . basename($name);
if (move_uploaded_file($file['tmp_name'], $path)) {
    echo "Move succeed.";
}
else {
    echo "Move failed. Possible duplicate?";
}




$sql = "INSERT INTO products (product_name,product_price,product_rating,product_dec,product_img)
VALUES('$pname','$price','$rating','$description','$imgpath')";


if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

?>