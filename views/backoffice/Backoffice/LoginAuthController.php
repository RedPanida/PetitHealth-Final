<?php 
    require_once('../Backoffice/ConnectController.php');

    $username = $_POST['username'];
    $password = $_POST['password'];
    $response = array();

    $sql = "SELECT * FROM `admin_account` WHERE `username` = '$username'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) == 1) {
        $row = mysqli_fetch_assoc($result);

        $db_pass = $row['password'];

        if ($password == $db_pass) {
            $response['success'] = true;
            $response['data'] = $row;
        } else {
            $response['success'] = false;
            $response['message'] = "password_wrong";
        }
    } else {
        $response['success'] = false;
        $response['message'] = "username_invalid";
    }

    echo json_encode($response);
?>
