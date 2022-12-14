function openpag(a){
    let displaypag = document.querySelector('.displayed')
    let pag =  new XMLHttpRequest()

    pag.onreadystatechange = () =>{
        if (pag.readyState == 4 && pag.status == 200) {
            displaypag.innerHTML = pag.response
        }
    }

    pag.open('GET', `../pages/${a}.html`,)
    pag.send()
}