// Mendapatkan elemen footer
var footer = document.getElementById("realtimeFooter");

// Fungsi untuk memperbarui tanggal dan jam setiap detik
function updateDateTime() {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    var day = currentDate.getDate().toString().padStart(2, '0');
    var hours = currentDate.getHours().toString().padStart(2, '0');
    var minutes = currentDate.getMinutes().toString().padStart(2, '0');
    var seconds = currentDate.getSeconds().toString().padStart(2, '0');

    var timeString = hours + ':' + minutes + ':' + seconds;
    var dateString = year + '-' + month + '-' + day;

    // Menetapkan teks tanggal dan jam ke dalam elemen footer
    footer.innerHTML = timeString + '<br>' + dateString + '<br>&copy; 2024 - Aris Sunandar';
}

// Memanggil fungsi updateDateTime setiap detik
setInterval(updateDateTime, 1000);

// Memanggil fungsi untuk pertama kali saat halaman dimuat
updateDateTime();