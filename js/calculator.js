import { OPERATORS } from "./enums/operators.js";
const OPERAND_STACK = [];
const OPERATOR_STACK = [];
function isOperator(operator) {
    return (operator === OPERATORS.POW ||
        operator === OPERATORS.MINUS ||
        operator === OPERATORS.PLUS ||
        operator === OPERATORS.MULTIPLY ||
        operator === OPERATORS.DIVIDE ||
        operator === OPERATORS.MODULE);
}
function getProcedence(operator) {
    if (operator === OPERATORS.POW) {
        return 3;
    }
    else if (operator === OPERATORS.MULTIPLY ||
        operator === OPERATORS.DIVIDE ||
        operator === OPERATORS.MODULE) {
        return 2;
    }
    else if (operator === OPERATORS.PLUS || operator === OPERATORS.MINUS) {
        return 1;
    }
    return -1;
}
const action = {
    [OPERATORS.DIVIDE]: (leftNumber, rightNumber) => rightNumber / leftNumber,
    [OPERATORS.PLUS]: (leftNumber, rightNumber) => leftNumber + rightNumber,
    [OPERATORS.MINUS]: (leftNumber, rightNumber) => rightNumber - leftNumber,
    [OPERATORS.MULTIPLY]: (leftNumber, rightNumber) => leftNumber * rightNumber,
    [OPERATORS.MODULE]: (leftNumber, rightNumber) => leftNumber % rightNumber,
    [OPERATORS.POW]: (leftNumber, rightNumber) => Math.pow(leftNumber, rightNumber),
};
function calculateOperation() {
    const leftSideNumber = OPERATOR_STACK.pop(); //2
    const operation = OPERAND_STACK.pop(); //+
    const rightSideNumber = OPERATOR_STACK.pop(); //2
    return action[operation](leftSideNumber, rightSideNumber);
}
function evaluateExpression(expression) {
    for (let i = 0; i < expression.length; i++) {
        let currentOperation = expression[i];
        if (!isNaN(Number(currentOperation))) {
            let currentNumber = "";
            while (!isNaN(Number(currentOperation))) {
                currentNumber = `${currentNumber}${currentOperation}`;
                i++;
                if (i < expression.length) {
                    currentOperation = expression.charAt(i);
                }
                else {
                    break;
                }
            }
            i--;
            OPERATOR_STACK.push(Number(currentNumber));
        }
        else if (currentOperation === "(") {
            OPERAND_STACK.push(currentOperation);
        }
        else if (currentOperation === ")") {
            while (OPERAND_STACK[OPERAND_STACK.length - 1] !== "(") {
                const output = calculateOperation();
                OPERATOR_STACK.push(output);
            }
            OPERAND_STACK.pop();
        }
        else if (isOperator(currentOperation)) {
            while (OPERAND_STACK.length !== 0 &&
                getProcedence(currentOperation) <=
                    getProcedence(OPERAND_STACK[OPERAND_STACK.length - 1])) {
                const output = calculateOperation();
                OPERATOR_STACK.push(output);
            }
            OPERAND_STACK.push(currentOperation);
        }
    }
    while (OPERAND_STACK.length !== 0) {
        const output = calculateOperation();
        OPERATOR_STACK.push(output);
    }
    return OPERATOR_STACK.pop();
}
export function calculate(operation) {
    return evaluateExpression(operation);
}
