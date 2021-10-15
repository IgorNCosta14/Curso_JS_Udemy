// Função recursiva, e uma função que vai se chamar infinitamente ou até um limiter determinado.
function recursiva(max) {
    console.log(max)
    if (max >= 10) return;
    max++;
    ;
    recursiva(max);
}

recursiva(0);