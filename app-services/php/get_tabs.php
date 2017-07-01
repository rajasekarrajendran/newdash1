<?php
include("dbconnect.php");


$sql = "select * from tab_pro where tab_categories = 'Featured Products' ORDER BY tab_id DESC LIMIT 8";
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