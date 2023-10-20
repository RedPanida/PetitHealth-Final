<?php

    require_once('../model/connect.php');  

    $username = $_POST['fullname'];

    $query_id = "SELECT id FROM user_information WHERE fullname='$username'";
    $result = mysqli_query($conn, $query_id);

    if (mysqli_num_rows($result) == 1) {
        $row = mysqli_fetch_assoc($result);
        $userID = $row['id'];
        
        $query = "SELECT pet_name FROM pet_catagories WHERE created_by_user_id='$userID'";
        $pet_name = mysqli_query($conn, $query);

        while ($list = mysqli_fetch_assoc($pet_name)) {
            $data[] = $list;
        }
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
    }
?>