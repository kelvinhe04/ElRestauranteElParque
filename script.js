const filterBtns = document.querySelectorAll(".filter-btn");
const categoryFilter = document.querySelector(".category-filter");

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
          if (scrollDelta > 0 ) {
              // Scrolling down and past hero section
              categoryFilter.style.transform = "translateY(0)";
              categoryFilter.style.opacity = "1";
          } else {
              // Scrolling up or at top
              categoryFilter.style.transform = "translateY(5%)";
              categoryFilter.style.opacity = "0";
          }

          lastScrollTime = now;
          lastScrollY = currentScrollY;
      }
  });


// Load Menu Items
  function loadMenuItems() {
    const menuItems = [
      {
        name: "Fried Wonton",
        description:
          "Crispy, golden wonton strips - light, crunchy, and perfect for dipping. Sweet and sour sauce available for an extra $1.00. Served with 9 pieces.",
        price: "$3.00",
        image: "img item menu/Fried Wonton.webp",
        category: "entradas",
      },
      {
        name: "Spring Rolls",
        description:
          "Crispy, golden rolls stuffed with a refreshing mix of shredded carrots, cabbage, and your choice of protein. Sweet and sour sauce available for an extra $1.00. Served with 9 pieces.",
        variants: [
          "Chicken and pork ($7.00)",
          "Chicken ($7.00)",
          "Pork ($7.00)",
          "Shrimp ($8.00)",
        ],
        price: "$7.00",
        image: "img item menu/Spring Rolls.webp",
        category: "entradas",
      },
      {
        name: "An Full Order of Fried Rice",
        description:
          "A hearty and flavorful classic. Our fried rice is made with your choice of protein, tossed with fresh vegetables, and aromatic seasonings. Each variant offers a unique taste experience.",
        variants: [
          "Pork ($7.50)",
          "Mixed ($8.50)",
          "Shrimp ($8.00)",
          "Chicken ($7.50)",
          "Egg and vegetables ($7.50)",
          "Beef ($7.50)",
        ],
        price: "$7.50",
        image: "img item menu/An Full Order of Fried Rice.webp",
        category: "principales",
      },
      {
        name: "Half Order of Fried Rice",
        description:
          "A perfectly portioned version of our classic fried rice, ideal for lighter appetites or as a side dish. Made with the same care and quality ingredients as our full order.",
        variants: [
          "Pork ($5.50)",
          "Mixed ($6.50)",
          "Shrimp ($6.00)",
          "Chicken ($5.50)",
          "Egg and vegetables ($5.50)",
          "Beef ($5.50)",
        ],
        
        image: "img item menu/Half Order of Fried Rice.webp",
        category: "principales",
      },
      {
        name: "Fried Rice Tray (For 8-10 People)",
        description:
          "A generous portion of our signature fried rice, perfect for small gatherings or family dinners. Includes a balanced mix of proteins and fresh vegetables.",
        price: "$45.00",
        image: "img item menu/Fried Rice Tray (For 8-10 People).webp",
        category: "principales",
      },
      {
        name: "Fried Rice Tray (For 12-18 People)",
        description:
          "An abundant serving of our delicious fried rice, ideal for medium-sized gatherings. Features a variety of proteins and fresh vegetables.",
        price: "$65.00",
        image: "img item menu/Fried Rice Tray (For 12-18 People).webp",
        category: "principales",
      },
      {
        name: "Fried Rice Tray (For 18-25 People)",
        description:
          "Our largest fried rice offering, perfect for big events and celebrations. Prepared with premium ingredients and multiple protein options.",
        price: "$85.00",
        image: "img item menu/Fried Rice Tray (For 18-25 People).webp",
        category: "principales",
      },
    ];

    menuItems.forEach((item) => {
      const itemElement = createMenuItemElement(item);
      menuGrid.appendChild(itemElement);
    });
  }

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
                              .map((variant) => `<li>${variant}</li>`)
                              .join("")}
                        </ul>
                    </div>
                `
                    : ""
                }
                <p class="price">${item.price}</p>
            </div>
        `;

    return div;
  }

  // Initialize
  loadMenuItems();