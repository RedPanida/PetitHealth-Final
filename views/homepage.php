<style>
    body {
        background: linear-gradient(180deg, rgba(23,255,213,0) 0%, rgba(81,178,233,0.74) 100%) !important;
    }
    .card-img-top{
        height: 200px;
        object-fit: cover;
        /* background-size: contain !important; */
        border-radius: 20px !important;
        padding: 10px;
    }
    .card-text{
        height: 80px;
        overflow-y: scroll;
        margin: 0 !important;
        padding: 5px 0;
    }
    .card-text::-webkit-scrollbar {
        display: none;
    }
</style>
<?php include('./head.php'); ?>
<?php include('./header.php'); ?>
    <div class="container-fluid mb-5 p-0 d-none d-md-none d-lg-block">
        <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
                <div class="carousel-item active banner">
                    <img src="../asset/img/banner-edit.png" class="d-block w-100" alt="...">
                    <div class="textBanner carousel-caption d-none d-md-block" style="padding-bottom: 5rem;">
                        <p class="bannerHeadT text-start">
                            สะดวก รวดเร็ว ด้วยบริการวีดีโอคอล  <br> ดูแลเพื่อนขนฟูของคุณ
                        </p>
                        <p class="bannerdetailT text-start">
                            พบกับสัตวแพทย์ผู้เชี่ยวชาญของเรา มีเคล็ดลับคำแนะนำและข้อมูลเชิงลึกจากสัตวแพทย์ชั้นนำ <br>
                            เรามีฟังก์ชันวิดีโอคอล ไม่ว่าจะเป็นข้อมูลเกี่ยวกับการนัดหมาย การดูแลป้องกันหรือการจัดการอาการ <br> 
                            เรื้อรัง ฟังก์ชันของเราสามารถตอบโจทย์คุณได้ สนใจทดลองจองคิววีดีโอคอลที่ปุ่มด้านล่าง
                        </p>
                        <button class="bannerBtn text-center align-items-center">
                            <div>
                                <a href="./video-call.php" style="text-decoration: none;" class="text-white">
                                <p class="d-flex align-items-center justify-content-around m-0">
                                    <iconify-icon icon="material-symbols:video-call-rounded" width="2em" height="2em"></iconify-icon> จองคิววิดีโอคอลสัตวแพทย์
                                </p>
                                </a>
                            </div> 
                        </button>
                    </div>
                </div>
            <div class="carousel-item banner">
            <img src="../asset/img/banner-edit2.png" class="d-block w-100" alt="...">
            <div class="textBanner carousel-caption d-none d-md-block" style="padding-bottom: 5rem;">
                <p class="bannerHeadT text-start">
                กดจองคิวเพื่อใช้นัดหมายแพทย์มาที่บ้าน  <br> ทำให้สัตว์เลี้ยงของคุณพบหมอได้เลย
                </p>
                <p class="bannerdetailT text-start">
                พบกับสัตวแพทย์ผู้เชี่ยวชาญของเรา มีเคล็ดลับคำแนะนำและข้อมูลเชิงลึกจากสัตวแพทย์ชั้นนำ<br>
                เรามีฟังก์ชันวิดีโอคอล ไม่ว่าจะเป็นข้อมูลเกี่ยวกับการนัดหมาย การดูแลป้องกันหรือการจัดการอาการ <br> 
                เรื้อรัง ฟังก์ชันของเราสามารถตอบโจทย์คุณได้ สนใจทดลองจองคิวนัดตรวจสัตว์เลี้ยงถึงบ้านที่ปุ่มด้านล่าง
                </p>
                <button class="bannerBtn text-center">
                <div>
                    <a href="" style="text-decoration: none;" class="text-white">
                    <p class="d-flex align-items-center justify-content-center m-0">
                        <iconify-icon icon="material-symbols:home-pin" width="3em" height="3em"></iconify-icon> จองคิวสัตวแพทย์มาบ้าน
                    </p>
                    </a>
                </div> 
                </button>
            </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
        
    </div>

    <div class="container my-4">
        <div class="row btn-menu">
                <div class="col-lg-4 d-flex justify-content-center justify-content-lg-end mb-4 mb-lg-0">
                    <button class="serviceBtn w-75 d-flex justify-content-center align-items-center text-start">             
                    <iconify-icon class="pe-3" width="3em" height="3em" icon="material-symbols:video-chat-outline-rounded"></iconify-icon> วิดีโอคอล<br>พบสัตวแพทย์
                    </button>
                </div>
                <div class="col-lg-4 d-flex justify-content-center justify-content-lg-center mb-4 mb-lg-0">
                    <button class="serviceBtn w-75 d-flex justify-content-center align-items-center text-start">             
                    <iconify-icon icon="material-symbols:home-pin" width="3em" height="3em"></iconify-icon> จองคิว <br> สัตวแพทย์มาบ้าน
                    </button>
                </div>
                <div class="col-lg-4 d-flex justify-content-center justify-content-lg-start mb-4 mb-lg-0">
                    <button class="serviceBtn w-75 d-flex justify-content-center align-items-center text-start">             
                    <iconify-icon inline icon="entypo:news" width="3em" height="3em"></iconify-icon>  สาระความรู้<br>จากสัตวแพทย์
                    </button>
                </div>
        </div>
    </div>
    

    <div class="container">
        <p style="font-size: 30px;" class="d-flex align-items-center">
            <iconify-icon icon="mingcute:book-6-line" width="2em" height="2em"></iconify-icon> สาระความรู้จากสัตวแพทย์
        </p>

        <div id="first-data" class="row mb-4 mx-4 justify-content-center"></div>
        <div id="card-container" class="row mb-4 mx-4 justify-content-center"></div>
        <div class="row mx-0 mt-4 justify-content-center">
            <button class="w-25" id="btn-show-blog" style="display: none;">อ่านความรู้เพิ่มเติม</button>
        </div>
    </div>

<?php include('./footer.php'); ?>

<script src="../asset/js/home_page.js"></script>
<script>
    const hideBlog = $('.blog-append');
    const btnBlog = $('#btn-show-blog');
    hideBlog.hide();

    $(btnBlog).click(() =>{ 
        hideBlog.fadeIn();
        btnBlog.remove();
    });
</script>

