<?php
    require_once('../Backoffice/ConnectController.php');

    $sql_queries = [
        "SELECT COUNT(id) AS count FROM user_information",
        "SELECT COUNT(id) AS count FROM pet_catagories",
        "SELECT COUNT(id) AS count FROM blog_catagories",
        "SELECT COUNT(id) AS count FROM appointment_form"
    ];

    $results = [];
    foreach ($sql_queries as $sql) {
        if ($result = mysqli_query($conn, $sql)) {
            $row = mysqli_fetch_assoc($result);
            $count = $row['count'];
            $countString = strval($count);
            $digitString = implode(str_split($countString));
            $results[] = $digitString;
            mysqli_free_result($result);
        } else {
            echo 'Error: ' . mysqli_error($conn);
            exit;
        }
    }
    echo json_encode($results);

    mysqli_close($conn);
?>
