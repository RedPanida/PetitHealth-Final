  // get username from localStorage and query pet data from database
  var fullname = localStorage.getItem("fullname");
  $(document).ready(function() {
    var showUserName = $('#fullname')
    showUserName.html(fullname);

    $.ajax({
      type: "POST",
      url: "../controller/ShowPetController.php",
      data: {
        fullname: fullname
      },
      success: function (response) {
        var data = JSON.parse(response)
        
        $.each(data, function(index, item) {
          var encodedFilename = encodeURIComponent(item.filename);
          var imageUrl = "../asset/upload_pet/" + encodedFilename;
          var cardElement = `<div class="card col-lg-3 col-12 mx-2 mt-3 mt-lg-0">
                                <h4 class="card-title p-3 m-0 d-none">รายการที่: ${item.id}</h4>
                                <img class="card-img-top" src="${imageUrl}" alt="${item.pet_name}">
                                <div class="card-body d-flex flex-column justify-content-end">
                                  <h5 class="card-title">ชื่อสัตว์เลี้ยง: ${item.pet_name}</h5>
                                  <p class="card-text">ประเภท: ${item.pet_type}</p>
                                  <p class="card-text">รับประทานอาหาร: ${item.food}</p>
                                  <p class="card-text">ได้รับวัคซีนจำนวน: ${item.vaccine} ครั้ง</p>                            
                                    <div class="row justify-content-between mt-2">
                                      <div class="col-6">
                                        <button class="edit_pet w-100">แก้ไขข้อมูล</button>
                                      </div>
                                      <div class="col-6">
                                        <button class="btn_delete w-100" id="delete_pet" onclick="deletePet(${item.id})">ลบข้อมูล</button>
                                      </div>        
                                    </div>
                                </div>
                              </div>`
      
          $("#pet-list").append(cardElement);
          
          $(".edit_pet").last().on("click", function() {
            var petId = item.id;
            window.location.href = "../views/edit-pet.php?id=" + petId;
          });
        });
      
      }
    });
    
  })

// logout button
$(".logOut").click(function(){
  Swal.fire({
    title: 'คุณกำลังจะออกจากระบบ?',
    text: "คุณต้องการยืนยันการออกจากระบบหรือไม่?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'ใช่ฉันต้องการ!'
  }).then((result) => {
    if (result.isConfirmed) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "กำลังออกจากระบบ",
          text: `ขอบคุณที่ใช้บริการเว็บแอปพลิเคชัน PetitHealth ของเรา`,
          timer: 3000
      });
      setTimeout(function() {
        localStorage.removeItem("fullname");
        document.cookie = "logged_in=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = '../index.php'
      }, 3000);
    }
  })
})

// add pet catagories
$("#btn_add_pet").click(function (e){
  e.preventDefault();

  Swal.fire({
    title: 'ข้อมูลสัตว์เลี้ยงของฉัน',
    html: `<form id="petForm" enctype="multipart/form-data">
            <button type="button" id="selectImageButton" class="swal2-confirm">เพิ่มรูปภาพสัตว์เลี้ยง</button>
              <div id="imagePreviewContainer" class="d-flex flex-column align-items-left">
                <p id="selectedImageName" class="pt-3 text-start" style="display: none;"></p>
                <img id="petImagePreview" class="img-fluid my-2" style="display:none;">
              </div>
              <label class="pt-2 pb-1 ps-4 w-100 text-start" for="petName">ชื่อสัตว์เลี้ยงของคุณ</label>
              <input type="text" id="petName" class="swal2-input" placeholder="กรอกชื่อสัตว์เลี้ยง">
              <label class="pt-2 pb-1 ps-4 w-100 text-start" for="petName">ประเภทของสัตว์เลี้ยง</label>
              <input type="text" id="petType" class="swal2-input" placeholder="กรอกประเภทสัตว์เลี้ยง">
              <label class="pt-2 pb-1 ps-4 w-100 text-start" for="petName">จำนวนวัคซีนที่ได้รับ</label>
              <input type="number" id="numVaccines" class="swal2-input" placeholder="กรอกจำนวนวัคซีน">
              <label class="pt-2 pb-1 ps-4 w-100 text-start" for="petName">อาหารที่สัตว์เลี้ยงรับประทานเป็นประจำ</label>
              <input type="text" id="food" class="swal2-input" placeholder="อาหารเหลว, ข้าว, อาหารเม็ด....">
              <input type="file" id="petImage" class="swal2-file" style="display: none;" name="petImage">
          </form>`,
    confirmButtonText: 'ยืนยันข้อมูล',
    focusConfirm: false,
    preConfirm: () => {
      const petName = Swal.getPopup().querySelector('#petName').value;
      const petType = Swal.getPopup().querySelector('#petType').value;
      const numVaccines = Swal.getPopup().querySelector('#numVaccines').value;
      const food = Swal.getPopup().querySelector('#food').value;
      const petImage = Swal.getPopup().querySelector('#petImage').files[0];

      if (!petName || !petType || !numVaccines || !food || !petImage) {
        Swal.showValidationMessage(`Please fill in all fields`);
      }

      return { petName: petName, petType: petType, numVaccines: numVaccines, food: food, petImage: petImage };
    }
    }).then((result) => {
      console.log(result);
      let petName = result.value.petName;
      let petType = result.value.petType;
      let vaccine = result.value.numVaccines;
      let petFood = result.value.food;
      let imagePet = result.value.petImage;
      let imageName = imagePet.name;

      const setText = `<div class="text-start">
                          <p id="selectedImageName">ชื่อไฟล์: ${imageName}</p>
                          <p>ชื่อสัตว์เลี้ยง: ${petName}</p>
                          <p>ประเภท: ${petType}</p>
                          <p>จำนวนวัคซีนที่ได้รับ: ${vaccine}</p>
                          <p>อาหารที่รับประทาน: ${petFood}</p>
                      </div>`

        Swal.fire({
          title: 'ยืนยันข้อมูลสัตว์เลี้ยงของคุณ',
          html: setText,
          imageUrl: URL.createObjectURL(imagePet),
          imageAlt: petName,
          confirmButtonText: 'บันทึกข้อมูล',
        }).then((result) => {
          const formData = new FormData();
          formData.append('petName', petName);
          formData.append('petType', petType);
          formData.append('vaccine', vaccine);
          formData.append('food', petFood);
          formData.append('username', fullname);
        
          if(imagePet !== undefined && imagePet.name.length > 0){
            formData.append('petImage', imagePet);
          }

          $.ajax({
            type: "POST",
            url: "../controller/AddPetController.php",
            data: formData,
            processData: false,
            contentType: false,
            success: function (response) {
              if(response == "upload_success"){
                Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "เพิ่มสัตว์เลี้ยงสำเร็จ",
                        text: `คุณได้เพิ่ม ${petName} เสร็จสิ้น`,
                        timer: 2000
                    });
                    setTimeout(function() {
                        window.location.reload();
                    }, 2000);
                
              }else{
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "เพิ่มสัตว์เลี้ยงไม่สำเร็จ",
                  text: `กรุณาทำรายการอีกครั้ง`,
                  timer: 2000
                });
                setTimeout(function() {
                    window.location.reload();
                }, 2000);
              }
            }
          });
        });
                      
    });
    
    const petImageInput = Swal.getPopup().querySelector('#petImage');
    const petImagePreview = Swal.getPopup().querySelector('#petImagePreview');
    const selectedImageName = Swal.getPopup().querySelector('#selectedImageName');
    const selectImageButton = Swal.getPopup().querySelector('#selectImageButton');
    selectImageButton.addEventListener('click', function () {
        petImageInput.click();
    });
    petImageInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          petImagePreview.src = reader.result;
        };
        reader.readAsDataURL(file);
        selectedImageName.innerText = "ชื่อไฟล์: "+file.name;
        selectedImageName.style.display = 'block';
        petImagePreview.style.display = 'block';
    })
});

function deletePet(petID){
  // console.log(petID);
  Swal.fire({
    title: 'คุณกำลังจะลบสัตว์เลี้ยง?',
    text: "สัตว์เลี้ยงนี้จะถูกลบออกจากระบบ",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'ใช่, ต้องการลบ!',
    cancelButtonText: 'ไม่ต้องการลบ',
  }).then((result) => {
    if (result.isConfirmed) {
        $.ajax({
          type: "POST",
          url: "../controller/DeletePetController.php",
          data: {
            petID: petID
          },
          success: function (response) {
            if(response == 'delete_success'){
              Swal.fire({
                position: "center",
                icon: "success",
                title: "ลบเสร็จสิ้น!",
                text: `สัตว์เลี้ยงของคุณถูกลบเรียบร้อยแล้ว`,
                timer: 2000
              });
              setTimeout(function() {
                  window.location.reload();
              }, 2000);
            }else{
              Swal.fire({
                position: "center",
                icon: "error",
                title: "ลบไม่สำเร็จ!",
                text: `ไม่สามารถลบรายการนี้ได้`,
                timer: 2000
              });
              setTimeout(function() {
                  window.location.reload();
              }, 2000);
            }
            
          }
        })
      
    }
  })

}

 
