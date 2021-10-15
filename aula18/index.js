const pessoa = {
    nome: 'Igor',
    sobrenome: 'Nascimento',
    idade: 26,

    fala() {
        console.log('Olá mundo');
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    },

    Incremento(){
        this.idade++;
    }
};
pessoa.fala();


let x = {...y}
let x = y;
