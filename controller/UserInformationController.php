<?php
    require_once('../model/connect.php');  

    $email = $_POST['email'];
    $password = $_POST['password'];

    $query = "SELECT * FROM user_information WHERE email='$email'";
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) == 1) {
        $row = mysqli_fetch_assoc($result);
        $hashed_password = $row['password'];
        if (password_verify($password, $hashed_password)) {
            echo $row["fullname"];
        } else {
            echo "password_wrong";
        }
    } else {
        echo "email_invalid";
    }

    // echo json_encode($userdata, JSON_UNESCAPED_UNICODE);
?>