<?php
    
    require_once('../model/connect.php');

    $id = $_POST['id'];

    $sql = "SELECT * FROM `appointment_form` WHERE id=$id";
    $result = mysqli_query($conn, $sql);

    $data = array();

    if ($result) {
        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }
    }
    echo json_encode($data, JSON_UNESCAPED_UNICODE);

?>