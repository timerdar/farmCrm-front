import { IconButton } from "./IconButton.js";
import { TextWithLabel } from "./TextWithLabel.js";

export function EditableTextWithLabelForNumber(label, text, onAcceptClick){

    let splitted = text.split(" ");
    let currentValue = splitted[0];
    let postFix;
    if (splitted.length > 1){
        postFix = splitted.slice(1, splitted.length - 1).join(" ");
    }else{
        postFix = '';
    }
    const elem = document.createElement("div");
    elem.className = 'editable-text';

    function renderContent(){
        elem.innerHTML = '';

        const textWithLabel = TextWithLabel(label, `${currentValue} ${postFix}`, '/src/assets/edit.png');
        textWithLabel.addEventListener('click', () => renderInput());
        
        elem.appendChild(textWithLabel);
    }

    function renderInput(){
        elem.innerHTML = '';

        const input = document.createElement('input');
        input.type = 'number';
        input.placeholder = label;
        input.size = 8;

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
    }

    renderContent();
    return elem;
}