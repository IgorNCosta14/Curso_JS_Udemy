function criaMultiplicador (multiplicador) {
    // multiplicador
    function multiplicacao(n) {
        return n * multiplicador;
    }

    return multiplicacao;
}

const dumplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadruplica = criaMultiplicador(4)

console.log(dumplica(2))
console.log(triplica(2))
console.log(quadruplica(2))

