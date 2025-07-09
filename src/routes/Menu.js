import { Button } from "../components/Button.js";
import { navigateTo } from "../core/navigate.js";

export function Menu() {
    const div = document.createElement('div');

    const btn = Button('Заказчики', () => navigateTo('/consumers'));

    div.appendChild(btn);

    return div;
}