import {home} from "./js/home.js";
import {bride} from "./js/bride.js";
import {time} from "./js/time.js";
import {galeri} from "./js/galeri.js";
import {wishas} from "./js/wishas.js";
import {navbar} from "./js/navbar.js";
import {welcome} from "./js/welcome.js";

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inisialisasi Animasi & Modul
    AOS.init();
    welcome();
    navbar();
    home();
    bride();
    time();
    galeri();
    wishas();

    // 2. Logika Nama Tamu (Support ?to=Nama)
    const urlParams = new URLSearchParams(window.location.search);
    const namaTamu = urlParams.get('to');

    if (namaTamu) {
        // Menggunakan querySelectorAll agar semua placeholder terisi (Welcome & Bride section)
        const targetElements = document.querySelectorAll('.nama-tamu-placeholder');
        targetElements.forEach(el => {
            el.textContent = namaTamu;
        });
    }
});
