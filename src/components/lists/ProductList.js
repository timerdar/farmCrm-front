import { ProductCard } from "../cards/ProductCard.js";

export function ProductList(productList){

    const onCostClick = () => {
        alert("Кликнули на стоимость");
    }
    const onCountClick = () => {
        alert("Кликнули на количество");
    }

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