export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Romeo Montague',
            child: 'Putra ke 2',
            father: 'Montague',
            mother: 'Montague',
            image: './src/assets/images/pria.jpg',
            instagram: "romeo_ig",  // <--- Tambahkan ini
        },
        
        P: {
            id: 2,
            name: 'Juliet Capulet',
            child: 'Putri ke 3',
            father: 'Capulet',
            mother: 'Capulet',
            image: './src/assets/images/wanita.jpg',
            instagram: "juliet_ig" // <--- Tambahkan ini
        },

        couple: './src/assets/images/couple.jpg'
    },

    time: {
        marriage: {
            year: '2030',
            month: 'November',
            date: '14',
            day: 'Kamis',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2024',
            month: 'November',
            date: '14',
            day: 'Kamis',
            hours: {
                start: '11.00',
                finish: 'Selesai'
            }
        },
        address: 'Jl.Tomat no.18 , RT 000/ RW 000, Desa.Ngawi, Kec.Ngawi, Kab.Ngawi , Ngawi (1234)'
    },

    link: {
        calendar: 'https://calendar.app.google/oSVLRMYC79GzuA4f9',
        map: 'https://maps.app.goo.gl/q1Ask2Jgd4ekiiKBA',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.jpg'
        },
        {
            id: 2,
            image: './src/assets/images/2.jpg'
        },
        {
            id: 3,
            image: './src/assets/images/3.jpg'
        },
        {
            id: 4,
            image: './src/assets/images/4.jpg'
        },
        {
            id: 5,
            image: './src/assets/images/5.jpg'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Romeo Montague',
            icon: './src/assets/images/bca.png',
            rekening: '12345678'
        },
        {
            id: 2,
            name: 'Juliet Capulet',
            icon: './src/assets/images/bri.png',
            rekening: '12345678'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbyydz6N4p2VWUG8zsXeURv6ap9RP8a4eC3x6N3x6qTDjMVr1cIBz9S0NsHw2rWvBOSXGg/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
