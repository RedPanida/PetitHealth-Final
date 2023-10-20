const username = localStorage.getItem('fullname');
    const welcomeText = $('.welcome');

    $(document).ready(() => {
        if(username === null || username === '') {
            window.location.href = "./admin-login.php"
        } else {
            welcomeText.text(`Welcome Back! ${username}`);
            $.ajax({
                type: "GET",
                url: "./Backoffice/ShowBlogController.php",
                success: function (response) {

                    const jsonData = JSON.parse(response);
                    // console.log(jsonData);

                    const container = document.querySelector('.card-blog-container');

                    jsonData.forEach(item => {
                        const date = new Date(item.datetime);
                        const formattedDate = date.toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        });

                        const card = document.createElement('div');
                        card.classList.add('card', 'mt-4');

                        card.innerHTML = `
                            <div class="row p-3" id="${item.id}" >
                                <div class="col-4">
                                    <img id="img-content" src="./upload_blog/${item.filename}" class="p-2 img-blog" alt="">
                                </div>
                                <div class="col-8">
                                    <div class="card-body">
                                        <h3 class="card-title">${item.title}</h3>
                                        <h5 class="card-subtitle text-secondary">${item.subtitle}</h5>
                                        <p class="card-text">${item.content}</p>
                                        <p class="col-6 mb-0 created">Created by: ${item.created}</p>
                                        <p class="col-6 mb-0 date">Date: ${formattedDate}</p>
                                        <div class="row mt-4">
                                            <div class="col-6">
                                                <button id="btn-edit" class="btn-edit w-100" onclick="Edit(${item.id})">Edit</button>
                                            </div>
                                            <div class="col-6">
                                                <button id="btn-delete" class="btn-delete w-100" onclick="DeleteBlog(${item.id}, '${item.filename}')">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                        container.appendChild(card);
                    });
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

const htmlBlog = `
        <div class="container px-0 text-start">
            <div class="mb-3">
                <label for="title" class="form-label">หัวข้อหลัก</label>
                <input type="text" class="form-control" id="title" placeholder="กรอกหัวข้อหลัก">
            </div>
            <div class="mb-3">
                <label for="subtitle" class="form-label">หัวข้อรอง</label>
                <input type="text" class="form-control" id="subtitle" placeholder="กรอกหัวข้อรอง">
            </div>
            <div class="mb-3">
                <label for="content" class="form-label">เนื้อหา</label>
                <input type="text" class="form-control" id="content" placeholder="กรอกเนื้อหา">
            </div>
            <div class="mb-3">
                <label for="created" class="form-label">เรียบเรียงโดย</label>
                <input type="text" class="form-control" id="created" placeholder="กรอกชื่อผู้เรียบเรียง">
            </div>
            <div class="mb-3">
                <label for="img-blog" class="form-label">เลือกรูปภาพ</label>
                <input type="file" class="form-control" id="img-blog" accept="image/png ,image/jpeg" onchange="previewImage(event)">
                <img id="image-preview" src="#" class="img-fluid mt-3" alt="Image Preview" style="display: none;">
            </div>
        </div>`;

const btnBlog = $('#btn-add-blog');

$(btnBlog).click(function () {
    Swal.fire({
        title: 'New BLOG!',
        html: htmlBlog,
        showCancelButton: true,
        confirmButtonText: 'เพิ่ม Blog',
        cancelButtonText: 'ยกเลิก',
        showLoaderOnConfirm: true,
        preConfirm: (value) => {
            const title = $('#title').val();
            const subtitle = $('#subtitle').val();
            const content = $('#content').val();
            const created = $('#created').val();
            const image = $('#img-blog').prop('files')[0];
            const reader = new FileReader();
            return new Promise((resolve) => {
                if (image && (image.type === 'image/png' || image.type === 'image/jpeg')) {
                    reader.onload = function (e) {
                        const date = new Date();
                        const year = date.getFullYear().toString().slice(2);
                        const month = (date.getMonth() + 1).toString().padStart(2, '0');
                        const day = date.getDate().toString().padStart(2, '0');
                        resolve({
                            title: title,
                            subtitle: subtitle,
                            content: content,
                            created: created,
                            filename: image.name,
                            imagePreview: e.target.result,
                            datetime: `${day}-${month}-${year}`,
                        });
                    };
                    reader.readAsDataURL(image);
                } else {
                    const date = new Date();
                    const year = date.getFullYear().toString().slice(2);
                    const month = (date.getMonth() + 1).toString().padStart(2, '0');
                    const day = date.getDate().toString().padStart(2, '0');
                    resolve({
                        title: title,
                        subtitle: subtitle,
                        content: content,
                        created: created,
                        datetime: `${day}-${month}-${year}`,
                    });
                }
            });
        },
    }).then((result) => {
        if (result.isConfirmed) {
            console.log('Blog content:', result.value);
            const formData = new FormData();

            // Append form values to FormData
            formData.append('title', result.value.title);
            formData.append('subtitle', result.value.subtitle);
            formData.append('content', result.value.content);
            formData.append('created', result.value.created);
            formData.append('filename', result.value.filename);
            formData.append('datetime', result.value.datetime);

            // Append image file to FormData
            if (result.value.imagePreview) {
                const base64Image = result.value.imagePreview.split(',')[1];
                const blob = b64toBlob(base64Image, 'image/jpeg'); // Convert base64 to Blob
                formData.append('img-blog', blob, result.value.filename);
            }
            $.ajax({
                url: './Backoffice/AddBlogController.php',
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function (response) {
                    if(response == "upload_success") {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'สร้าง BLOG ใหม่สำเร็จ!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        setTimeout(() => {
                            window.location.reload();
                        }, 1500);
                    }else {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'error',
                            title: 'สร้าง BLOG ใหม่ไม่สำเร็จ!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        setTimeout(() => {
                            window.location.reload();
                        }, 1500);
                    }
                    
                },
                error: function (xhr, status, error) {
                    console.error('AJAX request error:', error);
                    Swal.fire({
                        position: 'top-center',
                        icon: 'error',
                        title: 'เกิดข้อผิดพลาด!',
                        text: 'ไม่สามารถสร้าง BLOG ใหม่ได้',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setTimeout(() => {
                        window.location.reload();
                    }, 1500);
                },
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            console.log('Blog addition cancelled');
        }
    });
});

function b64toBlob(b64Data, contentType = '', sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
}

function previewImage(event) {
    const image = document.getElementById('image-preview');
    image.src = URL.createObjectURL(event.target.files[0]);
    image.style.display = 'block';
}

async function Edit(id) {
    let card = document.getElementById(id);
    let title = card.querySelector('.card-title').textContent;
    let subtitle = card.querySelector('.card-subtitle').textContent;
    let content = card.querySelector('.card-text').textContent;
    let created = card.querySelector('.created').textContent;
    const createdUsername = created.split(': ')[1];
    let imagePath = card.querySelector('#img-content').src;
    var filename = imagePath.substring(imagePath.lastIndexOf("/") + 1);

    const data = {
        id: id,
        title: title,
        subtitle: subtitle,
        content: content,
        created: created,
        image: imagePath,
        filename: filename
    }
    console.log(data);

    const editBlogHtml =
        `
            <div class="mb-3 text-start">
                <label for="title-new" class="form-label">Title:</label>
                <input type="text" name="title" id="title-new" class="form-control" value="${title}">
            </div>
            <div class="mb-3 text-start">
                <label for="subtitle-new" class="form-label">Subtitle:</label>
                <input type="text" name="subtitle" id="subtitle-new" class="form-control" value="${subtitle}">
            </div>
            <div class="mb-3 text-start">
                <label for="content-new" class="form-label">Content:</label>
                <input type="text" name="content" id="content-new" class="form-control" value="${content}">
            </div>
            <div class="mb-3 text-start">
                <label for="created-new" class="form-label">Created:</label>
                <input type="text" name="created" id="created-new" class="form-control" value="${createdUsername}">
            </div>
            <div class="mb-3 text-start">
                <label for="file-new" class="form-label">File: <span id="filename">${filename}</span></label>
                <input type="file" name="file" id="file-new" class="form-control">
                <img id="imagePreview" alt="" src="${imagePath}" class="img-fluid mt-3">
            </div>
        `;

    const swalInstance = Swal.fire({
        title: `แก้ไขรายการที่ ${id}`,
        html: editBlogHtml,
        confirmButtonText: 'แก้ไข้ข้อมูล',
        showCancelButton: true,
        focusConfirm: false,
        didOpen: () => {
            const fileInput = document.getElementById('file-new');
            const imagePreview = document.getElementById('imagePreview');

            fileInput.addEventListener('change', (event) => {
                const file = event.target.files[0];

                if (file) {
                    const reader = new FileReader();

                    reader.onload = function () {
                        imagePreview.src = reader.result;
                    };

                    reader.readAsDataURL(file);
                    const filenameElement = document.getElementById('filename');
                    filenameElement.textContent = file.name;
                }
            });
        },
        preConfirm: () => {
            const createdUsername = created.split(': ')[1];
            const inputNewFile = document.getElementById('file-new');

            const file = inputNewFile.files[0];
            const filename = file ? file.name : "";

            const title = document.getElementById('title-new').value;
            const subtitle = document.getElementById('subtitle-new').value;
            const content = document.getElementById('content-new').value;

            const date = new Date();
            const year = date.getFullYear().toString().slice(2);
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');
 

            const confirmationHtml = `
                    <div class="text-start">
                        <h2 class="text-center" id="id-pre-blog">แก้ไขรายการที่: ${id}</h2>
                        <h3 id="title-new">Title: ${title}</h3>
                        <h5 id="subtitle-new">Subtitle: ${subtitle}</h5>
                        <p id="content-new">Content: ${content}</p>
                        <p id="created-new">Created: ${createdUsername}</p>
                        <p id="file-new">File: ${filename}</p>
                    </div>
        `;

            return Swal.fire({
                title: 'ยืนยันการแก้ไข',
                html: confirmationHtml,
                showCancelButton: true,
                confirmButtonText: 'บันทึก',
                cancelButtonText: 'ยกเลิก',
                focusConfirm: false
            }).then((result) => {
                if (result.isConfirmed) {
                    const formData = new FormData(); // Create a new FormData object
                    formData.append('id', id);
                    formData.append('title', title);
                    formData.append('subtitle', subtitle);
                    formData.append('content', content);
                    formData.append('created', createdUsername);
                    formData.append('file', inputNewFile.files[0]);
                    formData.append('filename', filename);
                    formData.append('date', `${day}-${month}-${year}`);

                    console.log(formData);

                    $.ajax({
                        type: "POST",
                        url: "./Backoffice/UpdateBlogController.php",
                        data: formData,
                        processData: false,
                        contentType: false,
                        success: function (response) {
                            if(response = "update_success"){
                                Swal.fire({
                                    position: 'top-center',
                                    icon: 'success',
                                    title: 'แก้ไข BLOG สำเร็จ!',
                                    showConfirmButton: false,
                                timer: 1500
                                })
                                setTimeout(() => {
                                    window.location.reload();
                                }, 1500);
                            }else {
                                Swal.fire({
                                    position: 'top-center',
                                    icon: 'error',
                                    title: 'แก้ไข BLOG ไม่สำเร็จ!',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                setTimeout(() => {
                                    window.location.reload();
                                }, 1500);
                            }
                           
                        }
                    });
                }
            });
        }
    });
}

function DeleteBlog(id, filename) {
    // console.log("id: ",id);
    // console.log("filename: ",filename);
    Swal.fire({
        title: 'ลบ Blog Content?',
        text: "คุณต้องการลบ Blog นี้ใช่หรือไม่?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ใช่, ต้องการ!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: './Backoffice/DeleteBlogController.php',
                type: 'POST',
                data: {
                    id: id,
                    filename: filename
                },
            success: function (response) {
                if(response == "delete_success") {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'ลบ BLOG สำเร็จ!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setTimeout(() => {
                        window.location.reload();
                    }, 1500);
                }else {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'error',
                        title: 'ลบ BLOG ไม่สำเร็จ!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setTimeout(() => {
                        window.location.reload();
                    }, 1500);
                }
                    
                },
            error: function (xhr, status, error) {
                console.error('AJAX request error:', error);
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'เกิดข้อผิดพลาด!',
                    text: 'ไม่สามารถสร้าง BLOG ใหม่ได้',
                    showConfirmButton: false,
                    timer: 1500
                })
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
            },
        });
    }
})
}





