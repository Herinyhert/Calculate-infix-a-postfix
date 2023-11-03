type Buttons = {
  value: string | number;
  className: string;
  action: (value)
};

let operation = "";
const buttonContainer = document.getElementById('calculator-buttons');

function addValue(value:string):void{
    operation += value;
}

export const buttons: Buttons[] = [
  {
    value: "(",
    className: "button small dark",
    action: addValue("(")
  },
  {
    value: ")",
    className: "button small dark",
  },
  {
    value: "ans",
    className: "button small dark",
  },
  {
    value: "del",
    className: "button small dark",
  },
  {
    value: "clear",
    className: "button small dark",
  },
  {
    value: "7",
    className: "button",
  },
  {
    value: "8",
    className: "button",
  },
  {
    value: "9",
    className: "button",
  },
  {
    value: "%",
    className: "button dark",
  },
  {
    value: "√",
    className: "button dark",
  },
  {
    value: "4",
    className: "button",
  },
  {
    value: "5",
    className: "button",
  },
  {
    value: "6",
    className: "button",
  },
  {
    value: "X",
    className: "button dark",
  },
  {
    value: "/",
    className: "button dark",
  },
  {
    value: "1",
    className: "button",
  },
  {
    value: "2",
    className: "button",
  },
  {
    value: "3",
    className: "button",
  },
  {
    value: "+",
    className: "button dark",
  },
  {
    value: "-",
    className: "button dark",
  },
  {
    value: ".",
    className: "button dark",
  },
  {
    value: "0",
    className: "button",
  },
  {
    value: "^",
    className: "button dark",
  },
  {
    value: "ENTER",
    className: "button dark large",
  },
];

buttons.forEach(button =>{
    const buttonElement = document.createElement('button');
    buttonElement.className = button.className;
    buttonElement.innerText = button.value.toString();
    buttonContainer?.appendChild(buttonElement)
})
