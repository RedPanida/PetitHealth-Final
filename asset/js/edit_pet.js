var fullname = localStorage.getItem("fullname");
var imagePet = document.getElementById('img_pet');
var petName = document.getElementById('pet_name');
var petType = document.getElementById('pet_type');
var petVaccine = document.getElementById('pet_vaccine');
var petFood = document.getElementById('pet_food');
const urlParams = new URLSearchParams(window.location.search);
const petId = urlParams.get('id');
const petIdEdit = document.getElementById('pet_id');

$(document).ready(function() {
  var showUserName = $('#full_name')
  showUserName.html('แก้ไขรายการสัตว์เลี้ยงของคุณ: '+fullname);

//   console.log(petId);
    $.ajax({
        type: "POST",
        url: "../controller/EditPetController.php",
        data: {
        petID: petId
        },
        success: function (response) {
            var data = JSON.parse(response)
            // console.log("data:", data);
            var encodedFilename = decodeURIComponent(data.filename);
            var imageUrl = "../asset/upload_pet/" + encodedFilename;

            // console.log(imageUrl);
            imagePet.src = imageUrl;
            petName.value = data.pet_name
            petType.value = data.pet_type
            petVaccine.value = data.vaccine
            petFood.value = data.food
            petIdEdit.textContent = 'รายการสัตว์เลี้ยงที่: ' + data.id
        }

    })
})

$(".btn_edit").click(function(){
    $.ajax({
        type: "POST",
        url: "../controller/UpdatePetController.php",
        data: {
            petID: petId,
            petName: petName.value,
            petType: petType.value,
            petVaccine: petVaccine.value,
            petFood: petFood.value
        },
        success: function (response) {
            if(response == "updated_success"){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "แก้ไขรายการสัตว์เลี้ยงสำเร็จ",
                    text: `ทำการแก้ไขเสร็จสิ้น`,
                    timer: 2000
                });
                setTimeout(function() {
                    window.location.href = '../views/add-pet.php';
                }, 2000);
            }else{
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "แก้ไขรายการสัตว์เลี้ยงไม่สำเร็จ",
                    text: `ไม่สามารถแก้ไขรายการได้`,
                    timer: 2000
                });
                setTimeout(function() {
                    window.location.reload();
                }, 2000);
            }
        }

    })
})