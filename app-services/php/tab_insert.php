<?php
include("dbconnect.php");
?>

<?php
$obj=json_decode(file_get_contents('php://input'), true);
$datas = json_decode($_POST['uploadinfo']);
$category =  $datas->tcategories;
$tname =  $datas->tname;
$tprice =  $datas->tprice;



$file = $_FILES['file'];
$name = $file['name'];
$imgpath = 'tabs/image/'. basename($name);
$path = '../../tabs/image/' . basename($name);
if (move_uploaded_file($file['tmp_name'], $path)) {
    echo "Move succeed.";
}
else {
    echo "Move failed. Possible duplicate?";
}




$sql = "INSERT INTO tab_pro (tab_categories,tab_name,tab_price,tab_images)
VALUES('$category','$tname','$tprice','$imgpath')";


if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

?>