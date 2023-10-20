<?php
    require_once('../Backoffice/ConnectController.php');

    $id = $_POST['id'];
    $filename = $_POST['filename'];

    $filePath = '../upload_blog/' . $filename;
    if (file_exists($filePath)) {
        unlink($filePath);
    }

    $stmt = $conn->prepare("DELETE FROM `blog_catagories` WHERE `id` = ?");
    $stmt->bind_param("i", $id);
    $result = $stmt->execute();
    
    if ($result) {
        echo "delete_success";
    } else {
        echo "delete_failed: " . $stmt->error;
    }
    $stmt->close();
?>