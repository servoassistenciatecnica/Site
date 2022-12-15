    let home = document.getElementById("home")
    let loja = document.getElementById("loja")
    let serviços = document.getElementById("serviços")
    let treinamentos = document.getElementById("treinamentos")
    let contatos= document.getElementById("contatos")      

    function openhome(){
        if (loja.style.display == "none") {
            home.style.display = "none"
            serviços.style.display = "none"
            treinamentos.style.display = "none"
            contatos.style.display = "none"
            loja.style.display = "none"
        }else{
            home.style.display = "none"
            serviços.style.display = "none"
            treinamentos.style.display = "none"
            contatos.style.display = "none"
            loja.style.display = "none"
        }
    }

    function openloja(){
        if (loja.style.display == "none") {
            home.style.display = "none"
            serviços.style.display = "none"
            treinamentos.style.display = "none"
            contatos.style.display = "none"
            loja.style.display = "flex"
        }else{
            home.style.display = "none"
            serviços.style.display = "none"
            treinamentos.style.display = "none"
            contatos.style.display = "none"
            loja.style.display = "flex"
        }
    }

    function openserviços(){
        if (loja.style.display == "none") {
            home.style.display = "none"
            serviços.style.display = "block"
            treinamentos.style.display = "none"
            contatos.style.display = "none"
            loja.style.display = "none"
        }else{
            home.style.display = "none"
            serviços.style.display = "block"
            treinamentos.style.display = "none"
            contatos.style.display = "none"
            loja.style.display = "none"
        }

    }

    function opentreinamentos(params) {
        if (loja.style.display == "none") {
            home.style.display = "none"
            serviços.style.display = "none"
            treinamentos.style.display = "block"
            contatos.style.display = "none"
            loja.style.display = "none"
        }else{
            home.style.display = "none"
            serviços.style.display = "none"
            treinamentos.style.display = "block"
            contatos.style.display = "none"
            loja.style.display = "none"
        }
    }

    function opencontatos() {
        if (loja.style.display == "none") {
            home.style.display = "none"
            serviços.style.display = "none"
            treinamentos.style.display = "none"
            contatos.style.display = "block"
            loja.style.display = "none"
        }else{
            home.style.display = "none"
            serviços.style.display = "none"
            treinamentos.style.display = "none"
            contatos.style.display = "block"
            loja.style.display = "none"
        }
    }








/*
    if (cont.style.display == "none") {
        cont.style.display = "block"
    }else{
        cont.style.display = "block"
    }
    */