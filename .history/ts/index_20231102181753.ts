import {buttons} from './buttons';

const buttonContainer = document.getElementById('caculator-button')
buttons.forEach(button =>{
    const buttonElement = document.createElement('button');
    buttonElement.className = button.className;
    buttonElement.innerText = button.value.toString();
})
