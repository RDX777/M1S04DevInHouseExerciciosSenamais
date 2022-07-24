const contasClientes = [
    {
        id: 1,
        senha: '1234',
        nome: 'Cliente 01',
        saldo: 500,
    },
    {
        id: 2,
        senha: 'Senh@1234!',
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
        senha: '@klsjhfaloi45',
        nome: 'Cliente 04',
        saldo: 58000,
    },
]

console.log(contasClientes)

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
        var conta = validaCliente(idConta)
        if(valorSacar == 0) {
            mensagemSistema("Valor invalido! Informe um numero maior que zero!")
        } else if(conta.saldo < valorSacar) {
            mensagemSistema(`Saldo insuficiente. Seu saldo é de R$: ${conta.saldo}`)
        } else {
            mensagemSistema("Operacao realizada com sucesso")
            conta.saldo -= valorSacar
        }
    }

    function depositar(idConta, valorDepositar){
        var conta = validaCliente(idConta)
        if(valorDepositar <= 0) {
            mensagemSistema("Valor invalido! Informe um numero maior que zero!")
        } else {
            mensagemSistema("Operacao realizada com sucesso")
            conta.saldo += valorDepositar
        }
    }

    function validaCliente(id){
        var conta = contasClientes.find((conta) => {
            return conta.id == id
        })
        return conta
    }

    const confirmar = document.getElementById("form")
    confirmar.addEventListener("submit", (e) => {
        e.preventDefault()
        mensagemSistema("")

        const cliente = e.target.cliente
        const senha = e.target.senha
        const valor = e.target.valor
        const operacao = e.target.operacao

        if (! cliente.value || ! senha.value || ! valor.value || ! operacao.value) {
            mensagemSistema("Favor preencher todos os campos!")
        } else if (! validaCliente(cliente.value)) {
            mensagemSistema("Cliente Invalido")
        } else {
            const cCliente = validaCliente(cliente.value)
            if (senha.value == cCliente.senha) {
                switch (operacao.value) {
                    case "sacar":
                        sacar(cliente.value, parseInt(valor.value)) 
                        break;
                    case "depositar":
                        depositar(cliente.value, parseInt(valor.value)) 
                        break;
                } 
            } else {
                mensagemSistema("Senha Invalida")
            } 
        }
        console.log(contasClientes)
    })

}