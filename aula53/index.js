// escopo global
function retornaFuncao(){
    const nome = 'Luiz'  // escopo mãe
    return function() {  //escopo da função  // esta função ten acesso a 3 escopos o dela, o da função mãe e o global
        return nome  
    };
}

const funcao = retornaFuncao();
console.dir(funcao);