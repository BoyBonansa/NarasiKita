
document.addEventListener("DOMContentLoaded", function() {
    // Masukkan kode JavaScript di sini

// navbar aktif

// Select all navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Function to remove 'active' class from all nav links
function removeActiveClasses() {
    navLinks.forEach(link => link.classList.remove('active'));
}

// Function to add 'active' class based on section in view
function setActiveLink() {
    const sections = document.querySelectorAll('section');
    const offset = window.innerHeight / 3;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute('id');
        
        if (sectionTop >= -offset && sectionTop <= offset) {
            removeActiveClasses();
            document.querySelector(`a[href="#${sectionId}"]`).classList.add('active');
        }
    });
}

// Automatically set #home as active when page is first loaded
function activateHomeOnLoad() {
    const homeLink = document.querySelector('a[href="#home"]');
    homeLink.classList.add('active');
}

// Event listener for scrolling
window.addEventListener('scroll', setActiveLink);

// Activate #home on page load
window.addEventListener('load', activateHomeOnLoad);

// navbar

// quotes Function

// Array kutipan dengan penulis untuk setiap kategori
const quotes = {
    galau: [
        {
            text: "(Benang tak terlihat adalah ikatan yang terkuat.) — Kadang, perasaan yang tak terungkap justru yang paling dalam dan tak terpisahkan.",
            author: "Frederick"
        },
        {
            text: "(Kehilangan adalah bagian dari hidup.) — Terkadang, perpisahan memberi kita pelajaran berharga.",
            author: "Joshua Arnold"
        },
        {
            text: "(Hati yang patah adalah jendela menuju kebangkitan.) — Dari kesedihan, kita belajar untuk bangkit.",
            author: "Atma Putera"
        }
    ],
    cinta: [
        {
            text: "(Cinta bukan tentang memiliki, tetapi tentang memberi dan saling melengkapi.) — Cinta adalah perjalanan, bukan tujuan.",
            author: "Dimitry Novikov"
        },
        {
            text: "(Setiap cinta adalah unik.) — Jangan bandingkan cinta yang kau miliki dengan orang lain.",
            author: "Hiroshi Amano"
        },
        {
            text: "(Cinta adalah kekuatan yang mengubah segalanya.) — Dengan cinta, kita bisa melewati segalanya.",
            author: "vyohec milosav"
        }
    ],
    kehidupan: [
        {
            text: "(Hidup adalah tentang membuat pilihan, dan pilihanmu menentukan jalanmu.) — Setiap keputusan adalah langkah menuju masa depan.",
            author: "Virgoun"
        },
        {
            text: "(Keberanian bukanlah ketiadaan ketakutan.) — Keberanian adalah kemampuan untuk menghadapi ketakutan.",
            author: "Dmitry Novikov"
        },
        {
            text: "(Hidup adalah seni menggambar tanpa penghapus.) — Setiap kesalahan adalah bagian dari perjalanan.",
            author: "Sergei Beskopytnyi"
        }
    ]
};

// Variabel untuk melacak kategori saat ini dan kutipan terakhir yang ditampilkan
let currentCategory = "";
let lastQuoteIndex = -1;

// Fungsi untuk menampilkan kutipan berikutnya berdasarkan kategori
function showNextQuote() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes[currentCategory].length);
    } while (randomIndex === lastQuoteIndex); // Pastikan tidak menggunakan kutipan yang sama berurutan

    lastQuoteIndex = randomIndex; // Simpan indeks kutipan yang terakhir ditampilkan

    const quote = quotes[currentCategory][randomIndex];
    document.getElementById("content-quotes-text").innerText = quote.text;
    document.getElementById("header-quotes-text").innerText = quote.author;
}

// Event listener untuk tombol kutipan galau
document.getElementById("quotes-galau").addEventListener("click", () => {
    currentCategory = "galau";
    showNextQuote(); // Tampilkan kutipan pertama
});

// Event listener untuk tombol kutipan cinta
document.getElementById("quotes-cinta").addEventListener("click", () => {
    currentCategory = "cinta";
    showNextQuote(); // Tampilkan kutipan pertama
});

// Event listener untuk tombol kutipan kehidupan
document.getElementById("quotes-kehidupan").addEventListener("click", () => {
    currentCategory = "kehidupan";
    showNextQuote(); // Tampilkan kutipan pertama
});

// Event listener untuk menyalin kutipan
document.getElementById("salin-quotes").addEventListener("click", () => {
    const quoteText = document.getElementById("content-quotes-text").innerText;
    navigator.clipboard.writeText(quoteText).then(() => {
        alert("Kutipan telah disalin ke clipboard!");
    }).catch(err => {
        console.error("Gagal menyalin: ", err);
    });
});

});
