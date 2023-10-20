<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
    <title>Register For User</title>
  </head>
  <body>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-6 box-sign">
                <h1 class="fw-bold pb-3 title-sign">Register</h1>
                <div class="mb-3">
                    <div class="row">
                        <div class="col-6">
                            <label class="pb-2" for="firstname">First Name</label>
                            <input type="text" class="form-control" id="firstname" name="firstname" placeholder="ชื่อจริง (นายเอ)">
                        </div>
                        <div class="col-6">
                            <label class="pb-2" for="lastname">Last Name</label>
                            <input type="text" class="form-control" id="lastname" name="lastname" placeholder="นามสกุล">
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="pb-2" for="address">Telephone</label>
                    <input type="tel" class="form-control" id="tel" name="tel" placeholder="0xx xxx xxxx" maxlength="12">
                </div>
                <div class="mb-3">
                    <div class="row">
                        <label class="pb-2" for="password">Password</label>
                        <div class="col-10">
                            <input type="password" class="form-control" id="password" name="password" placeholder="กรอกรหัสผ่าน">
                        </div>
                        <div class="col-2">
                            <button class="btn btn-primary w-100" type="button" id="togglePassword">
                              <i class="fas fa-eye-slash" id="eyeIcon"></i>
                            </button>
                          </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="pb-2" for="address">Address</label>
                    <input type="text" class="form-control" id="address" name="address" placeholder="กรอกที่อยู่ของคุณ">
                </div>
                <div class="mb-3">
                    <label class="pb-2" for="email">Email</label>
                    <input type="email" class="form-control" id="email" name="email" placeholder="กรอกอีเมล">
                </div>
                <hr>
                <p class="text-secondary text-center">มีบัญชีผู้ใช้งานแล้ว? <a class="link-sign" href="../index.php">เข้าสู่ระบบ</a></p>
                <button id="btn_register" class="btn-submit w-100 p-2 mt-4">ลงทะเบียน</button>
            </div>
        </div>
        

    </div>
  </body>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script> 
  <script src="../asset/js/register.js"></script>

  </html>
