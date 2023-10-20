var fullname = localStorage.getItem("fullname");
$(document).ready(function() {
  var showUserName = $('#fullname')
  showUserName.html(fullname);
});

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

$(document).ready(() => {
    $.ajax({
        type: "POST",
        url: "../controller/GetPetController.php",
        data: {
          fullname: fullname,
        },
        success: function (response) {
            var dropdownMenu = $('#petSet').siblings('.dropdown-menu');
            dropdownMenu.empty();
            var petData = JSON.parse(response); // Parse the JSON string into an object
            $.each(petData, function(index, pet) {
                dropdownMenu.append('<li><a class="dropdown-item">' + pet.pet_name + '</a></li>');
            });
                var btnDropdownPet = $("#petSet");
                var MenuPet = $(".petSet");

                var itemPet = MenuPet.find("li");
                itemPet.each(function() {
                    $(this).click(function() {
                    
                    btnDropdownPet.text($(this).text());
                        var getItemPet = btnDropdownPet.text()
                    // console.log(getItemPet)
                    });
                });
        },
        error: function(xhr, status, error) {
            console.error(error);
        }
    })
})

var btnDropdownHospital = $("#hospitalSet");
var MenuHospital = $(".hospitalSet");

var itemHospital = MenuHospital.find("li");
itemHospital.each(function() {
    $(this).click(function() {
    
    btnDropdownHospital.text($(this).text());

    var getItemHospital = btnDropdownHospital.text()
    // console.log(getItemHospital)
    });
});

function checkboxStatusChange() {
    var dropdownButton = $('#symptomSet');
    var selectedValues = [];

    $('input[type="checkbox"]:checked').each(function() {
        selectedValues.push($(this).val());
    });

    if (selectedValues.length > 0) {
        dropdownButton.html('<span>' + selectedValues.join(', ') + '</span> <iconify-icon icon="material-symbols:keyboard-arrow-down-rounded" width="30" height="30"></iconify-icon>');
    } else {
        dropdownButton.html('<span>อาการที่เกิดขึ้นกับสัตว์เลี้ยง</span> <iconify-icon icon="material-symbols:keyboard-arrow-down-rounded" width="30" height="30"></iconify-icon>');
    }

    var otherSymptomContainer = $('#otherSymptomContainer');

    if (selectedValues.includes('อื่นๆ')) {
        otherSymptomContainer.show();
    } else {
        otherSymptomContainer.hide();
    }
}

let paymentChecked = 0;

$(document).ready(function() {
  const paymentRadio = $('#payment');
  // const nonPaymentRadio = $('#nonpayment');

  paymentRadio.on('change', function() {
    if ($(this).is(':checked')) {
      Swal.fire({
        title: 'Payment Confirmation',
        html: '<form id="creditCardForm" class="text-start">' +
          '<div class="form-group">' +
          '<label for="cardNumber" class="form-label">Card Number:</label>' +
          '<input type="text" id="cardNumber" class="form-control" name="cardNumber" required>' +
          '</div>' +
          '<div class="form-group">' +
          '<label for="expiryDate" class="form-label mt-2">Expiry Date:</label>' +
          '<input type="text" id="expiryDate" class="form-control" name="expiryDate" required>' +
          '</div>' +
          '<div class="form-group">' +
          '<label for="cvv" class="form-label mt-2">CVV:</label>' +
          '<input type="text" id="cvv" class="form-control" name="cvv" required>' +
          '</div>' +
          '</form>',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        preConfirm: () => {
          const cardNumber = $('#cardNumber').val();
          const expiryDate = $('#expiryDate').val();
          const cvv = $('#cvv').val();

        }
      }).then((result) => {
        if (result.isConfirmed) {
          paymentChecked = 1;
        }
      });
    } else {
      console.log("Failed Payment");
    }
  });

  const btnBack = $('#btn-back');
  btnBack.click(() => {
    Swal.fire({
      title: 'ต้องการยกเลิกการสร้างคิวนัดหมาย?',
      text: "คุณกำลังจะกลับไปสู่หน้าตารางนัดหมาย!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ใช่, ต้องการ!'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "../views/video-call.php";
      }
    })
  })

  const btnNext = $('#btn-next');
  btnNext.click(() => {
    var getHospitalValue = $('#hospitalSet');
    var getPetValue = $('#petSet');
    var getSymptomValue = $('#symptomSet');
    var getSymptomValueOther = $('#otherSymptomInput');
    var getDateValue = $('#date-meet');
    var getTimeValue = $('#time-meet');

    // console.log(paymentChecked);
    const data = {
      "user": fullname,
      "hospital": getHospitalValue.text(),
      "pet": getPetValue.text(),
      "symptom": getSymptomValue.text(),
      "symptom-other": getSymptomValueOther.val(),
      "date": getDateValue.val(),
      "time": getTimeValue.val(),
      "payment-type": paymentChecked,
    //   "Payment-State": ,
    };
    // console.log(data);
    $.ajax({
        type: "POST",
        url: "../controller/QueueController.php",
        data: data,
        success: function (response) {
          var data = JSON.parse(response);
          
          var id = data.id;
          var createdByUserId = data.createdByUserId;
          var petName = data.petName;
          var hospital = data.Hospital;
          var symptom = data.Symptom;
          var symptomOther = data.Symptom_Other;
          var date = data.Date;
          var time = data.Time;
          var paymentType = data.PaymentType;
          var paymentState = data.PaymentState;

          localStorage.setItem('myData', JSON.stringify({
            id: id,
            createdByUserId: createdByUserId,
            petName: petName,
            hospital: hospital,
            symptom: symptom,
            symptomOther: symptomOther,
            date: date,
            time: time,
            paymentType: paymentType,
            paymentState: paymentState
          }));
          window.location.href = '../views/queue-wait.php';
        }
        
    });
  });
});

