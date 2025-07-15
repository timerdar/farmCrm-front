import { IconButton } from "./IconButton.js";
import { TextWithLabel } from "./TextWithLabel.js";

export function EditableTextWithLabel(label, text, onAcceptClick){

    let currentValue = text.split(' ')[0];
    let postFix = text.split(' ')[1];
    const elem = document.createElement("div");
    elem.className = 'editable-text';

    function renderContent(){
        elem.innerHTML = '';

        const textWithLabel = TextWithLabel(label, `${currentValue} ${postFix}`);
        textWithLabel.addEventListener('click', () => renderInput());
        
        elem.appendChild(textWithLabel);
    }

    function renderInput(){
        elem.innerHTML = '';

        const input = document.createElement('input');
        input.type = 'number';
        input.placeholder = label;
        input.size = 8;

        const icon = IconButton('/src/assets/accept.png', () => {
            console.log(`${input.value} - новое значение`);
            currentValue = input.value;
            renderContent();
        });

        input.addEventListener('blur', () => {
            if (input.value > 0){
                onAcceptClick(input.value);
                currentValue = input.value;
            }
            renderContent();
        })

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter'){
                input.blur();
            }
        })

        elem.appendChild(input);
        input.focus();
        //elem.appendChild(icon);
    }

    renderContent();
    return elem;
}