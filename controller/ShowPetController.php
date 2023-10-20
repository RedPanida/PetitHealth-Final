<?php

    require_once('../model/connect.php');  

    $user = $_POST['fullname'];

    $query_id = "SELECT id FROM user_information WHERE fullname='$user'";
    $result_id = mysqli_query($conn, $query_id);

    if (mysqli_num_rows($result_id) == 1) {
        $row_id = mysqli_fetch_assoc($result_id);
        $getID = $row_id['id'];

        $query = "SELECT * FROM pet_catagories WHERE created_by_user_id=$getID";
        $result = mysqli_query($conn, $query);

        $data = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }

        echo json_encode($data, JSON_UNESCAPED_UNICODE);
    }

?>