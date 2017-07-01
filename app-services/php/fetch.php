<?php
include("dbconnect.php");






$sql = "select * from products GROUP BY product_id";
$result = $conn->query($sql);
$items = array();

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $items[]=$row;
    }
} else {
    echo "0 results";
}
echo json_encode($items);
?>