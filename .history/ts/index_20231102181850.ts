import {buttons} from './buttons';

const buttonContainer = document.getElementById('calculator-buttons')
buttons.forEach(button =>{
    const buttonElement = document.createElement('button');
    buttonElement.className = button.className;
    buttonElement.innerText = button.value.toString();
    buttonContainer?.appendChild
})
