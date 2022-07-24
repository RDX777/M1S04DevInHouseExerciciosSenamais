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
}