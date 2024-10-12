const klik = document.getElementById("klik");
const navbar = document.getElementById("navbar");
const navItems = document.querySelectorAll(".nav-item");

klik.addEventListener('change', function() {
    navbar.classList.toggle('active'); // toggle Hamburger Menu
});

// Tambahkan event listener untuk setiap item navbar
navItems.forEach(item => {
    item.addEventListener('click', function() {
        if (klik.checked) {
            klik.checked = false; // Matikan toggle
            navbar.classList.remove('active'); // Sembunyikan navbar
        }
    });
});

const strings = ["Ahmad Syarifuddin", "Full Stack Developer"];
        let index = 0; // untuk memilih string
        let charIndex = 0; // untuk memilih karakter dalam string
        const typedText = document.querySelector(".typedText");

        function type() {
            if (charIndex < strings[index].length) {
                typedText.textContent += strings[index].charAt(charIndex);
                charIndex++;
                setTimeout(type, 100); // kecepatan mengetik
            } else {
                setTimeout(backspace, 2000); // jeda sebelum menghapus
            }
        }

        function backspace() {
            if (charIndex > 0) {
                typedText.textContent = strings[index].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(backspace, 80); // kecepatan menghapus
            } else {
                index = (index + 1) % strings.length; // pindah ke string berikutnya
                setTimeout(type, 1000); // jeda sebelum mulai mengetik yang baru
            }
        }

        // Mulai efek ketika halaman dimuat
        document.addEventListener("DOMContentLoaded", function() {
            type();
        });

        // Alert berhasil Submit
        document.getElementById("form-contact").addEventListener("submit", function(event) {
            event.preventDefault(); 
            alert("Terima Kasih Telah Menghubungi Kami");
            this.reset();
        });