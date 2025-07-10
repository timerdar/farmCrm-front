import { navigateTo } from "../../core/navigate.js";
import { ProductCard } from "../cards/ProductCard.js";

export function ProductList(productList, onCostClick, onCountClick){

    const list = document.createElement("ul");
    
    function render(data){
        list.innerHTML = '';
        data.forEach(product => {
            const li = document.createElement("li");
            li.appendChild(ProductCard(product, onCostClick, onCountClick));
            list.appendChild(li);
        })
    };

    render(productList);

    list.update = render(productList);
    
    return list;

}