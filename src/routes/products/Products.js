import { ProductList } from "../../components/lists/ProductList.js";
import { Button } from "../../components/Button.js";
import { navigateTo } from "../../core/navigate.js";
import { IconButton } from "../../components/IconButton.js";
import { ProductCreation } from "../../components/creation_forms/ProductCreation.js";

export function Products() {

    const products = [];

    for (let i = 0; i < 100; i++) {
        products.push({ id: i, name: `Товар ${i}`, count: 10, cost: 233, createdCount: 3*i});
    }

    const div = document.createElement("div");
    div.className = 'container';

    const header = document.createElement("h1");
    header.innerText = 'Список продукции';

    div.appendChild(header);

    const searchInput = document.createElement("input");
    searchInput.type = 'text';
    searchInput.className = 'search-input';
    searchInput.placeholder = 'Начните вводить название продукта';
    div.appendChild(searchInput);

    const replacableDiv = document.createElement("div");
    replacableDiv.className = 'replacable-div'
    div.appendChild(replacableDiv);

    function setButton() {
        const addProductBtn = Button("Добавить продукт", () => {
            setForm()
        })
        replacableDiv.innerHTML = '';
        replacableDiv.appendChild(addProductBtn);
    }

    function setForm() {
        const creationForm = ProductCreation(setButton);
        replacableDiv.innerHTML = '';
        replacableDiv.appendChild(creationForm);
    }

    setButton();
    const productList = ProductList(products, true);

    searchInput.addEventListener('input', () => {
        if (searchInput.value === '') {
            productList.update(products);
        } else {
            const newProducts = [];
            products.forEach(product => {
                if (product.name.toLowerCase().includes(searchInput.value.toLocaleLowerCase())) {
                    newProducts.push(product);
                }
            })
            productList.update(newProducts);
        }
    });

    div.appendChild(productList);

    return div;

}