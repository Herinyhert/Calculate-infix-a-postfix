type Buttons = {
  value: string | number;
  className: string;
  action: (value: string) => void;
};

export let operation = "";
const buttonContainer = document.getElementById("calculator-buttons");

function addValue(value: string): void {
  operation += value;
}

export const buttons: Buttons[] = [
  {
    value: "(",
    className: "button small dark",
    action: () => addValue("("),
  },
  {
    value: ")",
    className: "button small dark",
    action: () => addValue(")"),
  },
  {
    value: "ans",
    className: "button small dark",
    action: () => addValue("ans"),
  },
  {
    value: "del",
    className: "button small dark",
    action: () => addValue("del"),
  },
  {
    value: "clear",
    className: "button small dark",
    action: () => addValue("clear"),
  },
  {
    value: "7",
    className: "button",
    action: () => addValue("7"),
  },
  {
    value: "8",
    className: "button",
    action: () => addValue("8"),
  },
  {
    value: "9",
    className: "button",
    action: () => addValue("9"),
  },
  {
    value: "%",
    className: "button dark",
    action: () => addValue("%"),
  },
  {
    value: "√",
    className: "button dark",
    action: () => addValue("√"),
  },
  {
    value: "4",
    className: "button",
    action: () => addValue("4"),
  },
  {
    value: "5",
    className: "button",
    action: () => addValue("5"),
  },
  {
    value: "6",
    className: "button",
    action: () => addValue("6"),
  },
  {
    value: "X",
    className: "button dark",
    action: () => addValue("X"),
  },
  {
    value: "/",
    className: "button dark",
    action: () => addValue("/"),
  },
  {
    value: "1",
    className: "button",
    action: () => addValue("1"),
  },
  {
    value: "2",
    className: "button",
    action: () => addValue("2"),
  },
  {
    value: "3",
    className: "button",
    action: () => addValue("3"),
  },
  {
    value: "+",
    className: "button dark",
    action: () => addValue("+"),
  },
  {
    value: "-",
    className: "button dark",
    action: () => addValue("-"),
  },
  {
    value: ".",
    className: "button dark",
    action: () => addValue("."),
  },
  {
    value: "0",
    className: "button",
    action: () => addValue("0"),
  },
  {
    value: "^",
    className: "button dark",
    action: () => addValue("^"),
  },
  {
    value: "ENTER",
    className: "button dark large",
    action: () => addValue("ENTER"),
  },
];

buttons.forEach((button) => {
  const buttonElement = document.createElement("button");
  buttonElement.className = button.className;
  buttonElement.innerText = button.value.toString();
  buttonElement.addEventListener("click", button);
  buttonContainer?.appendChild(buttonElement);
});
