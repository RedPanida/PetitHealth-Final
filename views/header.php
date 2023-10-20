<nav class="navbar navbar-expand-lg">
    <div class="col-12 col-lg-2">
        <a class="navbar-brand mx-5" href="">
            <img src="../asset/img/W-png.png" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler"><i class="fa-solid fa-bars"></i></span>
        </button>
    </div>
    <div class="col-12 col-lg-10 collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul class="navbar-nav w-75 justify-content-start justify-content-lg-center px-2 px-lg-0">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./homepage.php">หน้าหลัก</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./add-pet.php">สัตว์เลี้ยงของคุณ</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    นัดหมายสัตวแพทย์
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                    <li><a class="dropdown-item" href="./video-call.php">จองวิดีโอคอลกับสัตวแพทย์</a></li>
                    <li><a class="dropdown-item" href="">จองคิวนัดสัตวแพทย์มาที่บ้าน</a></li>
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ความรู้จากสัตวแพทย์
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                    <li><a class="dropdown-item" href="">ความรู้จากสัตวแพทย์</a></li>
                    <li><a class="dropdown-item" href="">ความรู้ที่ถูกใจ</a></li>
                </ul>
            </li>
        </ul>
        <div class="d-lg-flex align-items-center justify-content-lg-end mx-2">
            <div class="col-12 col-lg-7 my-3 my-lg-0 px-lg-0 text-start p-0">
                <p class="mb-0" id="fullname"></p>
            </div>
            <div class="col-12 col-lg-5 mx-lg-2 px-0">
                <button class="logOut btn btn-danger w-100">ออกจากระบบ</button>
            </div>
        </div>
    </div>
</nav>
