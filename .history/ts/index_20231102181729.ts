import {buttons} from './buttons';

const buttonContainer = 
buttons.forEach(button =>{
    const buttonElement = document.createElement('button');
    buttonElement.className = button.className;
    buttonElement.innerText = button.value.toString();
})
