class Calculator {
    constructor(previousOperand, currentOperand){
        this.previousOperand = previousOperand
        this.currentOperand = currentOperand
        this.clear()
    }

    clear() {
        this.currentOperand = ""
        this.previousOperand = ""
        this.operation = undefined
    }

    delete() {

    }

    appenNumber(number) {
        this.currentOperand = number

    }

    chooseOperation(operation) {

    }

    compute() {

    }

    getDisplayNumber() {

    }

    updateDisplay() {
        this.currentOperand.textContent = this.currentOperand

    }
}


const calculatorEl = document.querySelector('.calculator')
// define the keys 
const keys = calculatorEl.querySelector('.Keys')
const numberBtn = calculatorEl.querySelector('[data-type=number]')
const operationBtn = calculatorEl.querySelector('[data-type=operation]')
const clearBtn = calculatorEl.querySelector('[data-type=clear]')
const deletBtn = calculatorEl.querySelector('[data-type=delete]')
// define the display
const display = calculatorEl.querySelector('.display')
const currentOperand = display.querySelector('.currentOperand')
const previousOperand = display.querySelector('.previousOperand')

const calculator = new Calculator(previousOperand, currentOperand)

numberBtn.forEach(button => {
    button.addEventListner('click', (event) =>{
        // if(!event.target.closest('button')) return
        let key= event.target
        calculator.appenNumber(key.textContent)
        calculator.updateDisplay()
        console.log(key)
    })
});





// keys.addEventListener('click', event => {
//     if(!event.target.closest('button')) return
//     const key = event.target
//     const keyValue = key.textContent
//     const {type} = key.dataset
//     const { previousKeyType } = calculator.dataset
//     // overwrite on the oprent and display
    
//     const currentOperandValue = currentOperand.textContent
//     // const previousOperandValue = previousOperand.textContent

//     if(type == 'number'){
        
//         //concatenating number on first operand
//         if(currentOperandValue == '0'){
//             currentOperand.textContent = keyValue
//         } else if (previousKeyType == 'operation'){
//             previousOperand.textContent = currentOperand.textContent
//             currentOperand.textContent = keyValue
//         }
//         else{
//             currentOperand.textContent = currentOperandValue + keyValue
//         }
//     }

//     if(type =='operation'){
//         console.log(key)
//     }

//     if (type == evaluation){
//         //preform a calculation


//     }
//     calculator.dataset.previousKeyType = type
// })

