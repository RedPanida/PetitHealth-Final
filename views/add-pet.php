<?php include('./head.php'); ?>
    <?php include('./header.php'); ?>
    <div class="container mt-5">
        <div class="row mt-5 pb-3 justify-content-between align-items-center">
            <div class="col-12 col-lg-10">
                <h3 class="fw-bold">คลังสัตว์เลี้ยงของคุณ</h3>  
            </div>
            <div class="col-12 col-lg-2 mt-3 mt-lg-0">
                <button class="btn_add_pet w-100" id="btn_add_pet">
                    <p class="mb-0"><i class="fa-solid fa-plus"></i> เพิ่มสัตว์เลี้ยง</p> 
                </button>     
            </div>

            <div class="row mt-5">
                <hr>
                <div class="d-lg-flex justify-content-start" id="pet-list"></div>
            </div>
            
        </div>
        
    </div>
<?php include('./footer.php'); ?>
<script src="../asset/js/add_pet.js"></script>
<script>
