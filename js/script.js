import { menuItems } from "./menuData.js";

const filterBtns = document.querySelectorAll(".filter-btn");
const categoryFilter = document.querySelector(".category-filter");
const categoryFilterBar = document.querySelector(".category-filter-bar");
const menuGrid = document.getElementById("menu-grid");
const themeToggle = document.getElementById("themeToggle");

// Theme Toggle
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const icon = themeToggle.querySelector("i");
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
});

//
//
//Scroll to top button
//
//
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > window.innerHeight) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

//
//
//
// Scroll handling for category filter //
//
//
//
//
let lastScrollY = window.scrollY;
let lastScrollTime = Date.now();
const scrollThreshold = window.innerHeight; // Set threshold to window height
const scrollTimeout = 1; // minimum time between scroll events

window.addEventListener("scroll", () => {
    const now = Date.now();
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - lastScrollY;

    // Only process scroll events after timeout and if scroll distance is significant
    if (
        now - lastScrollTime > scrollTimeout &&
        Math.abs(scrollDelta) > scrollThreshold
    ) {
        if (scrollDelta > 0) {
            // Scrolling down and past hero section
            // categoryFilter.style.transform = "translateY(0%)";
            categoryFilter.style.opacity = "1";
            categoryFilterBar.style.opacity = "1";
        } else {
            // Scrolling up or at top
            // categoryFilter.style.transform = "translateY(100%)";
            categoryFilter.style.opacity = "0";
            categoryFilterBar.style.opacity = "0";
        }

        lastScrollTime = now;
        lastScrollY = currentScrollY;
    }
});

let currentLang = "en"; // Idioma por defecto

function createMenuItemElement(item) {
    const div = document.createElement("div");
    div.className = "menu-item";
    div.setAttribute("data-aos", "fade-up-right"); // Aquí se agrega la animación

    div.innerHTML = `
        <div class="menu-item-image">
            <img src="${item.image}" alt="${
        item.name[currentLang]
    }" loading="lazy">
        </div>
        <div class="menu-item-content">
            <h3>${item.name[currentLang]}</h3>
            <p class="description">${item.description[currentLang] || ""}</p>
            ${
                item.variants
                    ? `<div class="variants">
                        <p class="variants-title">${
                            currentLang === "en" ? "Variants:" : "Variantes:"
                        }</p>
                        <ul>
                           ${item.variants
                               .map(
                                   (variant) =>
                                       `<li>${variant.name[currentLang]}: <span class="price">${variant.price}</span></li>`
                               )
                               .join("")}</ul>
                    </div>`
                    : `<p class="price">${item.price}</p>`
            }
        </div>
    `;

    return div;
}

function createCategorySection(category) {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "category-section";

    categoryDiv.id = category.key; // Usamos la clave única, no el nombre traducido

    categoryDiv.innerHTML = `
        <div class="category-wrapper">
            <div class="category-header">
                <hr class="top-line">
                <h2>${category.category[currentLang]}</h2>
                <p class="category-description">${
                    category.description[currentLang]
                }</p>
                <hr class="bottom-line">
            </div>
            <div class="menu-items">
                ${category.items
                    .map((item) => createMenuItemElement(item).outerHTML)
                    .join("")}
            </div>
        </div>
        `;

    return categoryDiv;
}
function setupScrollSpy() {
    const sections = document.querySelectorAll(".category-section[id]");
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const currentId = entry.target.id;
                console.log("Sección visible:", currentId);
                updateActiveButton(currentId);
            }
        });
    }, options);

    sections.forEach((section) => observer.observe(section));

    // Marcar la primera sección como activa solo si ninguna otra está visible
    const visibleSection = Array.from(sections).find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    });

    const initialId = visibleSection ? visibleSection.id : sections[0]?.id;
    if (initialId) updateActiveButton(initialId);
}


function updateActiveButton(currentId) {
    const categoryBar = document.querySelector(".category-filter");
    if (!categoryBar) return;

    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach((btn) => {
        if (!btn) return;

        const isActive = btn.dataset.category === currentId;
        btn.classList.toggle("active", isActive);

        if (isActive) {
            const btnRect = btn.getBoundingClientRect();
            const barRect = categoryBar.getBoundingClientRect();

            const isPartiallyVisible =
                btnRect.right > barRect.left && btnRect.left < barRect.right;

            if (!isPartiallyVisible) {
                const scrollLeft = btn.offsetLeft - 16;
                categoryBar.scrollTo({
                    left: scrollLeft,
                    behavior: "smooth",
                });
            }
        }
    });
}
//
//
// Cargar todos los platos del menú
//
//
function renderMenu(items) {
    const menuGrid = document.getElementById("menuGrid");
    menuGrid.innerHTML = ""; // Limpia el contenido antes de volver a renderizar

    items.forEach((category) => {
        const categorySection = createCategorySection(category);
        menuGrid.appendChild(categorySection);
    });
    
}
//
//
// Las traducciones para contenido del héroe
//
//
const heroContent = {
    title: {
        en: "Welcome to our Restaurant",
        es: "Bienvenido a nuestro Restaurante",
    },
    openingHours: {
        en: "Open: Mon - Sun <br />9:30 a.m. - 7:30 p.m.",
        es: "Abierto: Lun - Dom <br />9:30 a.m. - 7:30 p.m.",
    },
    viewMenuButton: {
        en: "View Menu",
        es: "Ver Menú",
    },
};
//
//
// Las traducciones para contenido del héroe
//
//
function updateHeroContent() {
    // Cambiar título
    document.querySelector(".hero-content h1").textContent =
        heroContent.title[currentLang];

    // Cambiar horas de apertura
    document.querySelector(".opening-hours p").innerHTML =
        heroContent.openingHours[currentLang];

    // Cambiar texto del botón
    document.querySelector(".view-menu-btn span").textContent =
        heroContent.viewMenuButton[currentLang];
}
//
//
// Las traducciones de los filtros
//
//
const filterTranslations = {
    all: {
        en: "All",
        es: "Todo",
    },
    appetizers: {
        en: "Appetizers",
        es: "Entradas",
    },
    mains: {
        en: "Mains",
        es: "Principales",
    },
    "sea foods": {
        en: "Sea foods",
        es: "Mariscos",
    },
    soups: {
        en: "Soups",
        es: "Sopas",
    },
    dessert: {
        en: "Dessert",
        es: "Postre",
    },
    breakfasts: {
        en: "Breakfasts",
        es: "Desayunos",
    },
    trays: {
        en: "Trays",
        es: "Bandejas",
    },
};
//
//
// Función para actualizar los textos de los filtros
//
//
function updateFilterButtons() {
    document.querySelectorAll(".filter-btn").forEach((button) => {
        const category = button.dataset.category;
        button.textContent = filterTranslations[category][currentLang];
    });
}

//
//
// Cambio de idioma y boton de idioma
//
//
function setupEventListeners() {
    // Botón de idioma
    document.getElementById("langToggle").addEventListener("click", () => {
        currentLang = currentLang === "en" ? "es" : "en";
        document.querySelector("#langToggle span").textContent =
            currentLang.toUpperCase();
        document.getElementById("langToggle").classList.toggle("active");

        updateHeroContent();
        updateFilterButtons();
        renderMenu(menuItems);
    });

    // Botones de filtro (solo este bloque)
    document.querySelectorAll(".filter-btn").forEach((button) => {
        button.addEventListener("click", function () {
            document.querySelectorAll(".filter-btn").forEach((btn) => {
                btn.classList.remove("active");
            });
            this.classList.add("active");

            const category = this.dataset.category;
            const section = document.getElementById(category);

            // Si la sección existe, hacer scroll hasta ella
            if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
}

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    document.getElementById("progressBar").style.width = scrollPercent + "%";
});

//
//
//  Inicialización
//
//
document.addEventListener("DOMContentLoaded", () => {
    updateFilterButtons();
    setupEventListeners();
    renderMenu(menuItems);
    setupScrollSpy();
});
