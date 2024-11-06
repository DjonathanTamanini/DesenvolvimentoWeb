console.log("javascript carregado!");

//Função
function hello() {
    //console.log("apertei o botão!");
    alert("apertei o botão!");
}

// Função exemplo para buscar um valor de um campo usando o document.getElementById
function getValue() {
    let input = document.getElementById("texto").value;
    console.log(input);
    alert("Olá " + input);
}

// Função que irá somar os dois campos
function soma(valora, valorb) {
    let parseA = parseInt(valora);
    let parseB = parseInt(valorb);

    if (isNaN(parseA) || isNaN(parseB)) {
        alert("Erro ao somar");
    }

    return parseInt(valora) + parseInt(valorb);
}

// Soma os campos
function somaCampos() {
    let texto1 = document.getElementById("texto").value;
    let texto2 = document.getElementById("texto2").value;

    let resultado = soma(texto1, texto2);
    //let resultado = texto1 + texto2;
    console.log(resultado);
}


