//Factory function (Função fábrica)

function criaPessoa(nome, sobrenome, a, p){
    return {
        nome, 
        sobrenome,

        // Getter
        get nomeCompleto() {
           return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala: function(assunto= 'falando sobre nada') {
            return `${nome} pesa ${this.peso} é está falando ${assunto}.`
        },
        altura: a,
        peso: p,

        // Getter
        get imc() {
            const indice = this.peso / (this.altura **2);
            return indice.toFixed(2); //fixar 2 casas
        }
    };
}

const p1 = criaPessoa('Igor', 'Nascimento', 1.8, 80)
//console.log(p1.nome)
//console.log(p1.sobrenome)
p1.nomeCompleto = 'maria Oliveira Silva'
console.log(p1.nomeCompleto)
console.log(p1.nome)
console.log(p1.sobrenome)
