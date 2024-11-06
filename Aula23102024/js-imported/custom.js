console.log("Arquivo carregado com sucesso!");


/* exemplo de matriz
let resultMatriz = matriz(5, 6);
console.log(resultMatriz);
*/

function clickButton() {
    console.log("botão clicado!");
    console.log(getTextValue());
    setFieldValue("campo setado!");
    generateHTML();
}


function getTextValue() {
    return document.querySelector("#text").value;
    //return document.getElementById("text").value;    
}

function setFieldValue(text) {
    document.querySelector("#text").value = text;
}

function generateHTML() {
    let novoTitulo = document.createElement("h1");
    novoTitulo.textContent = "Título criado com JavaScript";

    // Criando um parágrafo
    let novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = "Este parágrafo foi gerado dinamicamente.";

    // Inserindo os novos elementos no container
    let container = document.getElementById("output");
    container.appendChild(novoTitulo);
    container.appendChild(novoParagrafo);

    //document.getElementById("output").innerHTML = "<h1>Olá mundo!</h1>";
}


function matriz(linhas, colunas) {
    // Cria uma matriz vazia
    let matriz = [];

    // Loop para preencher as linhas
    for (let i = 0; i < linhas; i++) {
        // Adiciona uma nova linha (que é um array)
        let linha = [];

        // Loop para preencher as colunas da linha atual
        for (let j = 0; j < colunas; j++) {
            // Adiciona um valor na coluna (pode ser qualquer valor, aqui usamos 0)
            linha.push(0);
        }

        // Adiciona a linha completa na matriz
        matriz.push(linha);
    }
    return matriz;
}