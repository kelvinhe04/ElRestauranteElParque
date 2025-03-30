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
//
//
//
// Load Menu Items //
//
//
//

const menuItems = [
    {
        category: { en: "APPETIZERS", es: "ENTRADAS" },
        description: {
            en: "Kick off your meal with our selection of shareable starters, designed to awaken your taste buds and bring people together. Perfect for pairing with drinks or enjoying as a light bite.",
            es: "Empieza tu comida con nuestra selección de entradas para compartir, diseñadas para despertar tus papilas gustativas y reunir a las personas. Perfectas para acompañar con bebidas o disfrutar como un bocado ligero.",
        },
        items: [
            {
                name: { en: "Fried Wonton", es: "Wonton Frito" },
                description: {
                    en: "Crispy, golden wonton strips - light, crunchy, and perfect for dipping. Sweet and sour sauce available for an extra $1.00. Served with 12 pieces.",
                    es: "Crujientes tiras de wonton dorado - ligeras y crujientes, perfectas para mojar. Salsa agridulce disponible por $1.00 adicionales. Servido con 12 piezas.",
                },
                price: "$3.00",
                image: "img item menu/Fried Wonton.webp",
            },
            {
                name: { en: "Spring Rolls", es: "Rollitos de Primavera" },
                description: {
                    en: "Crispy, golden rolls stuffed with a refreshing mix of shredded carrots, cabbage, and your choice of protein. Sweet and sour sauce available for an extra $1.00. Served with 9 pieces.",
                    es: "Crujientes y dorados rollitos rellenos con una mezcla refrescante de zanahorias ralladas, repollo y tu proteína a elección. Salsa agridulce disponible por $1.00 adicionales. Servido con 9 piezas.",
                },
                variants: [
                    {
                        name: { en: "Chicken and pork", es: "Pollo y cerdo" },
                        price: "$7.00",
                    },
                    { name: { en: "Chicken", es: "Pollo" }, price: "$7.00" },
                    { name: { en: "Pork", es: "Cerdo" }, price: "$7.00" },
                    { name: { en: "Shrimp", es: "Camarón" }, price: "$8.00" },
                ],
                image: "img item menu/Spring Rolls.webp",
            },
            {
                name: { en: "Stuffed Wonton", es: "Wonton Relleno" },
                description: {
                    en: "A classic favorite! Golden wontons stuffed with your choice of savory fillings. Each bite is a perfect blend of crunch and flavor. Sweet and sour sauce available for an extra $1.00. Served with 9 pieces.",
                    es: "¡Un clásico favorito! Wontons dorados rellenos con tu elección de ingredientes sabrosos. Cada bocado es una mezcla perfecta de crujiente y sabor. Salsa agridulce disponible por $1.00 adicionales. Servido con 9 piezas.",
                },
                variants: [
                    { name: { en: "Pork", es: "Cerdo" }, price: "$7.00" },
                    { name: { en: "Chicken", es: "Pollo" }, price: "$7.00" },
                    { name: { en: "Shrimp", es: "Camarón" }, price: "$8.00" },
                ],
                image: "img item menu/Stuffed Wonton.webp",
            },
            {
                name: { en: "Sweet and Sour Sauce", es: "Salsa Agridulce" },
                description: {
                    en: "A tangy, slightly sweet dipping sauce that pairs perfectly with fried appetizers.",
                    es: "Una salsa ligeramente dulce y ácida que combina perfectamente con los aperitivos fritos.",
                },
                price: "$1.00",
                image: "img item menu/Sweet and Sour Sauce.webp",
            },
            {
                name: { en: "Fried Plantains", es: "Plátanos Fritos" },
                description: {
                    en: "Golden and crispy on the edges and inside - these fried plantains make the perfect snack or side dish.",
                    es: "Dorados y crujientes en los bordes y por dentro, estos plátanos fritos son el acompañamiento o snack perfecto.",
                },
                price: "$3.00",
                image: "img item menu/Fried Plantains.webp",
            },
            {
                name: { en: "French Fries", es: "Papas Fritas" },
                description: {
                    en: "Crispy, golden, and irresistible. A classic side that everyone loves.",
                    es: "Crujientes, doradas e irresistibles. Un acompañamiento clásico que a todos les encanta.",
                },
                price: "$3.00",
                image: "img item menu/French Fries.webp",
            },
            {
                name: { en: "Breaded Shrimp", es: "Camarones Empanizados" },
                description: {
                    en: "Crispy, golden-breaded shrimp - perfect as a snack or appetizer.",
                    es: "Camarones empanizados, crujientes y dorados, perfectos como bocadillo o aperitivo.",
                },
                price: "$10.50",
                image: "img item menu/Breaded Shrimp.webp",
            },
            {
                name: {
                    en: "Shrimp with Vegetables",
                    es: "Camarones con Verduras",
                },
                description: {
                    en: "Succulent shrimp sautéed with a colorful medley of fresh vegetables. Light, flavorful, and perfect for sharing.",
                    es: "Camarones jugosos salteados con una colorida mezcla de verduras frescas. Ligero, sabroso y perfecto para compartir.",
                },
                price: "$12.00",
                image: "img item menu/Shrimp with Vegetables.webp",
            },
            {
                name: {
                    en: "Prawn with Vegetables",
                    es: "Langostinos con Verduras",
                },
                description: {
                    en: "Succulent prawns paired with a vibrant mix of fresh, crisp vegetables, stir-fried to perfection and seasoned with aromatic spices.",
                    es: "Langostinos jugosos acompañados de una mezcla vibrante de verduras frescas y crujientes, salteados a la perfección y sazonados con especias aromáticas.",
                },
                price: "$16.00",
                image: "img item menu/Prawn with Vegetables.webp",
            },
            {
                name: {
                    en: "Clams in Garlic Sauce or Black Bean Sauce",
                    es: "Almejas en Salsa de Ajo o Salsa de Frijoles Negros",
                },
                description: {
                    en: "Fresh clams cooked in a rich garlic or black bean sauce, offering a savory and aromatic flavor.",
                    es: "Almejas frescas cocinadas en una rica salsa de ajo o salsa de frijoles negros, ofreciendo un sabor sabroso y aromático.",
                },
                price: "$8.00",
                image: "img item menu/Clams in Garlic Sauce or Black Bean Sauce.webp",
            },
            {
                name: { en: "Chopped Steak", es: "Bistec Picado" },
                description: {
                    en: "Tender, juicy chopped steak, seasoned to perfection and cooked just right.",
                    es: "Bistec picado tierno y jugoso, sazonado a la perfección y cocido en su punto.",
                },
                price: "$11.00",
                image: "img item menu/Chopped Steak.webp",
            },
            {
                name: { en: "Sweet & Sour Chicken", es: "Pollo Agridulce" },
                description: {
                    en: "Crispy chicken pieces coated in a tangy sweet and sour glaze.",
                    es: "Trozos de pollo crujientes cubiertos con un glaseado agridulce.",
                },
                price: "$9.00",
                image: "img item menu/Sweet & Sour Chicken.webp",
            },
            {
                name: {
                    en: "Roast or Sweet & Sour Pork",
                    es: "Cerdo Asado o Agridulce",
                },
                description: {
                    en: "Crispy chicken pieces coated in a tangy sweet and sour glaze.",
                    es: "Trozos de cerdo crujientes cubiertos con un glaseado agridulce.",
                },
                price: "$9.00",
                image: "img item menu/Roast or Sweet & Sour Pork.webp",
            },
            {
                name: {
                    en: "Lettuce & Tomato Salad",
                    es: "Ensalada de Lechuga y Tomate",
                },
                description: {
                    en: "A fresh mix of greens, tomatoes and cucumbers.",
                    es: "Una mezcla fresca de hojas verdes, tomates y pepinos.",
                },
                price: "$4.00",
                image: "img item menu/Lettuce & Tomato Salad.webp",
            },
            {
                name: { en: "Foo Young", es: "Foo Young" },
                description: {
                    en: "A fluffy and satisfying omelet filled with fresh vegetables and your choice of protein.",
                    es: "Una tortilla esponjosa y satisfactoria llena de verduras frescas y tu proteína a elección.",
                },
                variants: [
                    { name: { en: "Pork", es: "Cerdo" }, price: "$5.50" },
                    { name: { en: "Chicken", es: "Pollo" }, price: "$5.50" },
                    { name: { en: "Shrimp", es: "Camarón" }, price: "$6.00" },
                    { name: { en: "Mixed", es: "Mixto" }, price: "$6.50" },
                ],
                image: "img item menu/Foo Young.webp",
            },
            {
                name: {
                    en: "A Bowl of Vegetable Fried Rice",
                    es: "Un Tazón de Arroz Frito con Verduras",
                },
                description: {
                    en: "Light and flavorful fried rice made with fresh vegetables and your choice of protein.",
                    es: "Arroz frito ligero y sabroso hecho con verduras frescas y tu proteína a elección.",
                },
                variants: [
                    { name: { en: "Pork", es: "Cerdo" }, price: "$7.50" },
                    {
                        name: { en: "Vegetarian", es: "Vegetariano" },
                        price: "$6.00",
                    },
                    { name: { en: "Mixed", es: "Mixto" }, price: "$7.00" },
                    { name: { en: "Shrimp", es: "Camarón" }, price: "$8.50" },
                    { name: { en: "Chicken", es: "Pollo" }, price: "$7.25" },
                    { name: { en: "Beef", es: "Res" }, price: "$7.75" },
                ],
                image: "img item menu/A Bowl of Vegetable Fried Rice.webp",
            },
            {
                name: { en: "Leon Pan Wanton", es: "Wonton Leon Pan" },
                description: {
                    en: "Soft, tender wontons filled with savory meat or chicken.",
                    es: "Wontons suaves y tiernos rellenos de carne sabrosa o pollo.",
                },
                price: "$8.00",
                image: "img item menu/Leon Pan Wanton.webp",
            },
            {
                name: {
                    en: "Boiled Chicken with Ginger",
                    es: "Pollo Hervido con Jengibre",
                },
                description: {
                    en: "Tender boiled chicken infused with aromatic ginger.",
                    es: "Pollo hervido tierno infusionado con jengibre aromático.",
                },
                price: "$9.00",
                image: "img item menu/Boiled Chicken with Ginger.webp",
            },
            {
                name: {
                    en: "Fried or Roasted Whole Chicken",
                    es: "Pollo Entero Frito o Asado",
                },
                description: {
                    en: "A whole chicken, fried to crispy perfection or roasted for a juicy, tender bite.",
                    es: "Un pollo entero, frito a la perfección crujiente o asado para un bocado jugoso y tierno.",
                },
                price: "$10.50",
                image: "img item menu/Fried or Roasted Whole Chicken.webp",
            },
            {
                name: {
                    en: "1/2 Fried/Roasted Chicken",
                    es: "1/2 Pollo Frito/Asado",
                },
                description: {
                    en: "Enjoy a generous portion of our perfectly cooked chicken, either golden-fried to crispy perfection or slow-roasted for juicy, tender flavor.",
                    es: "Disfruta de una generosa porción de nuestro pollo perfectamente cocinado, ya sea frito dorado a la perfección crujiente o asado lentamente para un sabor jugoso y tierno.",
                },
                price: "$5.75",
                image: "img item menu/Half Fried or Roasted Chicken.webp",
            },
            {
                name: {
                    en: "1/4 Fried/Roasted Chicken",
                    es: "1/4 Pollo Frito/Asado",
                },
                description: {
                    en: "Enjoy a flavorful serving of our chicken—choose between golden-fried for a crispy bite or slow-roasted for tender, juicy perfection, in a perfectly portioned quarter size.",
                    es: "Disfruta de una porción sabrosa de nuestro pollo: elige entre frito dorado para un bocado crujiente o asado lentamente para una perfección tierna y jugosa, en una porción perfectamente proporcionada de un cuarto.",
                },
                price: "$3.25",
                image: "img item menu/Quarter Fried or Roasted Chicken.webp",
            },
            {
                name: { en: "Garlic Lobster", es: "Langosta al Ajo" },
                description: {
                    en: "Succulent lobster cooked in a rich garlic sauce. Served with your choice of fries, fried plantain, or rice.",
                    es: "Langosta suculenta cocinada en una rica salsa de ajo. Servida con tu elección de papas fritas, plátano frito o arroz.",
                },
                price: "$18.50",
                image: "img item menu/Garlic Lobster.webp",
            },
        ],
    },
    {
        category: {
            en: "MAINS",
            es: "PLATOS PRINCIPALES",
        },
        description: {
            en: "Our main dishes are crafted with care, combining fresh ingredients and bold flavors to create unforgettable meals.",
            es: "Nuestros platos principales están elaborados con cuidado, combinando ingredientes frescos y sabores audaces para crear comidas inolvidables.",
        },
        items: [
            {
                name: {
                    en: "An Full Order of Chow Mein",
                    es: "Orden Completa de Chow Mein",
                },
                description: {
                    en: "Crispy noodles topped with a savory mix of stir-fried vegetables and your choice of protein. A delightful contrast of textures and flavors.",
                    es: "Fideos crujientes cubiertos con una mezcla sabrosa de vegetales salteados y tu proteína a elección. Un delicioso contraste de texturas y sabores.",
                },
                variants: [
                    { name: { en: "Pork", es: "Cerdo" }, price: "$8.00" },
                    {
                        name: { en: "Vegetarian", es: "Vegetariano" },
                        price: "$8.00",
                    },
                    { name: { en: "Mixed", es: "Mixto" }, price: "$9.00" },
                    { name: { en: "Shrimp", es: "Camarón" }, price: "$8.50" },
                    { name: { en: "Chicken", es: "Pollo" }, price: "$8.00" },
                    { name: { en: "Beef", es: "Res" }, price: "$8.00" },
                ],
                image: "img item menu/An Full Order of Chow Mein.webp",
            },
            {
                name: {
                    en: "Half Order of Chow Mein",
                    es: "Media Orden de Chow Mein",
                },
                description: {
                    en: "A smaller portion of our classic chow mein, perfect for a lighter meal.",
                    es: "Una porción más pequeña de nuestro clásico chow mein, perfecto para una comida más ligera.",
                },
                variants: [
                    { name: { en: "Pork", es: "Cerdo" }, price: "$6.00" },
                    {
                        name: { en: "Vegetarian", es: "Vegetariano" },
                        price: "$6.00",
                    },
                    { name: { en: "Mixed", es: "Mixto" }, price: "$7.00" },
                    { name: { en: "Shrimp", es: "Camarón" }, price: "$6.50" },
                    { name: { en: "Chicken", es: "Pollo" }, price: "$6.00" },
                    { name: { en: "Beef", es: "Res" }, price: "$6.00" },
                ],
                image: "img item menu/Half Order of Chow Mein.webp",
            },
            {
                name: {
                    en: "An Full Order of Chop Suey",
                    es: "Orden Completa de Chop Suey",
                },
                description: {
                    en: "A hearty stir-fry of fresh vegetables and your choice of protein.",
                    es: "Un salteado abundante de vegetales frescos y tu proteína a elección.",
                },
                variants: [
                    { name: { en: "Pork", es: "Cerdo" }, price: "$8.50" },
                    { name: { en: "Mixed", es: "Mixto" }, price: "$9.50" },
                    { name: { en: "Shrimp", es: "Camarón" }, price: "$9.00" },
                    { name: { en: "Chicken", es: "Pollo" }, price: "$8.50" },
                    { name: { en: "Beef", es: "Res" }, price: "$8.50" },
                ],
                image: "img item menu/An Full Order of Chop Suey.webp",
            },
            {
                name: {
                    en: "Half Order of Chop Suey",
                    es: "Media Orden de Chop Suey",
                },
                description: {
                    en: "A smaller portion of our flavorful chop suey, ideal for a lighter appetite.",
                    es: "Una porción más pequeña de nuestro sabroso chop suey, ideal para un apetito más ligero.",
                },
                variants: [
                    { name: { en: "Pork", es: "Cerdo" }, price: "$6.50" },
                    { name: { en: "Mixed", es: "Mixto" }, price: "$7.50" },
                    { name: { en: "Shrimp", es: "Camarón" }, price: "$7.00" },
                    { name: { en: "Chicken", es: "Pollo" }, price: "$6.50" },
                    { name: { en: "Beef", es: "Res" }, price: "$6.50" },
                ],
                image: "img item menu/Half Order of Chop Suey.webp",
            },
            {
                name: {
                    en: "An Full Order of Chow Fun",
                    es: "Orden Completa de Chow Fun",
                },
                description: {
                    en: "Wide, flat rice noodles stir-fried with fresh vegetables and your choice of protein.",
                    es: "Fideos de arroz anchos y planos salteados con vegetales frescos y tu proteína a elección.",
                },
                variants: [
                    { name: { en: "Pork", es: "Cerdo" }, price: "$9.25" },
                    {
                        name: { en: "Vegetarian", es: "Vegetariano" },
                        price: "$9.25",
                    },
                    { name: { en: "Mixed", es: "Mixto" }, price: "$10.25" },
                    { name: { en: "Shrimp", es: "Camarón" }, price: "$9.75" },
                    { name: { en: "Chicken", es: "Pollo" }, price: "$9.25" },
                ],
                image: "img item menu/An Full Order of Chow Fun.webp",
            },
            {
                name: {
                    en: "Half Order of Chow Fun",
                    es: "Media Orden de Chow Fun",
                },
                description: {
                    en: "A smaller portion of our savory chow fun, perfect for a lighter meal.",
                    es: "Una porción más pequeña de nuestro sabroso chow fun, perfecto para una comida más ligera.",
                },
                variants: [
                    { name: { en: "Pork", es: "Cerdo" }, price: "$7.25" },
                    {
                        name: { en: "Vegetarian", es: "Vegetariano" },
                        price: "$7.25",
                    },
                    { name: { en: "Mixed", es: "Mixto" }, price: "$8.25" },
                    { name: { en: "Shrimp", es: "Camarón" }, price: "$7.75" },
                    { name: { en: "Chicken", es: "Pollo" }, price: "$7.25" },
                ],
                image: "img item menu/Half Order of Chow Fun.webp",
            },
            {
                name: {
                    en: "An Full Order of Fried Rice",
                    es: "Orden Completa de Arroz Frito",
                },
                description: {
                    en: "A hearty and flavorful classic. Our fried rice is made with your choice of protein, tossed with vegetables and aromatic seasonings.",
                    es: "Un clásico abundante y sabroso. Nuestro arroz frito se prepara con tu proteína a elección, mezclado con vegetales y condimentos aromáticos.",
                },
                variants: [
                    { name: { en: "Pork", es: "Cerdo" }, price: "$7.50" },
                    { name: { en: "Mixed", es: "Mixto" }, price: "$8.50" },
                    { name: { en: "Shrimp", es: "Camarón" }, price: "$8.00" },
                    { name: { en: "Chicken", es: "Pollo" }, price: "$7.50" },
                    {
                        name: {
                            en: "Egg and vegetables",
                            es: "Huevo y vegetales",
                        },
                        price: "$7.50",
                    },
                    { name: { en: "Beef", es: "Res" }, price: "$7.50" },
                ],
                image: "img item menu/An Full Order of Fried Rice.webp",
            },
            {
                name: {
                    en: "Half Order of Fried Rice",
                    es: "Media Orden de Arroz Frito",
                },
                description: {
                    en: "A smaller portion of our delicious fried rice, perfect for a lighter appetite.",
                    es: "Una porción más pequeña de nuestro delicioso arroz frito, perfecto para un apetito más ligero.",
                },
                variants: [
                    { name: { en: "Pork", es: "Cerdo" }, price: "$5.50" },
                    { name: { en: "Mixed", es: "Mixto" }, price: "$6.50" },
                    { name: { en: "Shrimp", es: "Camarón" }, price: "$6.00" },
                    { name: { en: "Chicken", es: "Pollo" }, price: "$5.50" },
                    {
                        name: {
                            en: "Egg and Vegetables",
                            es: "Huevo y Vegetales",
                        },
                        price: "$5.50",
                    },
                    { name: { en: "Beef", es: "Res" }, price: "$5.50" },
                ],
                image: "img item menu/Half Order of Fried Rice.webp",
            },
            {
                name: {
                    en: "An Full Order of Canton Rice",
                    es: "Orden Completa de Arroz Cantón",
                },
                description: {
                    en: "A flavorful rice dish made with chicken, pork, beef, shrimp, and egg.",
                    es: "Un sabroso plato de arroz preparado con pollo, cerdo, res, camarón y huevo.",
                },
                price: "$9.00",
                image: "img item menu/An Full Order of Canton Rice.webp",
            },
            {
                name: {
                    en: "Half Order of Canton Rice",
                    es: "Media Orden de Arroz Cantón",
                },
                description: {
                    en: "A smaller portion of our savory canton rice, perfect for a lighter meal.",
                    es: "Una porción más pequeña de nuestro sabroso arroz cantón, perfecto para una comida más ligera.",
                },
                price: "$7.00",
                image: "img item menu/Half Order of Canton Rice.webp",
            },
            {
                name: {
                    en: "An Full Order of Leon Panmein",
                    es: "Orden Completa de Leon Panmein",
                },
                description: {
                    en: "A delicious noodle dish made with your choice of protein and eggs.",
                    es: "Un delicioso plato de fideos preparado con tu proteína a elección y huevos.",
                },
                variants: [
                    { name: { en: "Pork", es: "Cerdo" }, price: "$8.50" },
                    { name: { en: "Chicken", es: "Pollo" }, price: "$8.50" },
                    { name: { en: "Shrimp", es: "Camarón" }, price: "$9.00" },
                    { name: { en: "Mixed", es: "Mixto" }, price: "$9.50" },
                ],
                image: "img item menu/An Full Order of Leon Panmein.webp",
            },
            {
                name: {
                    en: "Half Order of Leon Pan Mein",
                    es: "Media Orden de Leon Pan Mein",
                },
                description: {
                    en: "A smaller portion of our flavorful pan mein, ideal for a lighter appetite.",
                    es: "Una porción más pequeña de nuestro sabroso pan mein, ideal para un apetito más ligero.",
                },
                variants: [
                    { name: { en: "Pork", es: "Cerdo" }, price: "$6.50" },
                    { name: { en: "Chicken", es: "Pollo" }, price: "$6.50" },
                    { name: { en: "Shrimp", es: "Camarón" }, price: "$7.00" },
                    { name: { en: "Mixed", es: "Mixto" }, price: "$7.50" },
                ],
                image: "img item menu/Half Order of Leon Pan Mein.webp",
            },
            {
                name: {
                    en: "Grilled Chicken with Fried Plantain",
                    es: "Pollo a la Parrilla con Plátano Frito",
                },
                description: {
                    en: "Juicy grilled chicken served with fried plantains.",
                    es: "Pollo jugoso a la parrilla servido con plátanos fritos.",
                },
                price: "$8.00",
                image: "img item menu/Grilled Chicken with Fried Plantain.webp",
            },
            {
                name: {
                    en: "Sweet and Sour Chicken with Fries",
                    es: "Pollo Agridulce con Papas Fritas",
                },
                description: {
                    en: "Crispy chicken tossed in a tangy sweet and sour sauce, served with a side of fries.",
                    es: "Pollo crujiente mezclado con una salsa agridulce, servido con papas fritas.",
                },
                price: "$7.50",
                image: "img item menu/Sweet and Sour Chicken with Fries.webp",
            },
            {
                name: {
                    en: "Sweet & Sour Chicken Combo",
                    es: "Combo de Pollo Agridulce",
                },
                description: {
                    en: "Crispy chicken pieces tossed in a tangy sweet and sour glaze, served with golden french fries and a side of flavorful fried rice. A satisfying combo that hits all the right notes—sweet, savory, and crunchy.",
                    es: "Trozos de pollo crujiente mezclados con un glaseado agridulce, servido con papas fritas doradas y una porción de arroz frito sabroso. Un combo satisfactorio que tiene todo lo bueno: dulce, salado y crujiente.",
                },
                price: "$8.00",
                image: "img item menu/Sweet & Sour Chicken Combo.webp",
            },
            {
                name: {
                    en: "1/2 Fried Chicken with Fries",
                    es: "1/2 Pollo Frito con Papas Fritas",
                },
                description: {
                    en: "Half of a crispy fried chicken served with a side of fries.",
                    es: "Mitad de un pollo frito crujiente servido con papas fritas.",
                },
                price: "$7.50",
                image: "img item menu/Half Fried Chicken with Fries.webp",
            },
            {
                name: {
                    en: "1/4 Fried Chicken with French Fries",
                    es: "1/4 de Pollo Frito con Papas Fritas",
                },
                description: {
                    en: "A quarter of crispy fried chicken served with golden french fries.",
                    es: "Un cuarto de pollo frito crujiente servido con papas fritas doradas.",
                },
                price: "$6.00",
                image: "img item menu/Quarter Fried Chicken with French Fries.webp",
            },
            {
                name: {
                    en: "1/4 Fried or Roasted Chicken with Potatoes and Fried Rice",
                    es: "1/4 de Pollo Frito o Asado con Papas y Arroz Frito",
                },
                description: {
                    en: "Savor our perfectly seasoned fried or roasted chicken, served with golden crispy potatoes and flavorful fried rice.",
                    es: "Disfruta de nuestro pollo frito o asado perfectamente sazonado, servido con papas doradas crujientes y arroz frito sabroso.",
                },
                price: "$8.00",
                image: "img item menu/Quarter Fried or Roasted Chicken with Potatoes and Fried Rice.webp",
            },
            {
                name: {
                    en: "1/4 of a Breaded Chicken with Fries",
                    es: "1/4 de Pollo Empanizado con Papas Fritas",
                },
                description: {
                    en: "A quarter of crispy breaded chicken served with golden fries.",
                    es: "Un cuarto de pollo empanizado crujiente servido con papas fritas doradas.",
                },
                price: "$6.50",
                image: "img item menu/Quarter of a Breaded Chicken with Fries.webp",
            },
            {
                name: {
                    en: "Chopped Steak with Fries",
                    es: "Bistec Picado con Papas Fritas",
                },
                description: {
                    en: "Tender chopped steak served with a side of crispy fries.",
                    es: "Bistec picado tierno servido con papas fritas crujientes.",
                },
                price: "$7.50",
                image: "img item menu/Chopped Steak with Fries.webp",
            },
            {
                name: {
                    en: "Grilled Pork Chop with Fried Plantain",
                    es: "Chuleta de Cerdo a la Parrilla con Plátano Frito",
                },
                description: {
                    en: "Juicy, grilled pork chop seasoned to perfection, served with fried plantains.",
                    es: "Jugosa chuleta de cerdo a la parrilla sazonada a la perfección, servida con plátanos fritos.",
                },
                price: "$8.00",
                image: "img item menu/Grilled Pork Chop with Fried Plantain.webp",
            },
            {
                name: {
                    en: "Grilled Pork Chop with Fries",
                    es: "Chuleta de Cerdo a la Parrilla con Papas Fritas",
                },
                description: {
                    en: "Juicy, perfectly grilled pork chop served with a side of golden, crispy fries. A classic, hearty dish that combines savory flavors with satisfying textures.",
                    es: "Jugosa chuleta de cerdo perfectamente asada a la parrilla servida con papas fritas doradas y crujientes. Un plato clásico y abundante que combina sabores salados con texturas satisfactorias.",
                },
                price: "$8.00",
                image: "img item menu/Grilled Pork Chop with Fries.webp",
            },
            {
                name: {
                    en: "Smoked Pork Chop with Fried Plantains",
                    es: "Chuleta de Cerdo Ahumada con Plátanos Fritos",
                },
                description: {
                    en: "Smoky, tender pork chops served with fried plantains.",
                    es: "Jugosas chuletas de cerdo ahumadas servidas con plátanos fritos.",
                },
                price: "$8.00",
                image: "img item menu/Smoked Pork Chop with Fried Plantains.webp",
            },
            {
                name: {
                    en: "Roast/Sweet and Sour Pork with Fried Plantains",
                    es: "Cerdo Asado/Agridulce con Plátanos Fritos",
                },
                description: {
                    en: "Tender roasted pork or crispy pork in sweet and sour sauce, served with fried plantains.",
                    es: "Cerdo asado tierno o cerdo crujiente en salsa agridulce, servido con plátanos fritos.",
                },
                price: "$7.50",
                image: "img item menu/Roast or Sweet and Sour Pork with Fried Plantains.webp",
            },
            {
                name: {
                    en: "Roast/Sweet and Sour Pork with Fries",
                    es: "Cerdo Asado/Agridulce con Papas Fritas",
                },
                description: {
                    en: "Tender roasted pork or crispy pork in sweet and sour sauce, served with fries.",
                    es: "Cerdo asado tierno o cerdo crujiente en salsa agridulce, servido con papas fritas.",
                },
                price: "$7.50",
                image: "img item menu/Roast or Sweet and Sour Pork with Fries.webp",
            },
            {
                name: {
                    en: "Sweet and Sour Rib with Fries",
                    es: "Costilla Agridulce con Papas Fritas",
                },
                description: {
                    en: "Juicy ribs coated in a tangy sweet and sour sauce, served with fries.",
                    es: "Costillas jugosas cubiertas con salsa agridulce, servidas con papas fritas.",
                },
                price: "$7.50",
                image: "img item menu/Sweet and Sour Rib with Fries.webp",
            },
            {
                name: {
                    en: "Chinese Style Combination Rice",
                    es: "Arroz Combinado al Estilo Chino",
                },
                description: {
                    en: "A flavorful rice dish combining chicken, pork, beef, shrimp.",
                    es: "Un sabroso plato de arroz que combina pollo, cerdo, res y camarón.",
                },
                price: "$9.00",
                image: "img item menu/Chinese Style Combination Rice.webp",
            },
            {
                name: {
                    en: "Chinese Style Combination Rice",
                    es: "Arroz Combinado al Estilo Chino",
                },
                description: {
                    en: "A flavorful rice dish combining chicken, pork, beef, shrimp, and choy sum.",
                    es: "Un sabroso plato de arroz que combina pollo, cerdo, res, camarón y choy sum.",
                },
                price: "$9.00",
                image: "img item menu/Chinese Style Combination Rice2.webp",
            },
        ],
    },
    {
        category: {
            en: "SEAFOODS",
            es: "MARISCOS",
        },
        description: {
            en: "Savor the fresh flavors of the ocean with our delicious seafood dishes. From succulent prawns to flavorful fish, each dish is expertly prepared to highlight the natural taste of the sea. Enjoy a variety of options, perfectly seasoned and cooked to perfection.",
            es: "Saborea los frescos sabores del océano con nuestros deliciosos platos de mariscos. Desde gambas suculentas hasta pescados llenos de sabor, cada plato está preparado con maestría para resaltar el gusto natural del mar. Disfruta de una variedad de opciones, perfectamente sazonadas y cocinadas a la perfección.",
        },
        items: [
            {
                name: {
                    en: "Garlic Prawn with Fried Plantain",
                    es: "Gambas al Ajo con Plátano Frito",
                },
                description: {
                    en: "Succulent prawns sautéed in a rich, aromatic garlic sauce, paired with fried plantains.<br><br>Available with or without shells.",
                    es: "Gambas suculentas salteadas en una rica salsa de ajo aromática, acompañadas de plátanos fritos.<br><br>Disponible con o sin cáscara.",
                },
                price: "$13.50",
                image: "img item menu/Garlic Prawn with Fried Plantain.webp",
            },
            {
                name: {
                    en: "Butter Prawn",
                    es: "Gambas a la Mantequilla",
                },
                description: {
                    en: "Succulent prawns sautéed in a rich, buttery sauce, served with rice and a fresh salad of tomato, lettuce, carrot, and purple cabbage. <br><br>Available with or without shells.",
                    es: "Gambas suculentas salteadas en una rica salsa de mantequilla, servidas con arroz y una ensalada fresca de tomate, lechuga, zanahoria y repollo morado. <br><br>Disponible con o sin cáscara.",
                },
                price: "$13.50",
                image: "img item menu/Butter Prawn.webp",
            },
            {
                name: {
                    en: "Garlic Octopus with Fries",
                    es: "Pulpo al Ajo con Papas Fritas",
                },
                description: {
                    en: "Tender octopus cooked in a flavorful garlic sauce, served with fries.",
                    es: "Pulpo tierno cocinado en una sabrosa salsa de ajo, servido con papas fritas.",
                },
                price: "$9.75",
                image: "img item menu/Garlic Octopus with Fries.webp",
            },
            {
                name: {
                    en: "Garlic Octopus with Fried Plantains",
                    es: "Pulpo al Ajo con Plátanos Fritos",
                },
                description: {
                    en: "Tender octopus cooked in a garlic sauce, served with sweet fried plantains.",
                    es: "Pulpo tierno cocinado en salsa de ajo, servido con plátanos fritos dulces.",
                },
                price: "$9.75",
                image: "img item menu/Garlic Octopus with Fried Plantains.webp",
            },
            {
                name: {
                    en: "Garlic Shrimp with Fried Plantain",
                    es: "Camarones al Ajo con Plátano Frito",
                },
                description: {
                    en: "Succulent shrimp sautéed in a rich, aromatic garlic sauce, served alongside fried plantains.",
                    es: "Camarones suculentos salteados en una rica salsa de ajo aromática, servidos con plátanos fritos.",
                },
                price: "$9.75",
                image: "img item menu/Garlic Shrimp with Fried Plantain.webp",
            },
            {
                name: {
                    en: "Garlic Shrimp with Fries",
                    es: "Camarones al Ajo con Papas Fritas",
                },
                description: {
                    en: "Tender shrimp cooked in a garlic sauce, served with fried plantains.",
                    es: "Camarones tiernos cocinados en salsa de ajo, servidos con plátanos fritos.",
                },
                price: "$9.75",
                image: "img item menu/Garlic Shrimp with Fries.webp",
            },
            {
                name: {
                    en: "Garlic Shrimp with Rice",
                    es: "Camarones al Ajo con Arroz",
                },
                description: {
                    en: "Juicy shrimp cooked in a garlic sauce, served with steamed rice.",
                    es: "Camarones jugosos cocinados en salsa de ajo, servidos con arroz al vapor.",
                },
                price: "$9.75",
                image: "img item menu/Garlic Shrimp with Rice.webp",
            },
            {
                name: {
                    en: "Garlic Shrimp with Fried Rice",
                    es: "Camarones al Ajo con Arroz Frito",
                },
                description: {
                    en: "Juicy shrimp cooked in a garlic sauce, served with flavorful fried rice.",
                    es: "Camarones jugosos cocinados en salsa de ajo, servidos con arroz frito sabroso.",
                },
                price: "$9.75",
                image: "img item menu/Garlic Shrimp with Fried Rice.webp",
            },
            {
                name: {
                    en: "Creole Shrimp with Fried Plantain",
                    es: "Camarones a la Criolla con Plátano Frito",
                },
                description: {
                    en: "Shrimp cooked in a spicy Creole sauce, served with fried plantains.",
                    es: "Camarones cocinados en salsa criolla picante, servidos con plátanos fritos.",
                },
                price: "$9.75",
                image: "img item menu/Creole Shrimp with Fried Plantain.webp",
            },
            {
                name: {
                    en: "Butter Shrimp with Fried Plantain",
                    es: "Camarones a la Mantequilla con Plátano Frito",
                },
                description: {
                    en: "Shrimp cooked in a rich buttery sauce, served with sweet fried plantains.",
                    es: "Camarones cocinados en rica salsa de mantequilla, servidos con plátanos fritos dulces.",
                },
                price: "$9.75",
                image: "img item menu/Butter Shrimp with Fried Plantain.webp",
            },
            {
                name: {
                    en: "Breaded Shrimp with Fries",
                    es: "Camarones Empanizados con Papas Fritas",
                },
                description: {
                    en: "Crispy breaded shrimp served with golden fries.",
                    es: "Camarones empanizados crujientes servidos con papas fritas doradas.",
                },
                price: "$9.75",
                image: "img item menu/Breaded Shrimp with Fries.webp",
            },
            {
                name: {
                    en: "Breaded Shrimp with Fried Plantain",
                    es: "Camarones Empanizados con Plátano Frito",
                },
                description: {
                    en: "Crispy breaded shrimp served with sweet fried plantains.",
                    es: "Camarones empanizados crujientes servidos con plátanos fritos dulces.",
                },
                price: "$9.75",
                image: "img item menu/Breaded Shrimp with Fried Plantain.webp",
            },
            {
                name: {
                    en: "Creole Oyster with Rice",
                    es: "Ostras a la Criolla con Arroz",
                },
                description: {
                    en: "Fresh oysters cooked in a spicy Creole sauce, served with rice.",
                    es: "Ostras frescas cocinadas en salsa criolla picante, servidas con arroz.",
                },
                price: "$9.75",
                image: "img item menu/Creole Oyster with Rice.webp",
            },
            {
                name: {
                    en: "Garlic Oyster with Fries",
                    es: "Ostras al Ajo con Papas Fritas",
                },
                description: {
                    en: "Fresh oysters cooked in a garlic sauce, served with fries.",
                    es: "Ostras frescas cocinadas en salsa de ajo, servidas con papas fritas.",
                },
                price: "$9.75",
                image: "img item menu/Garlic Oyster with Fries.webp",
            },
            {
                name: {
                    en: "Garlic Snapper with Fries",
                    es: "Pargo al Ajo con Papas Fritas",
                },
                description: {
                    en: "Fresh snapper fillet cooked in a garlic sauce, served with fries.",
                    es: "Filete de pargo fresco cocinado en salsa de ajo, servido con papas fritas.",
                },
                price: "$9.75",
                image: "img item menu/Garlic Snapper with Fries.webp",
            },
            {
                name: {
                    en: "Fried Snapper with Rice",
                    es: "Pargo Frito con Arroz",
                },
                description: {
                    en: "Crispy fried snapper served with steamed rice.",
                    es: "Pargo frito crujiente servido con arroz al vapor.",
                },
                price: "$9.75",
                image: "img item menu/Fried Snapper with Rice.webp",
            },
            {
                name: {
                    en: "Fried Snapper with Fried Rice",
                    es: "Pargo Frito con Arroz Frito",
                },
                description: {
                    en: "Crispy fried snapper served with flavorful fried rice.",
                    es: "Pargo frito crujiente servido con arroz frito sabroso.",
                },
                price: "$9.75",
                image: "img item menu/Fried Snapper with Fried Rice.webp",
            },
            {
                name: {
                    en: "Garlic Sea Bass Fillet with French Fries",
                    es: "Filete de Corvina al Ajo con Papas Fritas",
                },
                description: {
                    en: "Tender sea bass fillet cooked in a garlic sauce, served with fries.",
                    es: "Filete de corvina tierno cocinado en salsa de ajo, servido con papas fritas.",
                },
                price: "$9.75",
                image: "img item menu/Garlic Sea Bass Fillet with French Fries.webp",
            },
            {
                name: {
                    en: "Garlic Sea Bass Fillet with Fried Plantain",
                    es: "Filete de Corvina al Ajo con Plátano Frito",
                },
                description: {
                    en: "Tender sea bass fillet cooked in a garlic sauce, served with fried plantains.",
                    es: "Filete de corvina tierno cocinado en salsa de ajo, servido con plátanos fritos.",
                },
                price: "$9.75",
                image: "img item menu/Garlic Sea Bass Fillet with Fried Plantain.webp",
            },
            {
                name: {
                    en: "Garlic Sea Bass Fillet with Salad",
                    es: "Filete de Corvina al Ajo con Ensalada",
                },
                description: {
                    en: "Tender sea bass fillet cooked in a garlic sauce, served with a fresh salad.",
                    es: "Filete de corvina tierno cocinado en salsa de ajo, servido con una ensalada fresca.",
                },
                price: "$9.75",
                image: "img item menu/Garlic Sea Bass Fillet with Salad.webp",
            },
            {
                name: {
                    en: "Grilled Sea Bass with White Rice",
                    es: "Corvina a la Parrilla con Arroz Blanco",
                },
                description: {
                    en: "Grilled sea bass fillet served with white rice.",
                    es: "Filete de corvina a la parrilla servido con arroz blanco.",
                },
                price: "$9.75",
                image: "img item menu/Grilled Sea Bass with White Rice.webp",
            },
            {
                name: {
                    en: "Creole Sea Bass Fillet with Fries",
                    es: "Filete de Corvina a la Criolla con Papas Fritas",
                },
                description: {
                    en: "Tender sea bass fillet seasoned with bold Creole spices, pan-seared to perfection, and served with a side of golden, crispy fries.",
                    es: "Filete de corvina tierno sazonado con especias criollas, sellado a la perfección y servido con papas fritas doradas y crujientes.",
                },
                price: "$9.75",
                image: "img item menu/Creole Sea Bass Fillet with Fries.webp",
            },
            {
                name: {
                    en: "Creole Sea Bass Fillet with Fried Plantain",
                    es: "Filete de Corvina a la Criolla con Plátano Frito",
                },
                description: {
                    en: "Creole-seasoned sea bass fillet served with fried plantains.",
                    es: "Filete de corvina sazonado al estilo criollo servido con plátanos fritos.",
                },
                price: "$9.75",
                image: "img item menu/Creole Sea Bass Fillet with Fried Plantain.webp",
            },
            {
                name: {
                    en: "Breaded School Shark Fillet with Fries",
                    es: "Filete de Cazón Empanizado con Papas Fritas",
                },
                description: {
                    en: "Crispy breaded shark fillet served with golden fries.",
                    es: "Filete de cazón empanizado crujiente servido con papas fritas doradas.",
                },
                price: "$6.00",
                image: "img item menu/Breaded School Shark Fillet with Fries.webp",
            },
            {
                name: {
                    en: "Garlic Squid with Fried Plantain",
                    es: "Calamares al Ajo con Plátano Frito",
                },
                description: {
                    en: "Tender squid cooked in a garlic sauce, served with sweet fried plantains.",
                    es: "Calamares tiernos cocinados en salsa de ajo, servidos con plátanos fritos dulces.",
                },
                price: "$9.75",
                image: "img item menu/Garlic Squid with Fried Plantain.webp",
            },
        ],
    },
    {
        category: {
            en: "SOUPS",
            es: "SOPAS",
        },
        description: {
            en: "Warm, comforting, and full of flavor—our selection of authentic Chinese soups is the perfect way to start your meal. Each bowl is crafted with fresh ingredients and traditional seasonings, offering a rich and satisfying experience with every sip.",
            es: "Cálidas, reconfortantes y llenas de sabor—nuestra selección de sopas chinas auténticas es la manera perfecta de comenzar tu comida. Cada tazón está elaborado con ingredientes frescos y condimentos tradicionales, ofreciendo una experiencia rica y satisfactoria con cada sorbo.",
        },
        items: [
            {
                name: {
                    en: "Mayor Aleman Soup",
                    es: "Sopa Mayor Alemán",
                },
                description: {
                    en: "A hearty soup made with chicken, pork, shrimp, egg, vegetables, and noodles.",
                    es: "Una sopa sustanciosa hecha con pollo, cerdo, camarones, huevo, vegetales y fideos.",
                },
                price: "$5.00",
                image: "img item menu/Mayor Aleman Soup.webp",
            },
            {
                name: {
                    en: "Wonton Soup",
                    es: "Sopa de Wonton",
                },
                description: {
                    en: "A comforting soup featuring chicken, pork, a wonton, and noodles.",
                    es: "Una sopa reconfortante con pollo, cerdo, wonton y fideos.",
                },
                price: "$4.00",
                image: "img item menu/Wonton Soup.webp",
            },
            {
                name: {
                    en: "Chinese Style Noodle Soup",
                    es: "Sopa de Fideos al Estilo Chino",
                },
                description: {
                    en: "A traditional soup made with flat rice noodles, shrimp, chicken, pork, and beef.",
                    es: "Una sopa tradicional hecha con fideos de arroz planos, camarones, pollo, cerdo y res.",
                },
                price: "$6.00",
                image: "img item menu/Chinese Style Noodle Soup.webp",
            },
            {
                name: {
                    en: "Combination Soup",
                    es: "Sopa Combinada",
                },
                description: {
                    en: "A hearty and comforting soup packed with a delicious mix of flavors and textures. <br><br>This dish features a savory broth filled with tender chicken, pork, shrimp, fresh vegetables, and noodles.",
                    es: "Una sopa sustanciosa y reconfortante llena de una deliciosa mezcla de sabores y texturas. <br><br>Este plato presenta un caldo sabroso con pollo tierno, cerdo, camarones, vegetales frescos y fideos.",
                },
                price: "$5.50",
                image: "img item menu/Combination Soup.webp",
            },
            {
                name: {
                    en: "Wat Kay Mein Soup",
                    es: "Sopa Wat Kay Mein",
                },
                description: {
                    en: "A hearty chicken noodle soup with tender chicken, fresh vegetables, and egg noodles in a flavorful broth, topped with green onions.",
                    es: "Una sustanciosa sopa de pollo con fideos que incluye pollo tierno, vegetales frescos y fideos de huevo en un caldo sabroso, coronado con cebollines.",
                },
                price: "$5.00",
                image: "img item menu/Wat Kay MeinSoup.webp",
            },
            {
                name: {
                    en: "Seafood Soup",
                    es: "Sopa de Mariscos",
                },
                description: {
                    en: "A flavorful mix of clams, shrimp, fish, and squid in a rich, aromatic broth. <br><br>Seafood selection varies based on daily availability.",
                    es: "Una mezcla sabrosa de almejas, camarones, pescado y calamares en un caldo rico y aromático. <br><br>La selección de mariscos varía según disponibilidad diaria.",
                },
                price: "$6.00",
                image: "img item menu/Seafood Soup.webp",
            },
            {
                name: {
                    en: "Shrimp Soup",
                    es: "Sopa de Camarones",
                },
                description: {
                    en: "A savory and flavorful shrimp soup, perfect for seafood lovers.",
                    es: "Una sopa de camarones sabrosa y llena de sabor, perfecta para amantes de los mariscos.",
                },
                price: "$5.50",
                image: "img item menu/Shrimp Soup.webp",
            },
            {
                name: {
                    en: "Consommé",
                    es: "Consomé",
                },
                description: {
                    en: "A light and flavorful broth.",
                    es: "Un caldo ligero y sabroso.",
                },
                variants: [
                    {
                        name: { en: "Shrimp", es: "Camarón" },
                        price: "$2.50",
                    },
                    {
                        name: { en: "Chicken", es: "Pollo" },
                        price: "$2.50",
                    },
                ],
                image: "img item menu/Consommé.webp",
            },
        ],
    },
    {
        category: {
            en: "DESSERT",
            es: "POSTRES",
        },
        description: {
            en: "End your meal on a sweet note with our delightful selection of desserts. From rich, indulgent treats to light and refreshing options, each dessert is crafted to satisfy your cravings and complete your dining experience.",
            es: "Termina tu comida con un toque dulce con nuestra encantadora selección de postres. Desde ricos y indulgentes manjares hasta opciones ligeras y refrescantes, cada postre está elaborado para satisfacer tus antojos y completar tu experiencia culinaria.",
        },
        items: [
            {
                name: {
                    en: "Caramel Custard",
                    es: "Flan de Caramelo",
                },
                description: {
                    en: "A creamy, smooth custard topped with a layer of rich caramel.",
                    es: "Un cremoso y suave flan cubierto con una capa de rico caramelo.",
                },
                price: "$2.00",
                image: "img item menu/Caramel Custard.webp",
            },
        ],
    },
    {
        category: {
            en: "BREAKFASTS",
            es: "DESAYUNOS",
        },
        description: {
            en: "Start your day right with our delicious breakfast selections! From hearty classics to light and healthy options, we offer a variety of dishes to satisfy every craving. Enjoy fresh ingredients, rich flavors, and the perfect balance to fuel your morning.",
            es: "¡Comienza tu día con nuestras deliciosas opciones de desayuno! Desde clásicos sustanciosos hasta opciones ligeras y saludables, ofrecemos una variedad de platos para satisfacer todos los antojos. Disfruta de ingredientes frescos, sabores ricos y el equilibrio perfecto para energizar tu mañana.",
        },
        items: [
            {
                name: {
                    en: "Chopped Steak with Tortilla",
                    es: "Bistec Picado con Tortilla",
                },
                description: {
                    en: "Tender chopped steak served with warm tortillas.",
                    es: "Bistec picado tierno servido con tortillas calientes.",
                },
                price: "$5.00",
                image: "img item menu/Chopped Steak with Tortilla.webp",
            },
            {
                name: {
                    en: "Chopped Steak with Fries",
                    es: "Bistec Picado con Papas Fritas",
                },
                description: {
                    en: "Tender chopped steak served with fries.",
                    es: "Bistec picado tierno servido con papas fritas.",
                },
                price: "$5.00",
                image: "img item menu/Chopped Steak with Fries.webp",
            },
            {
                name: {
                    en: "Stewed Sausage with Fried Plantain",
                    es: "Salchicha Guisada con Plátano Frito",
                },
                description: {
                    en: "Flavorful stewed sausage served with sweet fried plantains.",
                    es: "Salchicha guisada sabrosa servida con plátanos fritos dulces.",
                },
                price: "$4.00",
                image: "img item menu/Stewed Sausage with Fried Plantain.webp",
            },
            {
                name: {
                    en: "Stewed Sausage with Fried Dough",
                    es: "Salchicha Guisada con Masa Frita",
                },
                description: {
                    en: "Flavorful stewed sausage served with fried dough.",
                    es: "Salchicha guisada sabrosa servida con masa frita.",
                },
                price: "$4.00",
                image: "img item menu/Stewed Sausage with Fried Dough.webp",
            },
            {
                name: {
                    en: "Scrambled Eggs with Fries",
                    es: "Huevos Revueltos con Papas Fritas",
                },
                description: {
                    en: "Fluffy, perfectly scrambled eggs served with a side of golden, crispy fries.",
                    es: "Huevos revueltos esponjosos y perfectos servidos con papas fritas doradas y crujientes.",
                },
                price: "$4.00",
                image: "img item menu/Scrambled Eggs with Fries.webp",
            },
            {
                name: {
                    en: "Fried Tortilla with Fried Egg",
                    es: "Tortilla Frita con Huevo Frito",
                },
                description: {
                    en: "Golden fried tortilla served with a delicious fried egg.",
                    es: "Tortilla frita dorada servida con un delicioso huevo frito.",
                },
                price: "$3.50",
                image: "img item menu/Fried Tortilla with Fried Egg.webp",
            },
            {
                name: {
                    en: "Fried Chicken with Fried Plantains",
                    es: "Pollo Frito con Plátanos Fritos",
                },
                description: {
                    en: "Savor our mouthwatering fried chicken, perfectly seasoned and fried to golden perfection, paired with crispy fried plantains.",
                    es: "Saborea nuestro pollo frito delicioso, perfectamente sazonado y frito hasta lograr un dorado perfecto, acompañado de plátanos fritos crujientes.",
                },
                price: "$4.50",
                image: "img item menu/Fried Chicken with Fried Plantains.webp",
            },
            {
                name: {
                    en: "Coffee with Milk",
                    es: "Café con Leche",
                },
                description: {
                    en: "Indulge in the rich aroma and bold flavors of our freshly brewed coffee.",
                    es: "Disfruta del rico aroma y sabores intensos de nuestro café recién preparado.",
                },
                price: "$0.75",
                image: "img item menu/Coffee with Milk.webp",
            },
            {
                name: {
                    en: "Black Coffee",
                    es: "Café Negro",
                },
                description: {
                    en: "Indulge in the rich aroma and bold flavors of our freshly brewed coffee.",
                    es: "Disfruta del rico aroma y sabores intensos de nuestro café recién preparado.",
                },
                price: "$0.60",
                image: "img item menu/Black Coffee.webp",
            },
            {
                name: {
                    en: "Black Tea or Cinnamon Tea",
                    es: "Té Negro o Té de Canela",
                },
                description: {
                    en: "Choose between the bold, robust flavor of black tea or the soothing warmth of cinnamon tea. Perfect for any time of the day, whether you need energy or comfort.",
                    es: "Elige entre el sabor intenso y robusto del té negro o el reconfortante calor del té de canela. Perfecto para cualquier momento del día, ya sea que necesites energía o consuelo.",
                },
                variants: [
                    {
                        name: { en: "With milk", es: "Con leche" },
                        price: "$0.75",
                    },
                    {
                        name: { en: "Without milk", es: "Sin leche" },
                        price: "$0.60",
                    },
                ],
                image: "img item menu/Black Tea or Cinnamon Tea.webp",
            },
        ],
    },
    {
        category: {
            en: "TRAYS",
            es: "BANDEJAS",
        },
        description: {
            en: "Perfect for sharing, our trays are packed with generous portions of delicious, freshly prepared dishes. Whether for family gatherings, special occasions, or simply a feast with friends, enjoy a variety of flavors served in convenient, ready-to-enjoy portions.",
            es: "Perfectas para compartir, nuestras bandejas contienen generosas porciones de deliciosos platillos recién preparados. Ya sea para reuniones familiares, ocasiones especiales o simplemente una fiesta con amigos, disfruta de una variedad de sabores servidos en porciones convenientes y listas para disfrutar.",
        },
        items: [
            {
                name: {
                    en: "Fried Rice Tray (For 8-10 People)",
                    es: "Bandeja de Arroz Frito (Para 8-10 Personas)",
                },
                description: {
                    en: "A large tray of fried rice, perfect for sharing. Available in chicken, pork, shrimp, mixed, or beef.",
                    es: "Una bandeja grande de arroz frito, perfecta para compartir. Disponible con pollo, cerdo, camarón, mixto o res.",
                },
                price: "$22.00",
                image: "img item menu/Fried Rice Tray (For 8-10 People).webp",
            },
            {
                name: {
                    en: "Fried Rice Tray<br> (For 12-18 People)",
                    es: "Bandeja de Arroz Frito<br> (Para 12-18 Personas)",
                },
                description: {
                    en: "A larger tray of fried rice, ideal for bigger gatherings. Available in chicken, pork, shrimp, mixed, or beef.",
                    es: "Una bandeja más grande de arroz frito, ideal para reuniones más numerosas. Disponible con pollo, cerdo, camarón, mixto o res.",
                },
                price: "$30.00",
                image: "img item menu/Fried Rice Tray (For 12-18 People).webp",
            },
            {
                name: {
                    en: "Fried Rice Tray<br> (For 18-25 People)",
                    es: "Bandeja de Arroz Frito<br> (Para 18-25 Personas)",
                },
                description: {
                    en: "A massive tray of fried rice, perfect for large events. Available in chicken, pork, shrimp, mixed, or beef.",
                    es: "Una bandeja enorme de arroz frito, perfecta para eventos grandes. Disponible con pollo, cerdo, camarón, mixto o res.",
                },
                price: "$37.00",
                image: "img item menu/Fried Rice Tray (For 18-25 People).webp",
            },
        ],
    },
];

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

function renderMenu() {
    const menuGrid = document.getElementById("menuGrid");
    menuGrid.innerHTML = ""; // Limpia el contenido antes de volver a renderizar

    menuItems.forEach((category) => {
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
        es: "Todo"
    },
    appetizers: {
        en: "Appetizers",
        es: "Entradas"
    },
    mains: {
        en: "Mains",
        es: "Principales"
    },
    "sea foods": {
        en: "Sea foods",
        es: "Mariscos"
    },
    soups: {
        en: "Soups",
        es: "Sopas"
    },
    dessert: {
        en: "Dessert",
        es: "Postre"
    },
    breakfasts: {
        en: "Breakfasts",
        es: "Desayunos"
    },
    trays: {
        en: "Trays",
        es: "Bandejas"
    }
};
//
//
// Función para actualizar los textos de los filtros
//
//
function updateFilterButtons() {
    document.querySelectorAll('.filter-btn').forEach(button => {
        const category = button.dataset.category;
        button.textContent = filterTranslations[category][currentLang];
    });
}



// 3. Función de filtrado adaptada a tu estructura de datos
function filterMenuItems(category = 'all') {
    try {
        if (!Array.isArray(menuItems)) {
            console.error('menuItems no es un array válido');
            return;
        }

        const itemsToShow = category === 'all' 
            ? menuItems 
            : menuItems.filter(item => {
                // Para tu estructura de datos, necesitamos acceder a item.category.en/es
                const itemCategory = item.category 
                    ? item.category.en.toLowerCase().trim() 
                    : 'uncategorized';
                
                const filterCategory = category.toLowerCase().trim();

                // Mapeo de equivalencias
                const categoryEquivalents = {
                    'sea foods': ['sea foods', 'seafoods', 'mariscos'],
                    'appetizers': ['appetizers', 'entradas'],
                    'mains': ['mains', 'platos principales'],
                    'trays': ['trays', 'bandejas']
                };

                if (categoryEquivalents[filterCategory]) {
                    return categoryEquivalents[filterCategory].some(equiv => 
                        equiv === itemCategory
                    );
                }

                return itemCategory === filterCategory;
            });

        renderMenu(itemsToShow);
    } catch (error) {
        console.error('Error en filterMenuItems:', error);
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
        document.querySelector("#langToggle span").textContent = currentLang.toUpperCase();
        document.getElementById("langToggle").classList.toggle("active");
        
        updateHeroContent();
        updateFilterButtons();
        updateHeroContent(document.querySelector(".filter-btn.active").dataset.category);
    });

    // Botones de filtro (solo este bloque)
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            filterMenuItems(this.dataset.category);
        });
    });
}

// 5. Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Asegúrate de que menuItems está definido antes de esto
    updateFilterButtons();
    filterMenuItems("all");
    setupEventListeners();
});




