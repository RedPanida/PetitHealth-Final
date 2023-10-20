<?php

  require_once('../model/connect.php');   

  $pet_id = $_POST['petID'];

  $query = "SELECT * FROM pet_catagories WHERE id='$pet_id'";
  $result = mysqli_query($conn, $query);

  if (mysqli_num_rows($result) == 1) {
    $row = mysqli_fetch_assoc($result);
    echo json_encode($row);
  }
//   echo $pet_id;

?>