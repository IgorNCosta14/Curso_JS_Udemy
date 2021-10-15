//Factory function (Função fábrica)
function criaPessoa(nome, sobrenome, a, p){
    return {
        nome, 
        sobrenome,
        fala: function(assunto) {
            return `${nome} pesa ${this.peso} é está falando ${assunto}.`
        },
        altura: a,
        peso: p,
        imc() {
            const indice = this.peso / (this.altura **2);
            return indice.toFixed(2); //fixar 2 casas
        }
    };
}

const p1 = criaPessoa('Igor', 'Nascimento', 1.8, 80)
console.log(p1.imc())
console.log(p1.fala('falando sobre JS'))