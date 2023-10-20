<?php

  require_once('../model/connect.php');   

  $pet_id = $_POST['petID'];

  $query = "DELETE FROM pet_catagories WHERE id='$pet_id'";
  $result = mysqli_query($conn, $query);

  if ($result) {
    echo "delete_success";
  } else {
    echo "delete_failed";
  }

?>