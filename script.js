function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector("#txtano")
    var res = document.querySelector("#res")
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("verifique os dados e tente novamente")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""

        var img = document.createElement("img")
        img.setAttribute("id", "foto")


        if (fsex[0].checked) {
            genero = " um Homem"
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute("src", "Sexo Maculino/Bebe Homem.png")

            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "Sexo Maculino/Jovem Homem.png")

            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "Sexo Maculino/Adulto Homem.png")
            } else {
                //idoso
                img.setAttribute("src", "Sexo Maculino/Idoso Homem.png")
            }

        } else if (fsex[1].checked) {
            genero = " uma Mulher"
            img.setAttribute("src", "Sexo Feminino/Bebe Mulher.png")

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute("src", "Sexo Feminino/Bebe Mulher.png")

            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "Sexo Feminino/Jovem Mulher.png")

            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "Sexo Feminino/Adulta Mulher.png")
            } else {
                //idoso
                img.setAttribute("src", "Sexo Feminino/Idosa Mulher.png")
            }
        }
        res.innerHTML = `<strong> Você é  ${genero}, com ${idade} anos! </strong>`
        res.style.textAlign = "center"
        res.appendChild(img)
    }


}
function limpar() {
    res.innerHTML = "preencha seus acima"
}
function carregar() {
    var data = new Date()
    var hora = data.getHours()
    var txthoras = document.querySelector("#horas")
    if (hora >= 0 && hora < 12) {
        txthoras.innerHTML = `Agora são: <strong>${hora}</strong> horas </br> -------- Manhã -------`
    } else if (hora < 19) {
        txthoras.innerHTML = `Agora são: <strong>${hora}</strong> horas </br> ---------- Tarde --------`
    } else {
        txthoras.innerHTML = `Agora são: <strong>${hora}</strong> horas </br> ---------- Noite ---------`
    }

}