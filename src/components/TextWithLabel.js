export function TextWithLabel(labelText, text){

    const column = document.createElement("div");
    column.className = 'text-with-label';
    
    const label = document.createElement("label");
    label.textContent = labelText;
    column.appendChild(label);

    const content = document.createElement("div");
    content.className = 'text-content';
    content.textContent = text;
    column.appendChild(content);

    return column;
}