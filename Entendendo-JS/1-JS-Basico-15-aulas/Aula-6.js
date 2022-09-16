//Tornando seu programa um robô incansável

//Desafio 6:

//No nosso exemplo da calculadora criar uma rotina que fique sempre perguntando os valores 
//ate que seja digitado a letra N em qualquer valor (indicando uma condicao de parada).


while (true) {
    x = prompt("Digite o valor de x: ");
    y = prompt("Digite o valor de y: ");

    if ( x == "N" || y == "N") {
        break;
    }
    var resultado = Number(x) + Number(y);
    
    alert("O resultado da some é: " + resultado);

}
console.log("calculadora encerrada")