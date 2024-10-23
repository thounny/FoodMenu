"use strict";

let menu = {
  drinks: ["Water", "Tea", "Sweet Tea", "Coke", "Dr.Pepper", "Sprite"],
  entrees: [
    "Hamburger w/ Fries",
    "Grilled Cheese w/ Tator Tots",
    "Grilled Chicken w/ Vegetables",
    "Chicken Fried Steak w/ Mash taters",
    "Fried Shrimp w/ Coleslaw",
    "Vegetable plate",
  ],
  desserts: ["Cheesecake", "Chocolate Cake", "Cookie"],
};

// select category dropdown menu
const categoryDropdown = document.getElementById("category");
const listBox = document.getElementById("items");

// update listBox based on selected category
function updateListBox() {
  // grab selected category
  const selectedCategory = categoryDropdown.value;

  // clear existing items in the listBox
  listBox.innerHTML = "";

  // get items for the selected category
  const items = menu[selectedCategory];

  // loop through the items and create option elements
  items.forEach((item) => {
    const option = document.createElement("option");
    option.textContent = item;
    listBox.appendChild(option);
  });
}

// event listener for dropdown to trigger the updateListBox function
categoryDropdown.addEventListener("change", updateListBox);

// initialize the listBox with the default category [drinks]
updateListBox();
