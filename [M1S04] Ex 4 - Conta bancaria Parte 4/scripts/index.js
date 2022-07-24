const contasClientes = [
    {
        id: 1,
        nome: 'Cliente 01',
        saldo: 500,
    },
    {
        id: 2,
        nome: 'Cliente 02',
        saldo: 3000,
    },
    {
        id: 3,
        nome: 'Cliente 03',
        saldo: 5000,
    },
    {
        id: 4,
        nome: 'Cliente 04',
        saldo: 58000,
    },
]

window.onload = () => {

    var cliente = document.getElementById("cliente")
    //carrega todos os dados no select
    contasClientes.map((dados) => {
        var option = document.createElement("option")
        option.setAttribute ("value", dados.id)
        var nome = document.createTextNode(dados.nome)
        option.appendChild(nome)
        cliente.appendChild(option)
    })

    function mensagemSistema(mensagem) {
        const mensagemSistema = document.getElementById("mensagem-sistema")
        mensagemSistema.innerText = "";
        const texto = document.createTextNode(mensagem)
        mensagemSistema.appendChild(texto)
    }

    function sacar(idConta, valorSacar){
        var conta = contasClientes.find((conta) => {
            return conta.id == idConta
        })
        if(valorSacar == 0) {
            mensagemSistema("Valor invalido! Informe um numero maior que zero!")
        } else if(conta.saldo < valorSacar) {
            mensagemSistema(`Saldo insuficiente. Seu saldo é de R$: ${conta.saldo}`)
        } else {
            mensagemSistema("Operacao realizada com sucesso")
            conta.saldo -= valorSacar
        }
    }

    console.log(contasClientes)

}