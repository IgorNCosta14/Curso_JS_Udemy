exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="qualquercoisa"><br>
    Outro campo: <input type="text" name="aquioutrocampo">
    <button>Olá mundo</button>
    </form>
    `)
};

exports.trataPost = (req, res) => {
    res.send('Ei, eu sou sua nova rota de Post.');
};