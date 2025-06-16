// ==============================
// 🌱 Sélection des éléments
// ==============================

// Inputs
const inputName = document.querySelector(`.input-name`);
const inputQuantity = document.querySelector(`.input-quantity`);
const inputProduct = document.querySelector(`.input-product`);

// Buttons
const addButton = document.querySelector(`.add-button`);

// Display 
const displayedProductsContainer = document.querySelector(`.displayed-products-container`);

// ==============================
// 🎊 Variables
// ==============================
const productsList = [];

// ==============================
// 🎊 Fonctionnalités
// ==============================

// Ajouter un produit dans la liste des produits
function addProductToList() {
    if (!inputName.value.trim() || !inputQuantity.value.trim() || inputProduct.value === '') {
        alert("Veuillez remplir tous les champs !");
        return;
    }

    productsList.push({
        name: inputName.value,
        quantity: inputQuantity.value,
        product: inputProduct.value,
    })

    console.log(productsList);
}

// Afficher les produits dans le Products Container
function displayproducts() {
    if (productsList.length <= 0) {
        displayedProductsContainer.innerHTML = "Aucun élément à afficher"
    }

    else {
        displayedProductsContainer.innerHTML = ``;

        productsList.forEach((product, index) => {
            const newProduct = document.createElement(`div`);
            newProduct.innerHTML = `<div class="displayed-name">${product.name}</div>
            <div class="displayed-quantity">${product.quantity}</div>
            <div class="displayed-product">${product.product}</div>
            <button class="button delete-button">Supprimer</button>`
            ;
            newProduct.classList.add(`list-element`);
            newProduct.dataset.index = index;

            displayedProductsContainer.appendChild(newProduct);
        })
    }
}

// Enlever un produit de la liste productsList
function removeProductFromProductsList(index) {
    productsList.splice(index, 1);
}

// Reset les champs après chaque ajout
function resetInputs() {
    inputName.value = ``;
    inputQuantity.value = ``;
    inputProduct.value = ``;
}
// ==============================
// 🧲 Événements
// ==============================
displayproducts();

// Gérer l'évenement d'ajout
addButton.addEventListener(`click`, (e) => {
    e.preventDefault();
    addProductToList();
    displayproducts();
    resetInputs();
})

// Gérer l'évenement de suppression
displayedProductsContainer.addEventListener(`click`, (e) => {
    e.preventDefault();
    let index = e.target.closest(".list-element").dataset.index;
    removeProductFromProductsList(index);
    displayproducts();
    
})