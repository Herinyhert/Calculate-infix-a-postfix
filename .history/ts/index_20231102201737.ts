import {buttons} from './buttons.js';


buttons.forEach(button =>{
    const buttonElement = document.createElement('button');
    buttonElement.className = button.className;
    buttonElement.innerText = button.value.toString();
    buttonContainer?.appendChild(buttonElement)
})
