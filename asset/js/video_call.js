var fullname = localStorage.getItem("fullname");
$(document).ready(function() {
  var showUserName = $('#fullname')
  showUserName.html(fullname);

  $.ajax({
    type: "POST",
    url: "../controller/ShowFormController.php",
    data: {
      "user": fullname
    },
    success: function (response) {
      const data = JSON.parse(response);
      var meetingBox = $(".meeting-box");
      var cardContainers = $("#cardContainer");
  
      if (data) {
        data.forEach(function (item, index) {
          if (index === 0) {
            meetingBox.empty();
            meetingBox.append(`
              <div class="row">
                <div class="col-lg-6">
                  <p class="d-flex align-items-center meeting-form">
                    <iconify-icon icon="material-symbols:location-on-outline-rounded" width="30" height="30" class="pe-1"></iconify-icon>
                    สถานที่ :  
                  </p>
                  <input type="text" class="form-control w-100" disabled id="locationInput" value="${item.hospital_location}">
                </div>
                <div class="col-lg-6 mt-4 mt-lg-0">
                  <p class="d-flex align-items-center meeting-form">
                    <iconify-icon icon="uiw:date" width="30" height="30" class="pe-1"></iconify-icon>
                    วันและเวลานัด :
                  </p>
                  <input type="text" class="form-control w-100" disabled id="bookingDateInput" value="${item.booking_date}, ${item.booking_time}">
                </div>
                <div class="col-lg-6 mt-4 mt-lg-5">
                  <p class="d-flex align-items-center meeting-form">
                    <iconify-icon icon="cil:paw" width="30" height="30" class="pe-1"></iconify-icon>
                    สัตว์เลี้ยงที่ต้องการรักษา :
                  </p>
                  <input type="text" class="form-control w-100" disabled id="petInput" value="${item.pet_name}">
                  <p class="text-secondary meeting-form pt-3">*ตรวจสอบการนัดหมาย</p>
                </div>
                <div class="col-lg-6 mt-4 mt-lg-5">
                  <p class="d-flex align-items-center meeting-form">
                    <iconify-icon icon="majesticons:clipboard-plus-line" width="30" height="30" class="pe-1"></iconify-icon>
                    อาการของสัตว์เลี้ยง :
                  </p>
                  <input type="text" class="form-control w-100" disabled id="symptomInput" value="${item.symptom}${item.symptom_other}">
                </div>
              </div>
            `);
          } else if (index < 4) {
            var cardContainer = cardContainers.append(`
              <div class="col-lg-4 mt-4">
                <div class="card mx-auto w-100" style="height: 500px;">
                  <div class="card-body">
                    <h5 class="alert alert-primary text-center">วันที่ ${item.booking_date}</h5>
                    <h5 class="alert alert-success text-center">เวลา ${item.booking_time}</h5>
                    <h5 class="card-title">รายละเอียด</h5>
                    <h4 class="card-text">รายการที่: ${item.id}</h4>
                    <p class="card-text">ชื่อสัตว์เลี้ยง: ${item.pet_name}</p>
                    <p class="card-text">สถานที่: ${item.hospital_location}</p>
                    <p class="card-text">อาการของสัตว์เลี้ยง: ${item.symptom}</p>
                    <p class="card-text">อาการอื่นๆ: ${item.symptom_other}</p>
                    <div class="row justify-content-between pb-3">
                      <div class="col-lg-6">
                        <button class="btn-edit-form w-100" onclick="Edit(${item.id})">แก้ไขข้อมูล</button>
                      </div>
                      <div class="col-lg-6">
                        <button class="btn-delete-form w-100" onclick="Delete(${item.id})">ลบข้อมูล</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `);
          }
        });
      } else {
        console.log("Invalid response format. Expected an array.");
      }
    }
  });    
});

const Edit = (id) => {
  $.ajax({
    type: "POST",
    url: "../controller/EditFormController.php",
    data: {
      "id": id
    },
    success: function (response) {
      const JsonResponse = JSON.parse(response);
      console.log(JsonResponse);
      const htmlEditAppoint = `
        <label class="pt-2 pb-1 ps-4 w-100 text-start" for="petName">ชื่อสัตว์เลี้ยงของคุณ</label>
        <input type="text" id="ePetName" class="swal2-input" value="${JsonResponse[0].pet_name}">
        <label class="pt-2 pb-1 ps-4 w-100 text-start" for="petName">โรงพยาบาล</label>
        <input type="text" id="eHospital" class="swal2-input" value="${JsonResponse[0].hospital_location}">
        <label class="pt-2 pb-1 ps-4 w-100 text-start" for="petName">อาการของสัตว์เลี้ยง</label>
        <input type="text" id="eSymptom" class="swal2-input" value="${JsonResponse[0].symptom}">
        <label class="pt-2 pb-1 ps-4 w-100 text-start" for="petName">อาการอื่นๆ</label>
        <input type="text" id="eSymptomOther" class="swal2-input" value="${JsonResponse[0].symptom_other}">
      `;
      Swal.fire({
        title: `แก้ไขรายการที่: ${id}`,
        html: htmlEditAppoint,
        confirmButtonText: 'แก้ไขข้อมูล',
        showCancelButton: true,
        focusConfirm: false,
        preConfirm: () => {
          const EpetName = $('#ePetName').val();
          const Ehospital = $('#eHospital').val();
          const Esymptom = $('#eSymptom').val();
          const EsymptomOther = $('#eSymptomOther').val();

          const confirmData = {
            id: id,
            pet_name: EpetName,
            hospital: Ehospital,
            symptom: Esymptom,
            symptom_other: EsymptomOther,
          }
            
          return confirmData;
        }
      }).then((result) => {
        if (result.isConfirmed) {
          const editedData = result.value;
          const htmlConfirm = 
                              `
                              <div class="text-start">
                                <p>ชื่อสัตว์เลี้ยง: ${editedData.pet_name}</p>
                                <p>โรงพยาบาล: ${editedData.hospital}</p>
                                <p>อาการสัตว์เลี้ยง: ${editedData.symptom}</p>
                                <p>อาการอื่นๆ: ${editedData.symptom_other}</p>
                              </div>   
                              `
          console.log(editedData);
          Swal.fire({
            title: 'ยืนยันข้อมูลที่ต้องการแก้ไข',
            html: htmlConfirm,
            confirmButtonText: 'ยืนยัน',
            showCancelButton: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
              $.ajax({
                type: "POST",
                url: "../controller/EditFormDBController.php",
                data: editedData,
                success: function (response) {
                  if(response == "update_success"){
                      Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "แก้ไขข้อมูลเสร็จสิ้น",
                        timer: 3000
                      });
                      setTimeout(function() {
                        window.location.reload();
                      }, 3000)
                  }else {
                      Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "แก้ไขข้อมูลไม่สำเร็จ",
                        text: "โปรดดำเนินการใหม่อีกครั้ง",
                        timer: 3000
                      });
                      setTimeout(function() {
                        window.location.reload();
                      }, 3000)
                  }
                }
              })
            }
          });

        }
      });
    }
  });
}

const Delete = (id) => {
  console.log(id);
  Swal.fire({
    title: 'ลบข้อมูล?',
    text: `ต้องการลบคิวการนัดหมายที่ : ${id}?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'ใช่ฉันต้องการ!'
  }).then((result) => {
    if (result.isConfirmed) {
       $.ajax({
          type: "POST",
          url: "../controller/DeleteFormController.php",
          data: {
            id: id
          },
          success: function (response){
            if(response == "delete_success") {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "ลบข้อมูลสำเร็จ",
                timer: 2000
              });
              setTimeout(function() {
                window.location.reload()
              }, 2000);
            }else {
              Swal.fire({
                position: "center",
                icon: "error",
                title: "เกิดข้อผิดพลาด",
                text: "ไม่สามารถลบข้อมูลได้",
                timer: 2000
              });
              setTimeout(function() {
                window.location.reload()
              }, 2000);
            }
          }
       });
    }
  })
}
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