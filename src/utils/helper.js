// --- HELPER.JS FULL VERSION ---

export const generateRandomId = () => {
    return Math.floor(100000 + Math.random() * 900000);
};

export const generateRandomColor = () => {
    const avoidColors = ['#000000', '#ffffff', '#f0f0f0', '#f5f5f5', '#fafafa'];
    let color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    while (avoidColors.includes(color)) {
        color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }
    return color;
};

// Menggunakan versi map().join('') yang lebih efisien untuk performa DOM
export const renderElement = (dataArray, container, templateFn) => {
    if (!container) {
        console.error("Container tidak ditemukan!");
        return;
    }
    // Update DOM hanya satu kali di akhir
    container.innerHTML = dataArray.map(item => templateFn(item)).join('');
};

export const addClassElement = (element, newClass) => {
    element.classList.add(newClass);
};

export const removeClassElement = (element, currentClass) => {
    element.classList.remove(currentClass);
};

export const formattedDate = (date) => {
    const d1 = new Date(date);
    const d2 = new Date();
    const diffInMs = Math.abs(d2 - d1);

    const msInMinute = 60 * 1000;
    const msInHour = 60 * msInMinute;
    const msInDay = 24 * msInHour;

    return {
        days: Math.floor(diffInMs / msInDay),
        hours: Math.floor((diffInMs % msInDay) / msInHour),
        minutes: Math.floor((diffInMs % msInHour) / msInMinute)
    };
};

export const formattedName = (name) => {
    return name.toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

export const getCurrentDateTime = () => {
    const now = new Date();
    return `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
};

const monthMapping = {
    'Januari': 1, 'Februari': 2, 'Maret': 3, 'April': 4, 'Mei': 5, 'Juni': 6,
    'Juli': 7, 'Agustus': 8, 'September': 9, 'Oktober': 10, 'November': 11, 'Desember': 12
};

export const monthNameToNumber = (monthName) => {
    return monthMapping[monthName] || 'di awali huruf besar!';
};

export const getQueryParameter = (parameterName) => {
    const queryString = window.location.href.split('?')[1]?.split('#')[0];
    return queryString ? new URLSearchParams(queryString).get(parameterName) : null;
};
