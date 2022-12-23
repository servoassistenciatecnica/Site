const buttom = document.querySelector('button');
const addloadind = () =>{
buttom.innerHTML = '<img src="img/iconpage.ico" alt="" srcset="" class="imgsubmit">';
}

const removeloadind = () =>{
    buttom.innerHTML = "ENVIAR";
    location.href = 'https://servoassistenciatecnica.github.io/Site/#';
    }

const inforsubmit = (event) =>{
   event.preventDefault();
   addloadind();

    const name = document.querySelector('input[name=nome]').value;
    const lastname = document.querySelector('input[name=sobrenome]').value;
    const email = document.querySelector('input[name=email]').value;
    const text = document.querySelector('textarea[name=mensagem]').value;

    fetch("https://api.sheetmonkey.io/form/r2JjtdaRLARrAvynsNB6kf", {

    method:'post',
    headers:{
        'accept' : 'application/json',
        'Content-type' : 'application/json',
    },

    body: JSON.stringify( {
        name, lastname, email, text}),
    }).then(() => removeloadind())
}

document.querySelector('form').addEventListener('submit', inforsubmit);

