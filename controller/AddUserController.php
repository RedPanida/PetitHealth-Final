<?php
   require_once('../model/connect.php');  

    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $tel = $_POST['tel'];
    $password = $_POST['password'];
    $address = $_POST['address'];
    $email = $_POST['email'];

    $fullname = $firstname." ".$lastname;
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    

    // $query = "INSERT INTO user_information (fullname, tel, password, address, email)VALUES ($fullname, $tel, $hashed_password, 
    // $address, $email)";
    $query = "INSERT INTO user_information (fullname, telephone, password, address, email) VALUES ('$fullname', '$tel', '$hashed_password', '$address', '$email')";
    $result = mysqli_query($conn, $query);

    
    if ($result) {
        echo "success";
    } else {
        echo "error".$conn->error;;
    }
    $conn->close();

?>