window.onload = () => {
    const classificar = document.getElementById("classificar")
    classificar.addEventListener("click", () => {
        const idade = document.getElementById("idade")
        const resultado = document.getElementById("resultado")

        if (idade.value <= 15) {
            resultado.innerText = "Classificação: Joven"
        } else if (idade.value > 15 && idade.value <= 64) {
            resultado.innerText = "Classificação: Adulto"
        } else if (idade.value > 65 ) {
            resultado.innerText = "Classificação: Idoso"
        }
    })
}