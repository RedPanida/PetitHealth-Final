<?php include('./backoffice-head.php'); ?>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css" />

<div class="container-fluid px-0">
    
    <nav class="navbar navbar-dark bg-dark p-3 justify-content-end">
        <div class="d-flex col-12 col-md-3 col-lg-2 mb-2 mb-lg-0 flex-wrap flex-md-nowrap justify-content-between">
        <a class="navbar-brand welcome fw-normal" href=""></a>
        </div>
    </nav>
    <div class="container-fluid">
        <div class="row">
            <nav id="sidebar" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div class="position-sticky">
                <ul class="nav flex-column">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="./backoffice-homepage.php">
                        <i class="fas fa-home"></i>
                        <span class="ml-2">Dashboard</span>
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="./backoffice-user.php">
                        <i class="fa-solid fa-users"></i>
                        <span class="ml-2">User Information</span>
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="./backoffice-pet.php">
                        <iconify-icon icon="teenyicons:paw-solid"></iconify-icon>
                        <span class="ml-2">Pet Catagories</span>
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="./backoffice-blog.php">
                        <i class="fa-solid fa-pen-to-square"></i>
                        <span class="ml-2">Blog</span>
                    </a>
                    </li>
                    <li class="nav-item">
                        <button class="logout btn btn-danger w-100">ออกจากระบบ</button>
                    </li>
                </ul>
                </div>
            </nav>
            <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4 main-content">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="">Pet Catagories</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Overview</li>
                    </ol>
                </nav>
                <div id="tableContainer"></div>
            </main>
        </div>
  </div>
</div>
<?php include('./backoffice-footer.php')?>
<script>
    const username = localStorage.getItem('fullname');
    const welcomeText = $('.welcome');

    $(document).ready(() => {

        if(username === null || username === '') {
            window.location.href = "./admin-login.php"
        } else {
            welcomeText.text(`Welcome Back! ${username}`);
            $.ajax({
                type: "GET",
                url: "./Backoffice/AllPetController.php",
                success: function (response) {
                    const jsonData = JSON.parse(response);
                    console.log(jsonData);

                    // Generate HTML table
                    const table = document.createElement("table");
                    table.classList.add("table");

                    // Create table header
                    const thead = document.createElement("thead");
                    const headerRow = document.createElement("tr");
                    for (const key in jsonData.data[0]) {
                        const th = document.createElement("th");
                        th.textContent = key;
                        headerRow.appendChild(th);
                    }
                    // Add additional header for the image
                    const imageHeader = document.createElement("th");
                    imageHeader.textContent = "Image";
                    headerRow.appendChild(imageHeader);
                    
                    thead.appendChild(headerRow);
                    table.appendChild(thead);

                    // Create table body
                    const tbody = document.createElement("tbody");
                    for (const row of jsonData.data) {
                        const tr = document.createElement("tr");
                        for (const key in row) {
                            const td = document.createElement("td");
                            if (key === "password") {
                                td.textContent = row[key].substring(0, 10); // Limit password to 10 characters
                            } else if (key === "filename") {
                                // Create an image element and set its source to the image file
                                const img = document.createElement("img");
                                img.src = "./upload_pet/" + row[key]; // Replace "image_folder" with your actual folder path
                                img.style.maxWidth = "100px"; // Adjust the image size as needed
                                td.appendChild(img);
                            } else {
                                td.textContent = row[key];
                            }
                            tr.appendChild(td);
                        }
                        tbody.appendChild(tr);
                    }
                    table.appendChild(tbody);

                    // Append the table to a container in your HTML
                    const container = document.getElementById("tableContainer");
                    container.appendChild(table);
                }
            });

        }
    });

    const btnLogout = $('.logout');
    $(btnLogout).click(function () { 
        Swal.fire({
            title: 'คุณกำลังจะออกจากระบบ?',
            text: "กลับไปที่หน้า Login!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ออกจากระบบ!',
            cancleButtonText: 'ไม่ต้องการ!'
        }).then((result) => {

            if (result.isConfirmed) {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'ออกจากระบบสำเร็จ',
                    showConfirmButton: false,
                    timer: 2000
                });
                setTimeout(function() {
                    localStorage.removeItem('fullname');
                    window.location.href = "./admin-login.php";
                }, 3000);
            }
        })
    });
</script>