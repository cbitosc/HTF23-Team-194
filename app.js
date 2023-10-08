// Sample shopping list data
const shoppingList = [];

// Sample store data
const nearbyStores = ["Store A", "Store B", "Store C","Store D"];

// Sample price comparison data
const priceComparison = {
    "Product 1": {
        "Sore A": 2.99,
        "Store B": 3.49,
        "Store C": 2.79,
    },
    "Apple":{
        "Sore A": 5.99,
        "Store B": 7.49,
        "Store C": 6.79,
    }
    // Add more products and prices here
};

// DOM elements
const listItems = document.getElementById("list-items");
const itemInput = document.getElementById("item-input");
const addItemButton = document.getElementById("add-item-button");
const storeResults = document.getElementById("store-results");
const findStoresButton = document.getElementById("find-stores-button");
const productInput = document.getElementById("product-input");
const comparePricesButton = document.getElementById("compare-prices-button");
const priceResults = document.getElementById("price-results");

// Add item to shopping list
addItemButton.addEventListener("click", () => {
    const newItem = itemInput.value.trim();
    if (newItem !== "") {
        shoppingList.push(newItem);
        updateShoppingList();
        itemInput.value = "";
    }
});

// Update shopping list
function updateShoppingList() {
    listItems.innerHTML = "";
    shoppingList.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        listItems.appendChild(listItem);
    });
}

// Find nearby stores
findStoresButton.addEventListener("click", () => {
    storeResults.innerHTML = "";
    nearbyStores.forEach((store) => {
        const storeInfo = document.createElement("p");
        storeInfo.textContent = store;
        storeResults.appendChild(storeInfo);
    });
});

// Compare prices
comparePricesButton.addEventListener("click", () => {
    priceResults.innerHTML = "";
    const product = productInput.value.trim();
    if (product in priceComparison) {
        const prices = priceComparison[product];
        for (const store in prices) {
            const priceInfo = document.createElement("p");
            priceInfo.textContent = `${store}: $${prices[store]}`;
            priceResults.appendChild(priceInfo);
        }
    } else {
        const noData = document.createElement("p");
        noData.textContent = "No price data available for this product.";
        priceResults.appendChild(noData);
    }
});