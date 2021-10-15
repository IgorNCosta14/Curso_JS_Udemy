function formulario () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
    
    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.fnome');
        const sobrenome = form.querySelector('.fsobren');
        const peso = form.querySelector('.fpeso');
        const altura = form.querySelector('.faltura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas)

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}
formulario();