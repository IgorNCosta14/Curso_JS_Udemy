// Função construtora -> objetos
// Função construtora -> objetos
// Contrutora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
    //Atributos ou métodos Privados
    const ID = 123456;
    const metodoInterno = function() {};

    //Atributos ou métodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function() {
        console.log('Sou um método')
    };
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');
p1.metodo();