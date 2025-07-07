import { Button } from "../components/Button.js";
import { navigateTo } from "../core/navigate.js";

export function Menu() {
    const div = document.createElement('div');
    const btn = Button({
        text: 'Заказчики',
        onClick: () => navigateTo('/orders')
    });

    div.appendChild(btn);

    return div;
}