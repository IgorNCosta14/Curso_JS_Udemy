// IIFE -> Immediately Invoked Function Expression

//A função a seguir é auto-invocada, mas ela entra no escopo global.
//Potanto elapode afetar outras funções.
function qualquerCoisa(){
    console.log(11123455);
}
qualquerCoisa();

// Abaixo temo um IIFE, por ser fora do escopo global ela não corre o risco de afetar outra variaveis.

const nome = 'Igor';

(function() {
    const nome = 'Luiz';
    console.log(nome)
})();  // Os argumentos vão dentro dos parenteses no final.

console.log(nome)   // A const nome dentro da IIFE não afeta const fora dela


