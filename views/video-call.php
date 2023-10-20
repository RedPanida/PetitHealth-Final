<?php include('./head.php'); ?>
<?php include('./header.php'); ?>
<style>
    .card-container {
        display: flex;
    }
    .card {
      width: 300px;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-right: 10px;
      padding: 10px;
    }
</style>
    <div class="container mt-5">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <h1>นัดหมายการวิดีโอคอลกับสัตวแพทย์</h1>
            </div>
            <div class="col-lg-6 d-flex justify-content-end">
                <a href="./queue-step-one.php" class="btn-add-queue text-center">
                   <i class="fa-solid fa-plus"></i> เพิ่มตารางนัดหมายของคุณ
                </a>
            </div>
        </div>
        <div class="row mt-5">
            <h2 class="d-flex align-items-center">
                <iconify-icon icon="ic:round-access-time" style="color: black;" class="pe-2"></iconify-icon>ตารางนัดหมายล่าสุด
            </h2>
            <div class="meeting-box mt-4 p-5"></div>
        </div>
       <hr>
        <!-- <div class="row justify-content-evenly mt-5">
            <h2 class="d-flex align-items-center">
                <iconify-icon icon="ic:round-access-time" style="color: black;" class="pe-2"></iconify-icon>รายการนัดหมายของคุณ
            </h2>
            <div class="col-lg-4 mt-4">
                <div class="card mx-auto">
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text"></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mt-4">
                <div class="card mx-auto">
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text"></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mt-4">
                <div class="card mx-auto">
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text"></p>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="card-container mt-2 row" id="cardContainer"></div>
    </div>
<?php include('./footer.php'); ?>
<script src="../asset/js/video_call.js"></script>