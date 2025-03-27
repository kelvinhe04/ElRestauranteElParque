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
//
// Quitar active class y ponerlo denuevo //
//
//
//

function handleFilterClick(btn) {
    filterBtns.forEach(function (b) {
        b.classList.remove("active");
    });
    btn.classList.add("active");
    var category = btn.dataset.category;
    filterMenuItems(category);
}

filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        handleFilterClick(btn);
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
const scrollThreshold = 1; // minimum scroll distance to trigger filter visibility
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
        category: "APPETIZERS",
        description:
            "Kick off your meal with our selection of shareable starters, designed to awaken your taste buds and bring people together. Perfect for pairing with drinks or enjoying as a light bite.",
        items: [
            {
                name: "Fried Wonton",
                description:
                    "Crispy, golden wonton strips - light, crunchy, and perfect for dipping. <br><br> Sweet and sour sauce available for an extra $1.00.<br><br> Served with 12 pieces.",
                price: "$3.00",
                image: "img item menu/Fried Wonton.webp",
            },
            {
                name: "Spring Rolls",
                description:
                    "Crispy, golden rolls stuffed with a refreshing mix of shredded carrots, cabbage, and your choice of protein. <br><br>Sweet and sour sauce available for an extra $1.00.<br><br>Served with 9 pieces.",
                variants: [
                    { name: "Chicken and pork", price: "$7.00" },
                    { name: "Chicken", price: "$7.00" },
                    { name: "Pork", price: "$7.00" },
                    { name: "Shrimp", price: "$8.00" },
                ],
                image: "img item menu/Spring Rolls.webp",
            },
            {
                name: "Stuffed Wonton",
                description:
                    "A classic favorite! Golden wontons stuffed with your choice of savory fillings. Each bite is a perfect blend of crunch and flavor. <br><br>Sweet and sour sauce available for an extra $1.00. <br><br>Served with 9 pieces.",
                variants: [
                    { name: "Pork", price: "$7.00" },
                    { name: "Chicken", price: "$7.00" },
                    { name: "Shrimp", price: "$8.00" },
                ],
                image: "img item menu/Stuffed Wonton.webp",
            },
            {
                name: "Sweet and Sour Sauce",
                description:
                    "A tangy, slightly sweet dipping sauce that pairs perfectly with fried appetizers.",
                price: "$1.00",
                image: "img item menu/Sweet and Sour Sauce.webp",
            },
            {
                name: "Fried Plantains",
                description:
                    "Golden and crispy on the edges and inside - these fried plantains make the perfect snack or side dish.",
                price: "$3.00",
                image: "img item menu/Fried Plantains.webp",
            },
            {
                name: "French Fries",
                description:
                    "Crispy, golden, and irresistible. A classic side that everyone loves.",
                price: "$3.00",
                image: "img item menu/French Fries.webp",
            },
            {
                name: "Breaded Shrimp",
                description:
                    "Crispy, golden-breaded shrimp - perfect as a snack or appetizer.",
                price: "$10.50",
                image: "img item menu/Breaded Shrimp.webp",
            },
            {
                name: "Shrimp with Vegetables",
                description:
                    "Succulent shrimp sautéed with a colorful medley of fresh vegetables. Light, flavorful, and perfect for sharing.",
                price: "$12.00",
                image: "img item menu/Shrimp with Vegetables.webp",
            },
            {
                name: "Prawn with Vegetables",
                description:
                    "Succulent prawns paired with a vibrant mix of fresh, crisp vegetables, stir-fried to perfection and seasoned with aromatic spices.",
                price: "$16.00",
                image: "img item menu/Prawn with Vegetables.webp",
            },
            {
                name: "Clams in Garlic Sauce or Black Bean Sauce",
                description:
                    "Fresh clams cooked in a rich garlic or black bean sauce, offering a savory and aromatic flavor.",
                price: "$8.00",
                image: "img item menu/Clams in Garlic Sauce or Black Bean Sauce.webp",
            },
            {
                name: "Chopped Steak",
                description:
                    "Tender, juicy chopped steak, seasoned to perfection and cooked just right.",
                price: "$11.00",
                image: "img item menu/Chopped Steak.webp",
            },
            {
                name: "Sweet & Sour Chicken",
                description:
                    "Crispy chicken pieces coated in a tangy sweet and sour glaze.",
                price: "$9.00",
                image: "img item menu/Sweet & Sour Chicken.webp",
            },
            {
                name: "Roast or Sweet & Sour Pork",
                description:
                    "Crispy chicken pieces coated in a tangy sweet and sour glaze.",
                price: "$9.00",
                image: "img item menu/Roast or Sweet & Sour Pork.webp",
            },
            {
                name: "Lettuce & Tomato Salad",
                description: "A fresh mix of greens, tomatoes and cucumbers.",
                price: "$4.00",
                image: "img item menu/Lettuce & Tomato Salad.webp",
            },
            {
                name: "Foo Young",
                description:
                    "A fluffy and satisfying omelet filled with fresh vegetables and your choice of protein.",
                variants: [
                    { name: "Pork", price: "$5.50" },
                    { name: "Chicken", price: "$5.50" },
                    { name: "Shrimp", price: "$6.00" },
                    { name: "Mixed", price: "$6.50" },
                ],
                image: "img item menu/Foo Young.webp",
            },
            {
                name: "A Bowl of Vegetable Fried Rice",
                description:
                    "Light and flavorful fried rice made with fresh vegetables and your choice of protein.",
                variants: [
                    { name: "Pork", price: "$2.50" },
                    { name: "Vegetarian", price: "$1.50" },
                    { name: "Mixed", price: "$3.00" },
                    { name: "Shrimp", price: "$2.75" },
                    { name: "Chicken", price: "$2.50" },
                    { name: "Beef", price: "$2.50" },
                ],
                image: "img item menu/A Bowl of Vegetable Fried Rice.webp",
            },
            {
                name: "Leon Pan Wanton",
                description:
                    "Soft, tender wontons filled with savory meat or chicken.",
                price: "$8.50",
                image: "img item menu/Leon Pan Wanton.webp",
            },
            {
                name: "Boiled Chicken with Ginger",
                description:
                    "Tender boiled chicken infused with aromatic ginger.",
                price: "$9.00",
                image: "img item menu/Boiled Chicken with Ginger.webp",
            },
            {
                name: "Fried or Roasted Whole Chicken",
                description:
                    "A whole chicken, fried to crispy perfection or roasted for a juicy, tender bite.",
                price: "$10.50",
                image: "img item menu/Fried or Roasted Whole Chicken.webp",
            },
            {
                name: "1/2 Fried/Roasted Chicken",
                description:
                    "Enjoy a generous portion of our perfectly cooked chicken, either golden-fried to crispy perfection or slow-roasted for juicy, tender flavor.",
                price: "$5.75",
                image: "img item menu/Half Fried or Roasted Chicken.webp",
            },
            {
                name: "1/4 Fried/Roasted Chicken",
                description:
                    "Enjoy a flavorful serving of our chicken—choose between golden-fried for a crispy bite or slow-roasted for tender, juicy perfection, in a perfectly portioned quarter size.",
                price: "$3.25",
                image: "img item menu/Quarter Fried or Roasted Chicken.webp",
            },
            {
                name: "Garlic Lobster",
                description:
                    "Succulent lobster cooked in a rich garlic sauce. Served with your choice of fries, fried plantain, or rice.",
                price: "$18.50",
                image: "img item menu/Garlic Lobster.webp",
            },
        ],
    },
    {
        category: "MAINS",
        description:
            "Our main dishes are crafted with care, combining fresh ingredients and bold flavors to create unforgettable meals.",
        items: [
            {
                name: "An Full Order of Chow Mein",
                description:
                    "Crispy noodles topped with a savory mix of stir-fried vegetables and your choice of protein. A delightful contrast of textures and flavors.",
                variants: [
                    { name: "Pork", price: "$8.00" },
                    { name: "Vegetarian", price: "$8.00" },
                    { name: "Mixed", price: "$9.00" },
                    { name: "Shrimp", price: "$8.50" },
                    { name: "Chicken", price: "$8.00" },
                    { name: "Beef", price: "$8.00" },
                ],
                image: "img item menu/An Full Order of Chow Mein.webp",
            },
            {
                name: "Half Order of Chow Mein",
                description:
                    "A smaller portion of our classic chow mein, perfect for a lighter meal.",
                variants: [
                    { name: "Pork", price: "$6.00" },
                    { name: "Vegetarian", price: "$6.00" },
                    { name: "Mixed", price: "$7.00" },
                    { name: "Shrimp", price: "$6.50" },
                    { name: "Chicken", price: "$6.00" },
                    { name: "Beef", price: "$6.00" },
                ],
                image: "img item menu/Half Order of Chow Mein.webp",
            },
            {
                name: "An Full Order of Chop Suey",
                description:
                    "A hearty stir-fry of fresh vegetables and your choice of protein.",
                variants: [
                    { name: "Pork", price: "$8.50" },
                    { name: "Mixed", price: "$9.50" },
                    { name: "Shrimp", price: "$9.00" },
                    { name: "Chicken", price: "$8.50" },
                    { name: "Beef", price: "$8.50" },
                ],
                image: "img item menu/An Full Order of Chop Suey.webp",
            },
            {
                name: "Half Order of Chop Suey",
                description:
                    "A smaller portion of our flavorful chop suey, ideal for a lighter appetite.",
                variants: [
                    { name: "Pork", price: "$6.50" },
                    { name: "Mixed", price: "$7.50" },
                    { name: "Shrimp", price: "$7.00" },
                    { name: "Chicken", price: "$6.50" },
                    { name: "Beef", price: "$6.50" },
                ],
                image: "img item menu/Half Order of Chop Suey.webp",
            },
            {
                name: "An Full Order of Chow Fun",
                description:
                    "Wide, flat rice noodles stir-fried with fresh vegetables and your choice of protein.",
                variants: [
                    { name: "Pork", price: "$9.25" },
                    { name: "Vegetarian", price: "$9.25" },
                    { name: "Mixed", price: "$10.25" },
                    { name: "Shrimp", price: "$9.75" },
                    { name: "Chicken", price: "$9.25" },
                ],
                image: "img item menu/An Full Order of Chow Fun.webp",
            },
            {
                name: "Half Order of Chow Fun",
                description:
                    "A smaller portion of our savory chow fun, perfect for a lighter meal.",
                variants: [
                    { name: "Pork", price: "$7.25" },
                    { name: "Vegetarian", price: "$7.25" },
                    { name: "Mixed", price: "$8.25" },
                    { name: "Shrimp", price: "$7.75" },
                    { name: "Chicken", price: "$7.25" },
                ],
                image: "img item menu/Half Order of Chow Fun.webp",
            },
            {
                name: "An Full Order of Fried Rice",
                description:
                    "A hearty and flavorful classic. Our fried rice is made with your choice of protein, tossed with vegetables and aromatic seasonings.",
                variants: [
                    { name: "Pork", price: "$7.50" },
                    { name: "Mixed", price: "$8.50" },
                    { name: "Shrimp", price: "$8.00" },
                    { name: "Chicken", price: "$7.50" },
                    { name: "Egg and vegetables", price: "$7.50" },
                    { name: "Beef", price: "$7.50" },
                ],
                image: "img item menu/An Full Order of Fried Rice.webp",
            },
            {
                name: "Half Order of Fried Rice",
                description:
                    "A smaller portion of our delicious fried rice, perfect for a lighter appetite.",
                variants: [
                    { name: "Pork", price: "$5.50" },
                    { name: "Mixed", price: "$6.50" },
                    { name: "Shrimp", price: "$6.00" },
                    { name: "Chicken", price: "$5.50" },
                    { name: "Egg and Vegetables", price: "$5.50" },
                    { name: "Beef", price: "$5.50" },
                ],
                image: "img item menu/Half Order of Fried Rice.webp",
            },
            {
                name: "An Full Order of Canton Rice",
                description:
                    "A flavorful rice dish made with chicken, pork, beef, shrimp, and egg.",
                price: "$9.00",
                image: "img item menu/An Full Order of Canton Rice.webp",
            },
            {
                name: "Half Order of Canton Rice",
                description:
                    "A smaller portion of our savory canton rice, perfect for a lighter meal.",
                price: "$7.00",
                image: "img item menu/Half Order of Canton Rice.webp",
            },
            {
                name: "An Full Order of Leon Panmein",
                description:
                    "A delicious noodle dish made with your choice of protein and eggs.",
                variants: [
                    { name: "Pork", price: "$8.50" },
                    { name: "Chicken", price: "$8.50" },
                    { name: "Shrimp", price: "$9.00" },
                    { name: "Mixed", price: "$9.50" },
                ],
                image: "img item menu/An Full Order of Leon Panmein.webp",
            },
            {
                name: "Half Order of Leon Pan Mein",
                description:
                    "A smaller portion of our flavorful pan mein, ideal for a lighter appetite.",
                variants: [
                    { name: "Pork", price: "$6.50" },
                    { name: "Chicken", price: "$6.50" },
                    { name: "Shrimp", price: "$7.00" },
                    { name: "Mixed", price: "$7.50" },
                ],
                image: "img item menu/Half Order of Leon Pan Mein.webp",
            },
            {
                name: "Grilled Chicken with Fried Plantain",
                description:
                    "Juicy grilled chicken served with fried plantains.",
                price: "$8.00",
                image: "img item menu/Grilled Chicken with Fried Plantain.webp",
            },
            {
                name: "Sweet and Sour Chicken with Fries",
                description:
                    "Crispy chicken tossed in a tangy sweet and sour sauce, served with a side of fries.",
                price: "$7.50",
                image: "img item menu/Sweet and Sour Chicken with Fries.webp",
            },
            {
                name: "Sweet & Sour Chicken Combo",
                description:
                    "Crispy chicken pieces tossed in a tangy sweet and sour glaze, served with golden french fries and a side of flavorful fried rice. A satisfying combo that hits all the right notes—sweet, savory, and crunchy.",
                price: "$8.00",
                image: "img item menu/Sweet & Sour Chicken Combo.webp",
            },
            {
                name: "1/2 Fried Chicken with Fries",
                description:
                    "Half of a crispy fried chicken served with a side of fries.",
                price: "$7.50",
                image: "img item menu/Half Fried Chicken with Fries.webp",
            },
            {
                name: "1/4 Fried Chicken with French Fries",
                description:
                    "A quarter of crispy fried chicken served with golden french fries.",
                price: "$6.00",
                image: "img item menu/Quarter Fried Chicken with French Fries.webp",
            },
            {
                name: "1/4 Fried or Roasted Chicken with Potatoes and Fried Rice",
                description:
                    "Savor our perfectly seasoned fried or roasted chicken, served with golden crispy potatoes and flavorful fried rice.",
                price: "$8.00",
                image: "img item menu/Quarter Fried or Roasted Chicken with Potatoes and Fried Rice.webp",
            },
            {
                name: "1/4 of a Breaded Chicken with Fries",
                description:
                    "A quarter of crispy breaded chicken served with golden fries.",
                price: "$6.50",
                image: "img item menu/Quarter of a Breaded Chicken with Fries.webp",
            },
            {
                name: "Chopped Steak with Fries",
                description:
                    "Tender chopped steak served with a side of crispy fries.",
                price: "$7.50",
                image: "img item menu/Chopped Steak with Fries.webp",
            },
            {
                name: "Grilled Pork Chop with Fried Plantain",
                description:
                    "Juicy, grilled pork chop seasoned to perfection, served with fried plantains.",
                price: "$8.00",
                image: "img item menu/Grilled Pork Chop with Fried Plantain.webp",
            },
            {
                name: "Grilled Pork Chop with Fries",
                description:
                    "Juicy, perfectly grilled pork chop served with a side of golden, crispy fries. A classic, hearty dish that combines savory flavors with satisfying textures.",
                price: "$8.00",
                image: "img item menu/Grilled Pork Chop with Fries.webp",
            },
            {
                name: "Smoked Pork Chop with Fried Plantains",
                description:
                    "Smoky, tender pork chops served with fried plantains.",
                price: "$8.00",
                image: "img item menu/Smoked Pork Chop with Fried Plantains.webp",
            },
            {
                name: "Roast/Sweet and Sour Pork with Fried Plantains",
                description:
                    "Tender roasted pork or crispy pork in sweet and sour sauce, served with fried plantains.",
                price: "$7.50",
                image: "img item menu/Roast or Sweet and Sour Pork with Fried Plantains.webp",
            },
            {
                name: "Roast/Sweet and Sour Pork with Fries",
                description:
                    "Tender roasted pork or crispy pork in sweet and sour sauce, served with fries.",
                price: "$7.50",
                image: "img item menu/Roast or Sweet and Sour Pork with Fries.webp",
            },
            {
                name: "Sweet and Sour Rib with Fries",
                description:
                    "Juicy ribs coated in a tangy sweet and sour sauce, served with fries.",
                price: "$7.50",
                image: "img item menu/Sweet and Sour Rib with Fries.webp",
            },
            {
                name: "Chinese Style Combination Rice",
                description:
                    "A flavorful rice dish combining chicken, pork, beef, shrimp.",
                price: "$9.00",
                image: "img item menu/Chinese Style Combination Rice.webp",
            },
            {
                name: "Chinese Style Combination Rice",
                description:
                    "A flavorful rice dish combining chicken, pork, beef, shrimp, and choy sum.",
                price: "$9.00",
                image: "img item menu/Chinese Style Combination Rice2.webp",
            },
        ],
    },
    {
        category: "SEAFOODS",
        description:
            "Savor the fresh flavors of the ocean with our delicious seafood dishes. From succulent prawns to flavorful fish, each dish is expertly prepared to highlight the natural taste of the sea. Enjoy a variety of options, perfectly seasoned and cooked to perfection.",
        items: [
            {
                name: "Garlic Prawn with Fried Plantain",
                description:
                    "Succulent prawns sautéed in a rich, aromatic garlic sauce, paired with fried plantains.<br><br>Available with or without shells.",
                price: "$13.50",
                image: "img item menu/Garlic Prawn with Fried Plantain.webp",
            },
            {
                name: "Butter Prawn",
                description:
                    "Succulent prawns sautéed in a rich, buttery sauce, served with rice and a fresh salad of tomato, lettuce, carrot, and purple cabbage. <br><br>Available with or without shells.",
                price: "$13.50",
                image: "img item menu/Butter Prawn.webp",
            },
            {
                name: "Garlic Octopus with Fries",
                description:
                    "Tender octopus cooked in a flavorful garlic sauce, served with fries.",
                price: "$9.75",
                image: "img item menu/Garlic Octopus with Fries.webp",
            },
            {
                name: "Garlic Octopus with Fried Plantains",
                description:
                    "Tender octopus cooked in a garlic sauce, served with sweet fried plantains.",
                price: "$9.75",
                image: "img item menu/Garlic Octopus with Fried Plantains.webp",
            },
            {
                name: "Garlic Shrimp with Fried Plantain",
                description:
                    "Succulent shrimp sautéed in a rich, aromatic garlic sauce, served alongside fried plantains.",
                price: "$9.75",
                image: "img item menu/Garlic Shrimp with Fried Plantain.webp",
            },
            {
                name: "Garlic Shrimp with Fries",
                description:
                    "Tender shrimp cooked in a garlic sauce, served with fried plantains.",
                price: "$9.75",
                image: "img item menu/Garlic Shrimp with Fries.webp",
            },
            {
                name: "Garlic Shrimp with Rice",
                description:
                    "Juicy shrimp cooked in a garlic sauce, served with steamed rice.",
                price: "$9.75",
                image: "img item menu/Garlic Shrimp with Rice.webp",
            },
            {
                name: "Garlic Shrimp with Fried Rice",
                description:
                    "Juicy shrimp cooked in a garlic sauce, served with flavorful fried rice.",
                price: "$9.75",
                image: "img item menu/Garlic Shrimp with Fried Rice.webp",
            },
            {
                name: "Creole Shrimp with Fried Plantain",
                description:
                    "Shrimp cooked in a spicy Creole sauce, served with fried plantains.",
                price: "$9.75",
                image: "img item menu/Creole Shrimp with Fried Plantain.webp",
            },
            {
                name: "Butter Shrimp with Fried Plantain",
                description:
                    "Shrimp cooked in a rich buttery sauce, served with sweet fried plantains.",
                price: "$9.75",
                image: "img item menu/Butter Shrimp with Fried Plantain.webp",
            },
            {
                name: "Breaded Shrimp with Fries",
                description: "Crispy breaded shrimp served with golden fries.",
                price: "$9.75",
                image: "img item menu/Breaded Shrimp with Fries.webp",
            },
            {
                name: "Breaded Shrimp with Fried Plantain",
                description:
                    "Crispy breaded shrimp served with sweet fried plantains.",
                price: "$9.75",
                image: "img item menu/Breaded Shrimp with Fried Plantain.webp",
            },
            {
                name: "Creole Oyster with Rice",
                description:
                    "Fresh oysters cooked in a spicy Creole sauce, served with rice.",
                price: "$9.75",
                image: "img item menu/Creole Oyster with Rice.webp",
            },
            {
                name: "Garlic Oyster with Fries",
                description:
                    "Fresh oysters cooked in a garlic sauce, served with fries.",
                price: "$9.75",
                image: "img item menu/Garlic Oyster with Fries.webp",
            },
            {
                name: "Garlic Snapper with Fries",
                description:
                    "Fresh snapper fillet cooked in a garlic sauce, served with fries.",
                price: "$9.75",
                image: "img item menu/Garlic Snapper with Fries.webp",
            },
            {
                name: "Fried Snapper with Rice",
                description: "Crispy fried snapper served with steamed rice.",
                price: "$9.75",
                image: "img item menu/Fried Snapper with Rice.webp",
            },
            {
                name: "Fried Snapper with Fried Rice",
                description:
                    "Crispy fried snapper served with flavorful fried rice.",
                price: "$9.75",
                image: "img item menu/Fried Snapper with Fried Rice.webp",
            },
            {
                name: "Garlic Sea Bass Fillet with French Fries",
                description:
                    "Tender sea bass fillet cooked in a garlic sauce, served with fries.",
                price: "$9.75",
                image: "img item menu/Garlic Sea Bass Fillet with French Fries.webp",
            },
            {
                name: "Garlic Sea Bass Fillet with Fried Plantain",
                description:
                    "Tender sea bass fillet cooked in a garlic sauce, served with fried plantains.",
                price: "$9.75",
                image: "img item menu/Garlic Sea Bass Fillet with Fried Plantain.webp",
            },
            {
                name: "Garlic Sea Bass Fillet with Salad",
                description:
                    "Tender sea bass fillet cooked in a garlic sauce, served with a fresh salad.",
                price: "$9.75",
                image: "img item menu/Garlic Sea Bass Fillet with Salad.webp",
            },
            {
                name: "Grilled Sea Bass with White Rice",
                description: "Grilled sea bass fillet served with white rice.",
                price: "$9.75",
                image: "img item menu/Grilled Sea Bass with White Rice.webp",
            },
            {
                name: "Creole Sea Bass Fillet with Fries",
                description:
                    "Tender sea bass fillet seasoned with bold Creole spices, pan-seared to perfection, and served with a side of golden, crispy fries.",
                price: "$9.75",
                image: "img item menu/Creole Sea Bass Fillet with Fries.webp",
            },
            {
                name: "Creole Sea Bass Fillet with Fried Plantain",
                description:
                    "Creole-seasoned sea bass fillet served with fried plantains.",
                price: "$9.75",
                image: "img item menu/Creole Sea Bass Fillet with Fried Plantain.webp",
            },
            {
                name: "Breaded School Shark Fillet with Fries",
                description:
                    "Crispy breaded shark fillet served with golden fries.",
                price: "$6.00",
                image: "img item menu/Breaded School Shark Fillet with Fries.webp",
            },
            {
                name: "Garlic Squid with Fried Plantain",
                description:
                    "Tender squid cooked in a garlic sauce, served with sweet fried plantains.",
                price: "$9.75",
                image: "img item menu/Garlic Squid with Fried Plantain.webp",
            },
        ],
    },
    {
        category: "SOUPS",
        description:
            "Warm, comforting, and full of flavor—our selection of authentic Chinese soups is the perfect way to start your meal. Each bowl is crafted with fresh ingredients and traditional seasonings, offering a rich and satisfying experience with every sip.",
        items: [
            {
                name: "Mayor Aleman Soup",
                description:
                    "A hearty soup made with chicken, pork, shrimp, egg, vegetables, and noodles.",
                price: "$5.00",
                image: "img item menu/Mayor Aleman Soup.webp",
            },
            {
                name: "Wonton Soup",
                description:
                    "A comforting soup featuring chicken, pork, a wonton, and noodles.",
                price: "$4.00",
                image: "img item menu/Wonton Soup.webp",
            },
            {
                name: "Chinese Style Noodle Soup",
                description:
                    "A traditional soup made with flat rice noodles, shrimp, chicken, pork, and beef.",
                price: "$6.00",
                image: "img item menu/Chinese Style Noodle Soup.webp",
            },
            {
                name: "Combination Soup",
                description:
                    "A hearty and comforting soup packed with a delicious mix of flavors and textures. <br><br>This dish features a savory broth filled with tender chicken, pork, shrimp, fresh vegetables, and noodles. ",
                price: "$5.50",
                image: "img item menu/Combination Soup.webp",
            },
            {
                name: "Wat Kay Mein Soup",
                description:
                    "A hearty chicken noodle soup with tender chicken, fresh vegetables, and egg noodles in a flavorful broth, topped with green onions.",
                price: "$5.00",
                image: "img item menu/Wat Kay MeinSoup.webp",
            },
            {
                name: "Seafood Soup",
                description:
                    "A flavorful mix of clams, shrimp, fish, and squid in a rich, aromatic broth. <br><br>Seafood selection varies based on daily availability.",
                price: "$6.00",
                image: "img item menu/Seafood Soup.webp",
            },
            {
                name: "Shrimp Soup",
                description:
                    "A savory and flavorful shrimp soup, perfect for seafood lovers.",
                price: "$5.50",
                image: "img item menu/Shrimp Soup.webp",
            },
            {
                name: "Consommé",
                description: "A light and flavorful broth.",
                variants: [
                    { name: "Shrimp", price: "$2.50" },
                    { name: "Chicken", price: "$2.50" },
                ],
                image: "img item menu/Consommé.webp",
            },
        ],
    },
    {
        category: "DESSERT",
        description:
            "End your meal on a sweet note with our delightful selection of desserts. From rich, indulgent treats to light and refreshing options, each dessert is crafted to satisfy your cravings and complete your dining experience.",
        items: [
            {
                name: "Caramel Custard",
                description:
                    "A creamy, smooth custard topped with a layer of rich caramel.",
                price: "$2.00",
                image: "img item menu/Caramel Custard.webp",
            },
        ],
    },
    {
        category: "BREAKFASTS",
        description:
            "Start your day right with our delicious breakfast selections! From hearty classics to light and healthy options, we offer a variety of dishes to satisfy every craving. Enjoy fresh ingredients, rich flavors, and the perfect balance to fuel your morning.",
        items: [
            {
                name: "Chopped Steak with Tortilla",
                description: "Tender chopped steak served with warm tortillas.",
                price: "$5.00",
                image: "img item menu/Chopped Steak with Tortilla.webp",
            },
            {
                name: "Chopped Steak with Fries",
                description: "Tender chopped steak served with fries.",
                price: "$5.00",
                image: "img item menu/Chopped Steak with Fries.webp",
            },
            {
                name: "Stewed Sausage with Fried Plantain",
                description:
                    "Flavorful stewed sausage served with sweet fried plantains.",
                price: "$4.00",
                image: "img item menu/Stewed Sausage with Fried Plantain.webp",
            },
            {
                name: "Stewed Sausage with Fried Dough",
                description:
                    "Flavorful stewed sausage served with fried dough.",
                price: "$4.00",
                image: "img item menu/Stewed Sausage with Fried Dough.webp",
            },
            {
                name: "Scrambled Eggs with Fries",
                description:
                    "Fluffy, perfectly scrambled eggs served with a side of golden, crispy fries.",
                price: "$4.00",
                image: "img item menu/Scrambled Eggs with Fries.webp",
            },
            {
                name: "Fried Tortilla with Fried Egg",
                description:
                    "Golden fried tortilla served with a delicious fried egg.",
                price: "$3.50",
                image: "img item menu/Fried Tortilla with Fried Egg.webp",
            },
            {
                name: "Fried Chicken with Fried Plantains",
                description:
                    "Savor our mouthwatering fried chicken, perfectly seasoned and fried to golden perfection, paired with crispy fried plantains.",
                price: "$4.50",
                image: "img item menu/Fried Chicken with Fried Plantains.webp",
            },
            {
                name: "Coffee with Milk",
                description:
                    "Indulge in the rich aroma and bold flavors of our freshly brewed coffee.",
                price: "$0.75",
                image: "img item menu/Coffee with Milk.webp",
            },
            {
                name: "Black Coffee",
                description:
                    "Indulge in the rich aroma and bold flavors of our freshly brewed coffee.",
                price: "$0.60",
                image: "img item menu/Black Coffee.webp",
            },
            {
                name: "Black Tea or Cinnamon Tea",
                description:
                    "Choose between the bold, robust flavor of black tea or the soothing warmth of cinnamon tea. Perfect for any time of the day, whether you need energy or comfort.",
                variants: [
                    { name: "With milk", price: "$0.75" },
                    { name: "Without milk", price: "$0.60" },
                ],
                image: "img item menu/Black Tea or Cinnamon Tea.webp",
            },
        ],
    },
    {
        category: "TRAYS",
        description:
            "Perfect for sharing, our trays are packed with generous portions of delicious, freshly prepared dishes. Whether for family gatherings, special occasions, or simply a feast with friends, enjoy a variety of flavors served in convenient, ready-to-enjoy portions.",
        items: [
            {
                name: "Fried Rice Tray (For 8-10 People)",
                description:
                    "A large tray of fried rice, perfect for sharing. Available in chicken, pork, shrimp, mixed, or beef.",
                price: "$22.00",
                image: "img item menu/Fried Rice Tray (For 8-10 People).webp",
            },
            {
                name: "Fried Rice Tray<br> (For 12-18 People)",
                description:
                    "A larger tray of fried rice, ideal for bigger gatherings. Available in chicken, pork, shrimp, mixed, or beef.",
                price: "$30.00",
                image: "img item menu/Fried Rice Tray (For 12-18 People).webp",
            },
            {
                name: "Fried Rice Tray<br> (For 18-25 People)",
                description:
                    "A massive tray of fried rice, perfect for large events. Available in chicken, pork, shrimp, mixed, or beef.",
                price: "$37.00",
                image: "img item menu/Fried Rice Tray (For 18-25 People).webp",
            },
        ],
    },
];

function createMenuItemElement(item) {
    const div = document.createElement("div");
    div.className = "menu-item";
    div.dataset.category = item.category;

    div.innerHTML = `
        <div class="menu-item-image">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <div class="menu-item-content">
            <h3>${item.name}</h3>
            <p class="description">${item.description || ""}</p>
            ${
                item.variants
                    ? `
                        <div class="variants">
                            <p class="variants-title">Variants:</p>
                            <ul>
                               ${item.variants
                                   .map(
                                       (variant) =>
                                           `<li>${variant.name}: <span class="price">${variant.price}</span></li>`
                                   )
                                   .join("")}</ul>

                        </div>`
                    : `<p class="price">${item.price}</p>` // Solo agrega el precio si no hay variantes
            }
        </div>
    `;

    return div;
}

function createCategorySection(category) {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "category-section";
    categoryDiv.dataset.category = category.category;

    categoryDiv.innerHTML = `
    <div class="category-wrapper">
        <div class="category-header">
            <hr class="top-line">
            <h2>${category.category}</h2>
            <p class="category-description">${category.description}</p>
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

function renderMenu(menuItems) {
    const menuGrid = document.getElementById("menuGrid");
    menuItems.forEach((category) => {
        const categorySection = createCategorySection(category);
        menuGrid.appendChild(categorySection);
    });
}

// Llamar a la función para renderizar el menú
renderMenu(menuItems);
