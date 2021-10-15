//Declaração de função (function hoisting)
falaOi(); // Podemos fazer a declaração antes da propria função, o JavaScript corrige isso.
function falaOi(){
    console.log('Oie');
}

//First-class objects (Objeto de primeria classe)
//Function Expression
const souUmDado = function() {
    console.log('Sou um dado.');
};
souUmDado();

// arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto

const obj = {
    falar: function() {
        console.log('Estou falando...');
    }, 
    falarCurto() {
        console.log('Estou falando curto...');
    }
};
obj.falar();
obj.falarCurto();