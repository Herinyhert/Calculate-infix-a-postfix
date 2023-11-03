const OPERAND_STACK: string = [];
const OPERATOR_STACK: number = [];

function evaluateExpression(expression: string) {
  for (let i = 0; i < expression.length; i++) {
    let currentOperation = expression[i];
    if (!isNaN(Number(currentOperation))) {
        let currentNumber = "";
        while (!isNaN(Number(currentOperation))) {
            currentNumber = `$`
        }
      console.log(currentOperation);
    } else {
    }
  }
}

export function calculate(operation: string): number {
  let result = 0;
  evaluateExpression(operation);
  return result;
}
