let email = document.querySelector('#email');
let msg = document.querySelector('#emailHelp');
let emailOk = false;
function validaEmail() {

    if(email.value.indexOf('@') == '-1' || email.value.indexOf('.') == '-1') {
        msg.innerHTML = 'Digite um email válido';
        msg.style.color = 'red';
        emailOk = false;
    } else {
        msg.innerHTML = 'Email OK';
        msg.style.color = 'green';
        emailOk = true;
    }
    
}