<?php
    require_once('../Backoffice/ConnectController.php');
    
    $query = "SELECT * FROM `blog_catagories`";
    $result = mysqli_query($conn, $query);
    $data = array();

    if ($result) {
        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }
    }
    echo json_encode($data);
?>
