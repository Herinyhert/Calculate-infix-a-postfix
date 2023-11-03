type Buttons = {
  value: string | number;
  className: string;
  action: (value: string) => void;
};

export let operation = "";
const buttonContainer = document.getElementById("calculator-buttons");

function addValue(event: MouseEvent, value: string): void {
  operation += value;
}

export const buttons: Buttons[] = [
  {
    value: "(",
    className: "button small dark",
    action: (event) => addValue("("),
  },
  {
    value: ")",
    className: "button small dark",
    action: (event) => addValue(")"),
  },
  {
    value: "ans",
    className: "button small dark",
    action: (event) => addValue("ans"),
  },
  {
    value: "del",
    className: "button small dark",
    action: (event) => addValue("del"),
  },
  {
    value: "clear",
    className: "button small dark",
    action: (event) => addValue("clear"),
  },
  {
    value: "7",
    className: "button",
    action: (event) => addValue("7"),
  },
  {
    value: "8",
    className: "button",
    action: (event) => addValue("8"),
  },
  {
    value: "9",
    className: "button",
    action: (event) => addValue("9"),
  },
  {
    value: "%",
    className: "button dark",
    action: (event) => addValue("%"),
  },
  {
    value: "√",
    className: "button dark",
    action: (event) => addValue("√"),
  },
  {
    value: "4",
    className: "button",
    action: (event) => addValue("4"),
  },
  {
    value: "5",
    className: "button",
    action: (event) => addValue("5"),
  },
  {
    value: "6",
    className: "button",
    action: (event) => addValue("6"),
  },
  {
    value: "X",
    className: "button dark",
    action: (event) => addValue("X"),
  },
  {
    value: "/",
    className: "button dark",
    action: (event) => addValue("/"),
  },
  {
    value: "1",
    className: "button",
    action: (event) => addValue("1"),
  },
  {
    value: "2",
    className: "button",
    action: (event) => addValue("2"),
  },
  {
    value: "3",
    className: "button",
    action: (event) => addValue("3"),
  },
  {
    value: "+",
    className: "button dark",
    action: (event) => addValue("+"),
  },
  {
    value: "-",
    className: "button dark",
    action: (event) => addValue("-"),
  },
  {
    value: ".",
    className: "button dark",
    action: (event) => addValue("."),
  },
  {
    value: "0",
    className: "button",
    action: (event) => addValue("0"),
  },
  {
    value: "^",
    className: "button dark",
    action: (event) => addValue("^"),
  },
  {
    value: "ENTER",
    className: "button dark large",
    action: (event) => addValue("ENTER"),
  },
];

buttons.forEach((button) => {
  const buttonElement = document.createElement("button");
  buttonElement.className = button.className;
  buttonElement.innerText = button.value.toString();
  buttonElement.addEventListener("click", button.action);
  buttonContainer?.appendChild(buttonElement);
});
