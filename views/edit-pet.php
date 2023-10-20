<!DOCTYPE html>
<html lang="en">
<head>
    <script>
        if (!document.cookie.includes("logged_in=true")) {
          window.location.href = "login.html";
        }
    </script>

    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- css -->
    <link rel="stylesheet" href="../asset/css/style.css">
    <!-- front-awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- bootstrap -->
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
    />
    <title>Edit Pet Catagories</title>
</head>
<body>
<?php include('./header.php');  ?>
    <div class="container mt-5">
       
        
        <div class="row justify-content-center my-5">
            <a href="./add-pet.php"><button class="btn_back_pet-catagories">ย้อนกลับ</button></a>
            <div class="col-12 col-lg-6 d-flex justify-content-center flex-column">
                <h2 id="pet_id"></h2>

                <img id="img_pet" class="img-fluid">

                <label for="pet_name" class="mt-3">ชื่อสัตว์เลี้ยง</label>
                <input type="text" id="pet_name" class="pet_name input_edit_pet px-3 py-2">

                <label for="pet_type" class="mt-3">ประเภทของสัตว์เลี้ยง</label>
                <input type="text" id="pet_type" class="pet_type input_edit_pet px-3 py-2">

                <label for="pet_vaccine" class="mt-3">จำนวนวัคซีนที่ได้รับ</label>
                <input type="number" id="pet_vaccine" class="pet_vaccine input_edit_pet px-3 py-2">

                <label for="pet_food" class="mt-3">อาหารที่รับประทานเป็นประจำ</label>
                <input type="text" id="pet_food" class="pet_food input_edit_pet px-3 py-2">
      
                <!-- <div class="row mt-3"> -->
                    <button class="btn_edit mt-3 p-2">ยืนยันการแก้ไขข้อมูล</button>
                <!-- </div> -->
            </div>
            
        </div>

    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="../asset/js/edit_pet.js"></script>

</html>
