<?php
    require_once('../Backoffice/ConnectController.php');

    $sql = "SELECT * FROM `pet_catagories`";
    $result = mysqli_query($conn, $sql);

    $response = array(); // Initialize the response array

    if ($result) {
        $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
        $response['data'] = $rows;
    }

    echo json_encode($response);
?>