<?php
    
    require_once('../model/connect.php');

    $user = $_POST['user'];
    $query_id = "SELECT id FROM user_information WHERE fullname='$user'";
    $result_id = mysqli_query($conn, $query_id);

      $data = array();

    if (mysqli_num_rows($result_id) == 1) {
        $row_id = mysqli_fetch_assoc($result_id);
        $getID = $row_id['id'];

        $sql = "SELECT * FROM `appointment_form` WHERE created_by_user_id = $getID ORDER BY `id` DESC;";
        $result = mysqli_query($conn, $sql);
      
        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }

        echo json_encode($data, JSON_UNESCAPED_UNICODE);
    }
    // $sql = "SELECT * FROM `appointment_form` WHERE 1";
?>