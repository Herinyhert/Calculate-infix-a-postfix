function evaluateExpression(expression: string){
    for(let i=0; i< expression.length; i++){
        let currentOperation = expression[i];

        console.log(currentOperation)
    }
}

export function calculate(operation: string): number{
    let result = 0;
    evaluateExpression()
    return result
}