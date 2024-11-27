let display = document.getElementById('tela');
let currentOperand = '';
let previousOperand = '';
let operation = null;

function adicionaNumero(number) {
    currentOperand += number;
    atualizaTela();
}

function escolherOperacao(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        compute();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentOperand = computation;
    operation = null;
    previousOperand = '';
    atualizaTela();
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = null;
    atualizaTela();
}

function atualizaTela() {
    display.value = currentOperand;
}
