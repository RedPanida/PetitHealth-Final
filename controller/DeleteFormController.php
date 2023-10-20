<?php
    require_once('../model/connect.php');

    $id = $_POST['id'];

    $sql = "DELETE FROM `appointment_form` WHERE id=$id";
    $result = mysqli_query($conn, $sql);

    if($result) {
        echo "delete_success";
    }else {
        echo "delete_failed";
    }
?>
