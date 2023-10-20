<?php

require_once('../model/connect.php');

$user = $_POST['user'];
$hospital = $_POST['hospital'];
$pet = $_POST['pet'];
$symptom = $_POST['symptom'];
$symptomOther = $_POST['symptom-other'];
$date = $_POST['date'];
$time = $_POST['time'];
$paymentType = $_POST['payment-type'];
$paymentState;

$data = array();

if ($paymentType == 0) {
    $paymentState = "waiting";
} else if ($paymentType == 1) {
    $paymentState = "success";
}

$query_id = "SELECT id FROM user_information WHERE fullname='$user'";
$result = mysqli_query($conn, $query_id);

if (mysqli_num_rows($result) == 1) {
    $row = mysqli_fetch_assoc($result);
    $userID = $row['id'];

    if ($paymentState == "success") {
        $query = "INSERT INTO `appointment_form` (`created_by_user_id`, `pet_name`, `hospital_location`, `symptom`, `symptom_other`, `booking_date`, `booking_time`, `payment_type`, `payment_state`)
        VALUES ('$userID', '$pet', '$hospital', '$symptom', '$symptomOther', '$date', '$time', '$paymentType', 'success')";

        if (mysqli_query($conn, $query)) {
            $sql = "SELECT `id`, `created_by_user_id`, `pet_name`, `hospital_location`, `symptom`, `symptom_other`, `booking_date`, `booking_time`, `payment_type`, `payment_state`, `datetime`
          FROM `appointment_form` ORDER BY `datetime` DESC LIMIT 1;";
            $checked = mysqli_query($conn, $sql);

            if ($checked) {
                while ($row = mysqli_fetch_assoc($checked)) {
                    $data['id'] = $row['id'];
                    $data['createdByUserId'] = $row['created_by_user_id'];
                    $data['petName'] = $row['pet_name'];
                    $data['Hospital'] = $row['hospital_location'];
                    $data['Symptom'] = $row['symptom'];
                    $data['Symptom_Other'] = $row['symptom_other'];
                    $data['Date'] = $row['booking_date'];
                    $data['Time'] = $row['booking_time'];
                    $data['PaymentType'] = $row['payment_type'];
                    $data['PaymentState'] = $row['payment_state'];
                }

                $jsonData = json_encode($data);
                echo $jsonData;
            } else {
                echo "Error: " . mysqli_error($conn);
            }
        } else {
            echo "Error: " . mysqli_error($conn);
        }
    } else {
        echo "payment-not-success";
    }

    mysqli_close($conn);
}
?>
