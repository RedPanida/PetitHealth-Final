<?php include('./head.php'); ?>
<?php include('./header.php'); ?>
<div class="container text-center my-5">
    <h1 class="text-center">แบบฟอร์มเพื่อส่งข้อมูลให้สัตวแพทย์</h1>
    
    <div class="progress px-0 my-4">
        <div class="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" style="width: 100%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <h3 class="text-center">ขั้นตอนการชำระเงิน</h3>

    <iconify-icon icon="ph:check-circle-bold" class="icon-checked" width="150" height="150"></iconify-icon>
    <h1>ชำระเงินสำเร็จ</h1>
    <h4>การชำระเงินของคุณเสร็จสิ้น</h4>

    <h5 class="text-start mt-5">รายละเอียดการจองคิว</h5>
    <table class="table table-bordered mt-3">
        <thead>
            <tr class="table-active">
                <th scope="row">
                        ID
                </th>
                <td>
                    ชื่อสัตว์เลี้ยง
                </td>
                <td>
                    โรงพยาบาล
                </td>
                <td colspan-2>
                    อาการสัตว์เลี้ยง
                </td>
                <td>
                    อาการสัตว์เลี้ยง อื่นๆ
                </td>
                <td>
                    วันที่จองคิว
                </td>
                <td>
                    เวลาจองคิว
                </td>
                <td>
                    การชำระเงิน
                </td>
                <td>
                    สถานะการชำระเงิน
                </td>
            </tr>
        </thead>
        <tbody id="table-body"></tbody>
    </table>

    <div class="row">
        <button class="btn-back-vdo">กลับสู่หน้านัดหมายวิดีโอคอลกับสัตว์แพทย์</button>
    </div>
</div>
<?php include('./footer.php'); ?>
<script src="../asset/js/queue.js"></script>
<script src="../asset/js/queue_checked.js"></script>