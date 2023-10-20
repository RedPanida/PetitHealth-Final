var fullname = localStorage.getItem("fullname");
$(document).ready(function() {
    var showUserName = $('#fullname');
    showUserName.html(fullname);
  
    $.ajax({
      type: "GET",
      url: "../controller/HomePageController.php",
      success: (response) => {
        let data;
        try {
          data = JSON.parse(response);
        } catch (error) {
          console.error('Error parsing response:', error);
          return;
        }
  
        const firstData = data.shift();
        const firstDataContainer = $('#first-data');
        const firstDataCard = $('<div class="card col-12 h-100"></div>');
        const firstDataCardContent = `
          <div class="card-body">
            <img src="../views/backoffice/upload_blog/${firstData.filename}" class="card-img-top">
            <h4 class="card-title">${firstData.title}</h4>
            <h5 class="card-subtitle">${firstData.subtitle}</h5>
            <p class="card-text pt-3">${firstData.content}</p>
            <p class="created pt-4">เรียบเรียงโดย: ${firstData.created}</p>
            <p class="date">วันที่: ${firstData.datetime}</p>
          </div>
        `;
        firstDataCard.append(firstDataCardContent);
        firstDataContainer.append(firstDataCard);
  
        const cardContainer = $('#card-container');
        const maxCardsPerRow = 3;
        const totalCards = data.length;
        let row;
  
        for (let i = 0; i < Math.min(totalCards, 3); i++) {
          const item = data[i];
          if (i % maxCardsPerRow === 0) {
            row = $('<div class="row mb-4 justify-content-center px-0"></div>');
            cardContainer.append(row);
          }
  
          const col = $('<div class="col-md-4"></div>');
          const card = $('<div class="card h-100"></div>');
          const cardContent = `
            <div class="card-body">
              <img src="../views/backoffice/upload_blog/${item.filename}" class="card-img-top">
              <h4 class="card-title">${item.title}</h4>
              <h5 class="card-subtitle">${item.subtitle}</h5>
              <p class="card-text pt-3">${item.content}</p>
              <p class="created pt-4">เรียบเรียงโดย: ${item.created}</p>
              <p class="date">วันที่: ${item.datetime}</p>
            </div>
          `;
          card.append(cardContent);
          col.append(card);
          row.append(col);
        }
  
        const remainingData = data.slice(3);
        if (remainingData.length > 0) {
            const showMoreButton = $('#btn-show-blog');
            showMoreButton.show();
            showMoreButton.on('click', () => {
              for (let i = 0; i < remainingData.length; i++) {
                const item = remainingData[i];
                const col = $('<div class="col-md-4"></div>');
                const card = $('<div class="card h-100"></div>');
                const cardContent = `
                  <div class="card-body">
                    <img src="../views/backoffice/upload_blog/${item.filename}" class="card-img-top">
                    <h4 class="card-title">${item.title}</h4>
                    <h5 class="card-subtitle">${item.subtitle}</h5>
                    <p class="card-text pt-3">${item.content}</p>
                    <p class="created pt-4">เรียบเรียงโดย: ${item.created}</p>
                    <p class="date">วันที่: ${item.datetime}</p>
                  </div>
                `;
                card.append(cardContent);
                col.append(card);
                cardContainer.append(col);
                col.hide().fadeIn(); // Add fadeIn effect
              }
              showMoreButton.hide();
            });
        }
      },
      error: (xhr, status, error) => {
        console.error('AJAX request failed:', error);
      }
    });
  });
  

// logout button
$(".logOut").click(function(){
Swal.fire({
  title: 'คุณกำลังจะออกจากระบบ?',
  text: "คุณต้องการยืนยันการออกจากระบบหรือไม่?",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'ใช่ฉันต้องการ!'
}).then((result) => {
  if (result.isConfirmed) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "กำลังออกจากระบบ",
        text: `ขอบคุณที่ใช้บริการเว็บแอปพลิเคชัน PetitHealth ของเรา`,
        timer: 3000
    });
    setTimeout(function() {
      localStorage.removeItem("fullname");
      document.cookie = "logged_in=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      window.location.href = '../index.php'
    }, 3000);
  }
})
})