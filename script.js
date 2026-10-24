let display = document.getElementById("display");

let inputAtual = ""
let operadorLast = ""
let operadorAtual = ""

function addNumber(valor) {
    if (inputAtual === "0" && valor !== ".") {
        inputAtual = valor;
    } else {
        inputAtual += valor
    }

    display.textContent = inputAtual;
}

function addOperador(Operador) {
    if (inputAtual === "" && Operador !== ".") return

    let operadorLast = inputAtual.slice(-1);

    const operadores = ["+", "-", "*", "/", ".", "%"];
    if (operadores.includes(operadorLast)) {
        return;
    }

    inputAtual += Operador;

    display.textContent = inputAtual;
}

function calcular() {
    try {

        if (inputAtual.includes("%")) {
            inputAtual = inputAtual.replace(/%/g, '/100*')
        }
        
        let result = eval(inputAtual);

        if (!isFinite(result)) {
            display.textContent = "Divisão Impossível";
            inputAtual = ""
            return
        }
        inputAtual = String(result)
        display.textContent = inputAtual;
    } catch(error) {
        display.textContent = "ERRO";
        inputAtual = "";
    }
}

function limparDisplay() {
    inputAtual = "";
    display.textContent = inputAtual;
}