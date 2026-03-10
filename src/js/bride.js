import { data } from "../assets/data/data.js";
import { renderElement } from "../utils/helper.js";

export const bride = () => {
    const brideCouple = document.querySelector('.bride_couple ul');

    // Template untuk item pengantin
    const brideListItem = (item) => `
        <li data-aos="zoom-in" data-aos-duration="1000">
            <figure>
                 <img src="${item.image}" alt="${item.name}">
                 <figcaption>${item.name}</figcaption>
            </figure>
            
            <a href="https://instagram.com/${item.instagram}" target="_blank" class="ig-link" style="display: inline-flex; align-items: center; gap: 0.5rem;">
                 <i class='bx bxl-instagram'></i> @${item.instagram}
            </a>
            
            <p>${item.child} <br>dari <br> Bapak ${item.father} & Ibu ${item.mother}</p>
            <span style="display: ${item.id === 2 ? 'none' : 'block'}">&</span>
        </li>
    `;

    // Persiapan data
    const brideData = [data.bride.L, data.bride.P];
    
    // Eksekusi render menggunakan helper
    renderElement(brideData, brideCouple, brideListItem);
};
