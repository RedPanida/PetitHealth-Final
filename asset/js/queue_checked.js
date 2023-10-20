var myData = JSON.parse(localStorage.getItem('myData'));
console.log(myData);

var tableBody = $('#table-body');

// Clear existing table rows
tableBody.empty();

// Create a new table row
var newRow = $('<tr>');

// Create table cells and populate them with the data
var idCell = $('<td>').text(myData.id);
var petNameCell = $('<td>').text(myData.petName);
var hospitalCell = $('<td>').text(myData.hospital);
var symptomCell = $('<td>').text(myData.symptom);
var symptomOtherCell = $('<td>').text(myData.symptomOther);
var dateCell = $('<td>').text(myData.date);
var timeCell = $('<td>').text(myData.time);
var paymentTypeCell = $('<td>').text(myData.paymentType);
var paymentStateCell = $('<td>').text(myData.paymentState);

// Append the cells to the new row
newRow.append(idCell, petNameCell, hospitalCell, symptomCell, symptomOtherCell, dateCell, timeCell, paymentTypeCell, paymentStateCell);

// Append the new row to the table body
tableBody.append(newRow);

$(".btn-back-vdo").click(() => {
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'เพิ่มข้อมูลการจองคิวนัดหมายเรียบร้อยแล้ว',
        showConfirmButton: false,
        timer: 1500
    })
    .then(() => {
        localStorage.removeItem("myData");
        window.location.href = '../views/video-call.php';
    });
})