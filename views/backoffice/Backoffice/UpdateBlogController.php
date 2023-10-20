<?php
    require_once('../Backoffice/ConnectController.php');

    $id = $_POST['id'];
    $title = $_POST['title'];
    $subtitle = $_POST['subtitle'];
    $content = $_POST['content'];
    $created = $_POST['created'];
    $date = $_POST['date'];

    $fileTempName = $_FILES['file']['tmp_name'];
    $filename = $_FILES['file']['name'];

    $targetPath = '../upload_blog/' . $date . "-" . $filename;
    $targetName = $date . "-" . $filename;

    if (move_uploaded_file($fileTempName, $targetPath)) {
        $stmt = $conn->prepare("UPDATE `blog_catagories` SET `title`=?, `subtitle`=?, `filename`=?, `content`=?, `created`=? WHERE `id`=?");
        $stmt->bind_param("sssssi", $title, $subtitle, $targetName, $content, $created, $id);
        $result = $stmt->execute();

        if ($result) {
            echo "update_success";
        } else {
            echo "update_failed: " . $stmt->error;
        }
        $stmt->close();
    } else {
        echo "file_upload_failed";
    }
?>

