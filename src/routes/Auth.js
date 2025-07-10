import { IconButton } from "../components/IconButton.js";
import { Button } from "../components/Button.js"
import { ErrorMessage } from "../components/ErrorMessage.js";
import { navigateTo } from "../core/navigate.js";
import { auth } from "../services/auth-service.js";

export function Auth(){

    if (localStorage.getItem("FARM_LOGIN") === "true"){
        navigateTo('/menu');
        return null;
    }else{
        const div = document.createElement("div");
        div.className = 'auth-container';

        const form = document.createElement("form");
        form.className = 'auth-form';

        const login = document.createElement("input");
        login.type = 'text';
        login.className = 'auth-input';
        login.placeholder = 'Логин';
        login.required = true;

        const passwordDiv = document.createElement('div');
        passwordDiv.className = 'password-div';

        const password = document.createElement("input");
        password.type = 'password';
        password.className = 'auth-input';
        password.placeholder = 'Пароль';
        password.required = true;

        passwordDiv.appendChild(password);

        const seePasswordBnt = IconButton('/src/assets/show.png', 
            function (event) {
                event.preventDefault();
                if (password.type === 'password'){
                    this.setIcon('/src/assets/hide.png')
                    password.type = 'text';
                }else{
                    this.setIcon('/src/assets/show.png')
                    password.type = 'password';
                }
            }
        );

        passwordDiv.appendChild(seePasswordBnt);

        const signin = Button('Войти', 
            () => {
                if (auth(login.textContent, password.textContent)){
                    navigateTo('/menu');
                }else{
                    div.appendChild(ErrorMessage("Неверный логин или пароль"));
                    login.value = '';
                    password.value = '';
                }
            }
        );

        form.appendChild(login);
        form.appendChild(passwordDiv);
        form.appendChild(signin);
        div.appendChild(form);
        
        return div;

    }
    

}