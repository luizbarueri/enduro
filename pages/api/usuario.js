async function usuario(request, response) {
    const DataAtual = new Date();

    const usuarioSelecionado = await fetch('http://localhost:3000/api/cadastro')
    const usuarioSelecionadojson = await usuarioSelecionado.json();
    const nomeUsuario = usuarioSelecionadojson.nome;

    response.json(
        {
            Nome: nomeUsuario
        }
    );
}

export default usuario