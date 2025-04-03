import { menuItems } from "./menuData.js"; // Sin "/js/js/"

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
// Scroll handling for category filter
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

function renderMenu(items) {
    const menuGrid = document.getElementById("menuGrid");
    menuGrid.innerHTML = ""; // Limpia el contenido antes de volver a renderizar

    items.forEach((category) => {
        const categorySection = createCategorySection(category);
        menuGrid.appendChild(categorySection);
    });
}

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

        // Agregar evento de clic para desplazarse a la categoría
        button.addEventListener("click", () => {
            const categorySection = document.getElementById(category);
            if (categorySection) {
                categorySection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}


// 3. Función de filtrado adaptada a tu estructura de datos
function filterMenuItems(category = "all") {
    try {
        if (!Array.isArray(menuItems)) {
            console.error("menuItems no es un array válido");
            return;
        }

        const itemsToShow =
            category === "all"
                ? menuItems
                : menuItems.filter((item) => {
                      // Para tu estructura de datos, necesitamos acceder a item.category.en/es
                      const itemCategory = item.category
                          ? item.category.en.toLowerCase().trim()
                          : "uncategorized";

                      const filterCategory = category.toLowerCase().trim();

                      // Mapeo de equivalencias
                      const categoryEquivalents = {
                          "sea foods": ["sea foods", "seafoods", "mariscos"],
                          appetizers: ["appetizers", "entradas"],
                          mains: ["mains", "platos principales"],
                          trays: ["trays", "bandejas"],
                          soups: ["soups", "sopas"],
                          dessert: ["dessert", "postre"],
                          breakfasts: ["breakfasts", "desayunos"],
                          all: ["all", "todo"], // Si necesitas filtrar por "todos"
                      };

                      if (categoryEquivalents[filterCategory]) {
                          return categoryEquivalents[filterCategory].some(
                              (equiv) => equiv === itemCategory
                          );
                      }

                      return itemCategory === filterCategory;
                  });

        renderMenu(itemsToShow);
    } catch (error) {
        console.error("Error en filterMenuItems:", error);
        renderMenu(menuItems);
    }
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
        updateHeroContent(
            document.querySelector(".filter-btn.active").dataset.category
        );
    });

    // Botones de filtro (solo este bloque)
    document.querySelectorAll(".filter-btn").forEach((button) => {
        button.addEventListener("click", function () {
            document.querySelectorAll(".filter-btn").forEach((btn) => {
                btn.classList.remove("active");
            });
            this.classList.add("active");
            filterMenuItems(this.dataset.category);
        });
    });
}

// 5. Inicialización
document.addEventListener("DOMContentLoaded", () => {
    // Asegúrate de que menuItems está definido antes de esto
    updateFilterButtons();
    filterMenuItems("all");
    setupEventListeners();
});
