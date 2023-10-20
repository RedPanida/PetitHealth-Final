let email = document.getElementById('email');
let password = document.getElementById('password');

const togglePassword = document.getElementById('togglePassword');
const eyeIcon = document.querySelector("#eyeIcon");

togglePassword.addEventListener('click', function() {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    eyeIcon.classList.toggle("fa-eye");
    eyeIcon.classList.toggle("fa-eye-slash");
});

$("#btn_login").click(function (e) { 
    e.preventDefault();
    if(email.value == ""){
        Swal.fire({
            position: "center",
            icon: "error",
            title: "คุณยังไม่ได้กรอกอีเมล์?",
            text: "กรุณากรอกอีเมล์ของคุณ",
          });
    }else if(password.value == ""){
        Swal.fire({
            position: "center",
            icon: "error",
            title: "คุณยังไม่ได้กรอกรหัสผ่าน?",
            text: "กรุณากรอกรหัสผ่านของคุณ",
          });
    }else{
        $.ajax({
            type: "POST",
            url: "./controller/UserInformationController.php",
            data: {
              email: email.value,
              password: password.value,
            },
            // contentType: "application/json",
            success: function (response) {
                if(response == "email_invalid"){
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "อีเมล์ไม่ถูกต้อง?",
                        text: "กรุณากรอกอีเมล์ใหม่อีกครั้ง",
                    });
                }else if(response == "password_wrong"){
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "รหัสผ่านไม่ถูกต้อง?",
                        text: "กรุณากรอกรหัสผ่านใหม่อีกครั้ง",
                    });
                }else{
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "เข้าสู่ระบบสำเร็จ",
                        text: `ยินดีต้อนรับคุณ ${response}`,
                        timer: 2000
                    });
                    //เก็บชื่อลง localStorage
                    localStorage.setItem("fullname", response);
                    document.cookie = "logged_in=true; path=/";
                    setTimeout(function() {
                        window.location.href = "./views/homepage.php";
                    }, 2000);
                }
            }
        });
    }
    
        
});