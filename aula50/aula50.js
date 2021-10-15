// Variavel arguments recebe qualquer argumento que for enviado. 
function funcao(a, b, c) {  // () parâmetros
    let total = 0
    for (let argumento of arguments) {
        total+= argumento
    }
    console.log(total)
    console.log(a + b * c)
}
funcao (1, 2, 3, 4, 5, 6, 7)    // () argumentos