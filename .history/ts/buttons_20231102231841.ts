import { calculate } from "./calculator.js";

type Buttons = {
  value: string | number;
  className: string;
  action: (value: string) => void;
};

let operation = "";
const operationContainer = document.getElementById("operation");
const operationRecult
const buttonContainer = document.getElementById("calculator-buttons");

function addValue(value: string): void {
  operation += value;
  operationContainer.innerHTML = operation;
}

function handleCalculate(operation: string): void{
    const result = calculate(operation)
}


export const buttons: Buttons[] = [
  {
    value: "(",
    className: "button small dark",
    action: addValue,
  },
  {
    value: ")",
    className: "button small dark",
    action: addValue,
  },
  {
    value: "ans",
    className: "button small dark",
    action: addValue,
  },
  {
    value: "del",
    className: "button small dark",
    action: addValue,
  },
  {
    value: "clear",
    className: "button small dark",
    action: addValue,
  },
  {
    value: "7",
    className: "button",
    action: addValue,
  },
  {
    value: "8",
    className: "button",
    action: addValue,
  },
  {
    value: "9",
    className: "button",
    action: addValue,
  },
  {
    value: "%",
    className: "button dark large",
    action: addValue,
  },
//   {
//     value: "√",
//     className: "button dark",
//     action: addValue,
//   },
  {
    value: "4",
    className: "button",
    action: addValue,
  },
  {
    value: "5",
    className: "button",
    action: addValue,
  },
  {
    value: "6",
    className: "button",
    action: addValue,
  },
  {
    value: "X",
    className: "button dark",
    action: addValue,
  },
  {
    value: "/",
    className: "button dark",
    action: addValue,
  },
  {
    value: "1",
    className: "button",
    action: addValue,
  },
  {
    value: "2",
    className: "button",
    action: addValue,
  },
  {
    value: "3",
    className: "button",
    action: addValue,
  },
  {
    value: "+",
    className: "button dark",
    action: addValue,
  },
  {
    value: "-",
    className: "button dark",
    action: addValue,
  },
  {
    value: ".",
    className: "button dark",
    action: addValue,
  },
  {
    value: "0",
    className: "button",
    action: addValue,
  },
  {
    value: "^",
    className: "button dark",
    action: addValue,
  },
  {
    value: "ENTER",
    className: "button dark large",
    action: handleCalculate,
  },
];

buttons.forEach((button) => {
  const buttonElement = document.createElement("button");
  buttonElement.className = button.className;
  buttonElement.innerText = button.value.toString();
  if (button.value === "ENTER") {
    buttonElement.addEventListener("click", () => button.action(operation));
  } else {
    buttonElement.addEventListener("click", () =>
      button.action(button.value.toLocaleString())
    );
  }
  buttonContainer?.appendChild(buttonElement);
});
