window.onload = () => {

    function trocaImagem (caminhoImagem) {
        var imagem = document.getElementById("imagem")
        imagem.src = caminhoImagem     

    }

    function insereTexto(titulo, descricao) {
        var estacao = document.getElementById("titulo-estacao")
        estacao.innerText = titulo
        var texto = document.getElementById("descricao-estacao")
        texto.innerText = descricao
    }
   
    const data = document.getElementById("data")
    data.addEventListener("change", (e) => {
        var outonoInicio = new Date('03-22')
        var outonoFim = new Date('06-21')

        var invernoInicio = new Date('06-22')
        var invernoFim = new Date('09-21')

        var primarevaInicio = new Date('09-22')
        var primaveraFim = new Date('12-21')

        var dataAtual = new Date(data.value.slice(-5))

        if (dataAtual >= outonoInicio && dataAtual <= outonoFim) {
            trocaImagem("./images/outono.webp")
            insereTexto("Outono", `O outono é uma estação do ano que ocorre após o verão e antes do inverno. 
                Tem início a partir do momento em que há o chamado equinócio de outono, fenômeno em que dias e noites têm o mesmo tempo de duração. No Hemisfério Norte, o outono inicia-se no dia 22 e 23 de setembro e, no Hemisfério Sul, no dia 20 e 21 de março.`)
        } else if (dataAtual >= invernoInicio && dataAtual <= invernoFim) {
            trocaImagem("./images/inverno.jpg")
            insereTexto("Inverno", `O inverno é a estação mais fria do ano.
                A principal característica do inverno: frio extremo. Além disso, é bastante comum a presença de geadas e nevascas. Quando a temperatura das nuvens está abaixo de 0 ºC, o vapor d'água se condensa, dando origens a cristais de gelo, que caem em forma de neve.`)
        } else if (dataAtual >= primarevaInicio && dataAtual <= primaveraFim) {
            trocaImagem("./images/primavera.jpg")
            insereTexto("Primavera", `A primavera é uma estação do ano.
                Essa estação é caracterizada por apresentar dias com temperaturas amenas, além disso, em algumas regiões, também ocorre a floração de diversas plantas. A primavera inicia-se logo após o inverno e encerra-se dando início à estação do verão.`)
        } else {
            trocaImagem("./images/verao.jpg")
            insereTexto("Verão", `O verão é uma das quatro estações do ano que começa depois da primavera e termina com a chegada do outono.
                Ele é marcado pelo aumento das temperaturas e permanece durante 3 meses (do final de dezembro até o final de março). No Brasil, o verão tem início em 21 ou 22 de dezembro e acaba em 20 ou 21 de março.`)
        }

    })


}