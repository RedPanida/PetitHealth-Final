<?php
    require_once('../model/connect.php');

    $id = $_POST['id'];
    $petName = $_POST['pet_name'];
    $hospital = $_POST['hospital'];
    $symptom = $_POST['symptom'];
    $symptom_oth = $_POST['symptom_other'];

    $stmt = $conn->prepare("UPDATE `appointment_form` SET `pet_name`=?, `hospital_location`=?, `symptom`=?, `symptom_other`=? WHERE `id`=?");
    $stmt->bind_param("ssssi", $petName, $hospital, $symptom, $symptom_oth, $id);
    $result = $stmt->execute();

    if ($result) {
        echo "update_success";
    } else {
        echo "update_failed";
    }
?>
