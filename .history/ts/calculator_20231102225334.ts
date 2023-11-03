import { OPERATORS } from "./enums/operators";

const OPERAND_STACK: string[] = [];
const OPERATOR_STACK: number[] = [];

function isOperator(operator: string): boolean {
  return (
    operator === OPERATORS.POW ||
    operator === OPERATORS.MINUS ||
    operator === OPERATORS.PLUS ||
    operator === OPERATORS.MULTIPLY ||
    operator === OPERATORS.DIVIDE ||
    operator === OPERATORS.MODULE 
  );
}

function getProcedence(operator: string): number {
  if (operator === OPERATORS.POW) {
    return 3;
  } else if (
    operator === OPERATORS.MULTIPLY ||
    operator === OPERATORS.DIVIDE ||
    operator === OPERATORS.MODULE
  ) {
    return 2;
  } else if (operator === OPERATORS.PLUS || operator === OPERATORS.MINUS) {
    return 1;
  }
  return -1;
}

function calculateOperation(): number {
  return 0;
}

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
    } else if (currentOperation === "(") {
      OPERAND_STACK.push(currentOperation);
    } else if (currentOperation === ")") {
    } else if (isOperator(currentOperation)) {
      while (
        OPERAND_STACK.length !== 0 &&
        getProcedence(currentOperation) >
          getProcedence(OPERAND_STACK[OPERAND_STACK.length - 1])
      ) {
        const output = calculateOperation();
        OPERATOR_STACK.push(output)
      }
      OPERAND_STACK.push(cu)
    }
  }
  console.log(OPERATOR_STACK);
}

export function calculate(operation: string): number {
  let result = 0;
  evaluateExpression(operation);
  return result;
}
