<?php include('./head.php'); ?>
<?php include('./header.php'); ?>
<style>
    body{
        background-color: #FCFAF9;
    }
    .dropdown-item{
        width: 100%;
        font-size: 22px;
    }
</style>
    <div class="container mt-5">
        <h1 class="text-center">แบบฟอร์มเพื่อส่งข้อมูลให้สัตวแพทย์</h1>
        <div class="row justify-content-center">
        
            <div class="progress px-0 my-4">
                <div class="progress-bar progress-bar-striped bg-info progress-bar-animated" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

            <h3 class="text-center">ขั้นตอนกรอกข้อมูล</h3>
            <div class="collect-hospital">
                <p class="d-flex align-items-center meeting-form">
                    <iconify-icon icon="material-symbols:location-on-outline-rounded" width="40" hight="40" class="pe-1"></iconify-icon>
                    เลือกโรงพยาบาลสัตว์*
                </p>
                <div class="dropdown">
                    <button class="btn-hospital-collect w-100 text-start" type="button" id="hospitalSet" data-bs-toggle="dropdown" aria-expanded="false">
                        <span>เลือกโรงพยาบาลสัตว์เลี้ยงที่คุณต้องการ</span>
                        <iconify-icon icon="material-symbols:keyboard-arrow-down-rounded" width="30" height="30"></iconify-icon>
                    </button>
                    <ul class="dropdown-menu w-100 hospitalSet" aria-labelledby="hospitalSet">
                        <li><a class="dropdown-item">โรงพยาบาลสัตว์ประชาชื่น35</a></li>
                        <li><a class="dropdown-item">โรงพยาบาลสัตว์กาญจนาภิเษก</a></li>
                        <li><a class="dropdown-item">โรงพยาบาลสัตว์บุญธรรม</a></li>
                        <li><a class="dropdown-item">โรงพยาบาลสัตว์บ้านหมอรักษาหมา</a></li>
                    </ul>
                </div>
            </div>
            <div class="collect-pet mt-4">
                <p class="d-flex align-items-center meeting-form">
                    <iconify-icon icon="cil:paw" width="40" hight="40" class="pe-1"></iconify-icon>
                    สัตว์เลี้ยงของคุณ*
                </p>
                <div class="dropdown">
                    <button class="btn-pet-collect w-100 text-start" type="button" id="petSet" data-bs-toggle="dropdown" aria-expanded="false">
                        <span>เลือกสัตว์เลี้ยงที่คุณต้องการนัดหมาย</span>
                        <iconify-icon icon="material-symbols:keyboard-arrow-down-rounded" width="30" height="30"></iconify-icon>
                    </button>
                    <ul class="dropdown-menu petSet w-100" aria-labelledby="petSet">
                        <!-- list pet -->
                    </ul>
                </div>
            </div>
            <div class="collect-symptom mt-4">
                <p class="d-flex align-items-center meeting-form">
                    <iconify-icon icon="majesticons:clipboard-plus-line" width="30" hight="30" class="pe-1"></iconify-icon>
                    อาการที่เกิดขึ้นกับสัตว์เลี้ยง*
                </p>
                <div class="dropdown">
                    <button class="btn-symptom-collect w-100 text-start" type="button" id="symptomSet" data-bs-toggle="dropdown" aria-expanded="false">
                        <span>อาการที่เกิดขึ้นกับสัตว์เลี้ยง</span>
                        <iconify-icon icon="material-symbols:keyboard-arrow-down-rounded" width="30" height="30"></iconify-icon>
                    </button>
                    <ul class="dropdown-menu w-100 symptomSet" aria-labelledby="symptomSet">
                        <div class="d-flex flex-column">
                            <label class="detailH" for="one" style="cursor: pointer;">
                                <input class="form-check-input" type="checkbox" id="one" onchange="checkboxStatusChange()" value="ไม่ทานอาหาร" /> ไม่ทานอาหาร
                            </label>
                            <label class="detailH" for="two" style="cursor: pointer;">
                                <input class="form-check-input" type="checkbox" id="two" onchange="checkboxStatusChange()" value="เซื่องซึม" /> เซื่องซึม
                            </label>
                            <label class="detailH" for="three" style="cursor: pointer;">
                                <input class="form-check-input" type="checkbox" id="three" onchange="checkboxStatusChange()" value="ถ่ายเหลว" /> ถ่ายเหลว
                            </label>
                            <label class="detailH" for="four" style="cursor: pointer;">
                                <input class="form-check-input" type="checkbox" id="four" onchange="checkboxStatusChange()" value="มีน้ำมูก/ไอ" /> มีน้ำมูก/ไอ
                            </label>
                            <label class="detailH" for="five" style="cursor: pointer;">
                                <input class="form-check-input" type="checkbox" id="five" onchange="checkboxStatusChange()" value="หายใจหอบผิดปกติ" /> หายใจหอบผิดปกติ
                            </label>
                            <label class="detailH" for="otherCheckbox" style="cursor: pointer;">
                                <input class="form-check-input" type="checkbox" id="otherCheckbox" onchange="checkboxStatusChange()" value="อื่นๆ" /> อื่นๆ
                            </label>
                        </div>
                    </ul>
                </div>
                <div id="otherSymptomContainer" style="display: none;" class="mt-3">
                    <input type="text" id="otherSymptomInput" class="btn-symptom-collect w-100" placeholder="ระบุอาการอื่นๆ">
                </div>

            </div>
            <div class="collect-date-time mt-4">
                <p class="d-flex align-items-center meeting-form">
                    <iconify-icon icon="uiw:date" width="30" hight="30" class="pe-1"></iconify-icon>
                    จองวัน และเวลาในการนัดหมาย*
                </p>
                <input type="date" class="w-100 meeting-input" id="date-meet">
                <input type="time" class="w-100 meeting-input mt-3" id="time-meet">
            </div>
            <div class="collect-payment mt-4">
                <p class="d-flex align-items-center meeting-form">
                    <iconify-icon icon="fluent:payment-28-regular" width="40" hight="40" class="pe-1"></iconify-icon>
                    ตัวเลือกในการชำระเงิน*
                </p>
                <div class="payment mt-4">
                    <input type="radio" name="payment" id="payment" class="form-check-input align-baseline">
                    <label for="payment" class="form-label payment-label mb-0">ชำระเงิน <strong>ทันที</strong></label> 
                </div>
            </div>

            <div class="col-lg-12 mt-4 d-flex justify-content-between">
                <button class="btn-back-queue" id="btn-back">ย้อนกลับ</button>
                <button class="btn-next-queue" id="btn-next">ดำเนินการต่อ</button>
            </div>
            
        </div>
    </div>
<?php include('./footer.php'); ?>
<script src="../asset/js/queue.js"></script>
