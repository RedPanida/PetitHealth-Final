<?php

  require_once('../model/connect.php');  

  $pet_id = $_POST['petID'];
  $pet_name = $_POST['petName'];
  $pet_type = $_POST['petType'];
  $pet_vaccine = $_POST['petVaccine'];
  $pet_food = $_POST['petFood'];


  $query = "UPDATE pet_catagories SET pet_name='$pet_name', food='$pet_food', vaccine='$pet_vaccine', pet_type='$pet_type' WHERE id=$pet_id";

  $result = mysqli_query($conn, $query);

  if ($result) {
    echo "updated_success";
  } else {
    echo "Error updating record: " . mysqli_error($conn);
  }

?>