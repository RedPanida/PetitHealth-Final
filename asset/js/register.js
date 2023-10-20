let firstName = document.getElementById('firstname');
let lastName = document.getElementById('lastname');
let tel = document.getElementById('tel');
let password = document.getElementById('password');
let address = document.getElementById('address');
let email = document.getElementById('email');

const togglePassword = document.getElementById('togglePassword');
const eyeIcon = document.querySelector("#eyeIcon");


tel.addEventListener("input", function() {
  let phone = tel.value;
  phone = phone.replace(/\D/g, "");
  const formattedPhone = phone.replace(/^(\d{3})(\d{3})(\d{4})$/, "$1 $2 $3");
  tel.value = formattedPhone;
});

togglePassword.addEventListener('click', function() {
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  eyeIcon.classList.toggle("fa-eye");
  eyeIcon.classList.toggle("fa-eye-slash");
});

$("#btn_register").click(function (e) { 
    e.preventDefault();
    const telephone = tel.value
    const telEdit = telephone.replace(/\s/g, '');

    if(firstName.value == ""){
      Swal.fire({
        position: "center",
        icon: "error",
        title: "คุณยังไม่ได้กรอกชื่อจริง?",
        text: "กรุณากรอกชื่อจริงของคุณ",
      });
    }else if(lastName.value == ""){
      Swal.fire({
        position: "center",
        icon: "error",
        title: "คุณยังไม่ได้กรอกนามสกุล?",
        text: "กรุณากรอกนามสกุลของคุณ",
      });
    }else if(tel.value == ""){
      Swal.fire({
        position: "center",
        icon: "error",
        title: "คุณยังไม่ได้กรอกหมายเลขโทรศัพท์?",
        text: "กรุณากรอกหมายเลขโทรศัพท์ของคุณ",
      });
    }else if(password.value == ""){
      Swal.fire({
        position: "center",
        icon: "error",
        title: "คุณยังไม่ได้กรอกรหัสผ่าน?",
        text: "กรุณากรอกรหัสผ่านของคุณ",
      });
    }else if(address.value == ""){
      Swal.fire({
        position: "center",
        icon: "error",
        title: "คุณยังไม่ได้กรอกที่อยู่?",
        text: "กรุณากรอกที่อยู่ของคุณ",
      });
    }else if(email.value == ""){
      Swal.fire({
        position: "center",
        icon: "error",
        title: "คุณยังไม่ได้กรอกอีเมล?",
        text: "กรุณากรอกอีเมลของคุณ",
      });
    }else{
      $.ajax({
        type: "POST",
        url: "../controller/AddUserController.php",
        data: {
          firstname: firstName.value,
          lastname: lastName.value,
          tel: telEdit,
          password: password.value,
          address: address.value,
          email: email.value
        },
          // contentType: "application/json",
        success: function (response) {
            if(response == "success"){
              Swal.fire({
                position: "center",
                icon: "success",
                title: "ลงทะเบียนเสร็จสิ้น",
                text: "สมัครสมาชิกเว็บไซต์ PetitHealth สำเร็จ",
                timer: 2000,
                timerProgressBar: true,
              });
              setTimeout(function () {
                window.location.href = "../index.php";
              }, 2000);
            }
        }
      });
    }

    
});