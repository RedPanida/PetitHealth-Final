<?php
    $server = "localhost";
    $username = "root";
    $password = "";
    $db = "petithealth";

    $conn = new mysqli($server, $username, $password, $db);


    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
        echo "Connection failed";
    }
    
?>