import { Auth } from "../routes/Auth.js";
import { Menu } from "../routes/Menu.js";
import { NotFound } from "../routes/NotFound.js";
import { UndoneOrdersConsumers } from "../routes/consumers/UndoneOrdersConsumers.js";

const routes = {
    '/': Auth,
    '/menu': Menu,
    '/consumers': UndoneOrdersConsumers
}

export function router() {
    const hash = location.hash.slice(1) || "/";

    const page = routes[hash] || NotFound;

    const app = document.getElementById('app');

    app.innerHTML = '';
    
    app.appendChild(page());
};