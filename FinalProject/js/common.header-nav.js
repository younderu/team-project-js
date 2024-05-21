function displayCategories(categories) {
  const categoriesMenu = document.querySelector(".header__menu");
  categories.forEach((category) => {
    const menuItem = document.createElement("li");
    menuItem.classList.add("header__menu-item");
    const categoryLink = document.createElement("a");
    categoryLink.textContent = category.name;
    categoryLink.href = `#${category.shortname}`;
    categoryLink.classList.add("header__menu-item-link");
    categoryLink.addEventListener("click", (event) => {
      displayItems(category.shortname);
    });
    menuItem.appendChild(categoryLink);
    categoriesMenu.appendChild(menuItem);
  });
}

async function loadCategories() {
  try {
    const response = await fetch("./api/categories.json");
    const categories = await response.json();
    displayCategories(categories);
  } catch (error) {
    console.error("Failed to load categories:", error);
  }
}

loadCategories();

async function getData(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error("Error", error);
  }
}

async function displayItems(categoryShortname) {
  try {
    const categoryContainer = document.querySelector(".category-container");
    categoryContainer.innerHTML = "";

    const data = await getData(`./api/items/${categoryShortname}.json`);
    data.items.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("item");
      itemElement.innerHTML = `
      <div class="catalog__container">
          <div class="items-img"> 
            <img src="${item.img}" alt="${item.name}">
          </div>
        
        <h3 class="items__name">${item.name}</h3>
        <p class="descriptions">${item.description}</p>
        <p class="price">Price: ${item.price}</p>
      </div>
        
      `;
      categoryContainer.appendChild(itemElement);
    });

    document
      .querySelector(".category-container")
      .scrollIntoView({ behavior: "smooth" });
  } catch (error) {
    console.error(`Error`, error);
  }
}
