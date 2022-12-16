    let home = document.getElementById("home")
    let loja = document.getElementById("buttosviewloja")
    let serviços = document.getElementById("serviços")
    let treinamentos = document.getElementById("treinamentos")
    let contatos= document.getElementById("contatos")   
    let viloja = document.getElementById("viewloja")     

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
            loja.style.width = "100vw"
            viloja.style.width = "100vw"
        }else{
            home.style.display = "none"
            serviços.style.display = "none"
            treinamentos.style.display = "none"
            contatos.style.display = "none"
            loja.style.display = "none"
            loja.style.width = "0vw"
            viloja.style.width = "0vw"
            
            
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