<?php
include("dbconnect.php");
?>

<?php
$obj=json_decode(file_get_contents('php://input'), true);
$datas = json_decode($_POST['uploadinfo']);
$bannertitle =  $datas->btitle;




$file = $_FILES['file'];
$name = $file['name'];
$imgpath = 'banner-images/image/'. basename($name);
$path = '../../banner-images/image/' . basename($name);
if (move_uploaded_file($file['tmp_name'], $path)) {
    echo "Move succeed.";
}
else {
    echo "Move failed. Possible duplicate?";
}




$sql = "INSERT INTO banner_pro (banner_title,banner_image)
VALUES('$bannertitle','$imgpath')";


if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

?>