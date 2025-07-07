export function OrdersList({orders}){

    const s = document.createElement("div");
    s.innerHTML = `<ul>
        ${orders.forEach(order => {
            </li>
        })}
    </ul>`;

}