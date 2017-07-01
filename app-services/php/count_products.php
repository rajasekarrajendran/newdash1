
<?php
include("dbconnect.php");



$sql = "SELECT COUNT(*) AS 'count' FROM products;";
$result = $conn->query($sql);
$items = array();

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $items=$row;
    }
} else {
    echo "0 results";
}
echo json_encode($items);
?>