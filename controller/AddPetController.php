<?php
  require_once('../model/connect.php');

  $petName = $_POST['petName'];
  $petType = $_POST['petType'];
  $vaccine = $_POST['vaccine'];
  $food = $_POST['food'];
  $petImage = $_FILES['petImage'];
  $username = $_POST['username'];

  $query_id = "SELECT id FROM user_information WHERE fullname='$username'";
  $result = mysqli_query($conn, $query_id);

  if (mysqli_num_rows($result) == 1) {
      $row = mysqli_fetch_assoc($result);
      $getID = $row['id'];

      if ($petImage['error'] === UPLOAD_ERR_OK) {
          $fileType = $petImage['type'];
          $fileName = $petImage['name'];
          $fileTempName = $petImage['tmp_name'];

          $targetPath = '../asset/upload_pet/' . "by-" . $username . "_" . $fileName;
          $targetPathAdmin = '../views/backoffice/upload_pet/' . "by-" . $username . "_" . $fileName;

          // Move the uploaded file to the first folder
          move_uploaded_file($fileTempName, $targetPath);

          // Copy the file to the second folder
          if (copy($targetPath, $targetPathAdmin)) {
              $filePath = "by-" . $username . "_" . $fileName;

              $query = "INSERT INTO pet_catagories (created_by_user_id, pet_name, pet_type, vaccine, food, filename) VALUES ('$getID', '$petName', '$petType', '$vaccine', '$food', '$filePath')";
              $query_result = mysqli_query($conn, $query);

              if ($query_result) {
                  echo "upload_success";
              } else {
                  echo "upload_failed";
              }
          } else {
              echo "copy_failed";
          }
      }
  }
?>
