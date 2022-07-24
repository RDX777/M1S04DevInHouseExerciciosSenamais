window.onload = () => {
    const botao = document.getElementById("verificar")
    botao.addEventListener("click", () => {
        var numero = document.getElementById("numero")
        var mensagem = document.getElementById("resultado")

        mensagem.innerText = numero.value % 2 == 0 ? "O numero digitado é par" : "O numero digitado é impar"

    })
}