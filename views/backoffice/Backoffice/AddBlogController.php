<?php
    require_once('../Backoffice/ConnectController.php');

    $title = $_POST['title'];
    $subtitle = $_POST['subtitle'];
    $content = $_POST['content'];
    $created = $_POST['created'];
    $filename = $_POST['filename'];
    $date = $_POST['datetime'];

    $fileTempName = $_FILES['img-blog']['tmp_name'];
    $targetPath = '../upload_blog/' . $date . "-" . $filename;

    $targetName = $date . "-" . $filename;
    
    move_uploaded_file($fileTempName, $targetPath);

    $stmt = $conn->prepare("INSERT INTO `blog_catagories`(`title`, `subtitle`, `filename`, `content`, `created`)
    VALUES (?, ?, ?, ?, ?)");

    $stmt->bind_param("sssss", $title, $subtitle, $targetName, $content, $created);
    $result = $stmt->execute();

    if ($result) {
        echo "upload_success";
    } else {
        echo "upload_failed: " . $stmt->error;
    }
    $stmt->close();

?>
