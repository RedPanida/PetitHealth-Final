<?php include('./backoffice-head.php'); ?>
<div class="d-flex justify-content-center align-items-center element">
    <div class="col-lg-4">
        <div class="head-box">
            <h3 class="mb-0">#Admin Login</h3>
        </div>
        <div class="contain-box">
            <label for="admin-un" class="form-label">
                ชื่อผู้ใช้
            </label>
            <input type="text" name="admin-un" id="admin-un" class="form-control">

            <label for="admin-pw" class="form-label mt-3">
                รหัสผ่าน
            </label>
            <input type="password" name="admin-pw" id="admin-pw" class="form-control">

            <div class="form-check mt-3">
                <label class="form-check-label" for="check-pass">
                    แสดงรหัสผ่าน
                </label>
                <input class="form-check-input" type="checkbox" id="check-pass">
            </div>
            <button class="mt-3 btn-admin-login">เข้าสู่ระบบ</button>
        </div>
    </div>
</div>
<?php include('./backoffice-footer.php')?>
<script>
    let passwordCheck = document.getElementById('admin-pw');
    const checkbox = document.getElementById('check-pass');
    checkbox.addEventListener('change', function() {

        if (this.checked) {
            passwordCheck.type = 'text';
        } else {
            passwordCheck.type = 'password';
        }
    });

    const btnLogin = $('.btn-admin-login');
    btnLogin.click(() => {
        let username = document.getElementById('admin-un').value;
        let password = document.getElementById('admin-pw').value;

        const data = {
            "username": username,
            "password": password
        };
        console.log(data);

        $.ajax({
            type: "POST",
            url: "./Backoffice/LoginAuthController.php",
            data: data,
            dataType: "json", // Add this line to specify the expected data type
            success: function (response) {
                if (response.success) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'เข้าสู่ระบบสำเร็จ',
                        text: `ยินดีต้อนรับ ${response.data.username}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setTimeout(function() {
                        localStorage.setItem('fullname',response.data.username);
                        window.location.href = "./backoffice-homepage.php";
                    }, 3000);
                    
                } else {
                    if (response.message === "password_wrong") {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'error',
                            title: 'ไม่สามารถเข้าสู่ระบบได้',
                            text: "กรุณาตรวจสอบรหัสผ่าน",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    } else if (response.message === "username_invalid") {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'error',
                            title: 'ไม่สามารถเข้าสู่ระบบได้',
                            text: "กรุณาตรวจสอบชื่อผู้ใช้งาน",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                }
            },
            error: function (xhr, status, error) {
                // Handle any error that occurred during the AJAX request
                console.log(error);
            }
        });

    });
</script>
