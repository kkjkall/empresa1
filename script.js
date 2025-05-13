function comprar() {
    alert("Produto adicionado ao carrinho!");
}

function validarFormulario() {
    const nome = document.getElementById("nome").value;
    const cep = document.getElementById("cep").value;

    if (nome === "" || cep === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    buscarEndereco(cep);
    return false; // impede envio real do formulário
}

function buscarEndereco(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(data => {
            if (data.erro) {
                document.getElementById("endereco").innerText = "CEP não encontrado.";
            } else {
                document.getElementById("endereco").innerText =
                    `Endereço: ${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
            }
        })
        .catch(() => {
            document.getElementById("endereco").innerText = "Erro ao buscar o CEP.";
        });
}
