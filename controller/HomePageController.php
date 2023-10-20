<?php

    require_once('../model/connect.php');

    $sql = "SELECT * FROM `blog_catagories`";
    $result = mysqli_query($conn, $sql);

    $data = array();

    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }

    echo json_encode($data, JSON_UNESCAPED_UNICODE);

?>