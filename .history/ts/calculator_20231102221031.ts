const OPERAND_STACK: string[] = [];
const OPERATOR_STACK: number[] = [];

function evaluateExpression(expression: string) {
  for (let i = 0; i < expression.length; i++) {
    let currentOperation = expression[i];

    if (!isNaN(Number(currentOperation))) {
      let currentNumber = "";

      while (!isNaN(Number(currentOperation))) {
        currentNumber = `${currentNumber}${currentOperation}`;
        i++;

        if (i < expression.length) {
          currentOperation = expression.charAt(i);
        } else {
          break;
        }
      }
      i--;
      OPERATOR_STACK.push(Number(currentNumber));
    } else if{ currentOperation === "("
    } else if{

    } else{

    }
  }
  console.log(OPERATOR_STACK);
}

export function calculate(operation: string): number {
  let result = 0;
  evaluateExpression(operation);
  return result;
}
