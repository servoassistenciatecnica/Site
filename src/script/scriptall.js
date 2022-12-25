function clickmenu () {
        let seta = document.getElementById("arrow_back_ios");
        let menuline = document.getElementById("lineheadernav");
    if (seta.style.transform == 'rotate(0deg)') {
        seta.style.transform = "rotate(272deg)"
        menuline.style.margin = '15%'
    } else {
        seta.style.transform = "rotate(0deg)"
        menuline.style.margin = '5%'
    }

    
}

function loadindpage () {
    var loadpage = document.getElementById("loadind")
    var coteinerafterheader = document.getElementById("coteinerafterheader")

    loadpage.style.display = 'none'
    coteinerafterheader.style.display = 'block'
}

function apizap () {
  location.href = 'https://api.whatsapp.com/send?phone=5541996770932&text=ala%20mane%20deu%20certo'

}