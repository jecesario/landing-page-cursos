/************************************************
Validando call to action da section HTML
************************************************/
let emailHtml = document.querySelector('#emailHtml');
let emailHtmlMsg = document.querySelector('#emailHtmlMsg');
let emailHtmlOk = false;

function validaEmailHtml() {

    if(emailHtml.value.indexOf('@') == '-1' || emailHtml.value.indexOf('.') == '-1') {
        emailHtmlMsg.innerHTML = 'Digite um email válido';
        emailHtmlMsg.style.color = 'red';
        emailHtmlOk = false;
    } else {
        emailHtmlMsg.innerHTML = '';
        emailHtmlOk = true;
    }

    if(emailHtml.value == "") {
        emailHtmlMsg.style.display = 'none';
    } else {
        emailHtmlMsg.style.display = 'block';
    }
}

function enviaEmailHtml() {

    let alertaHtml = document.querySelector('#alertaHtml');
    let classes = alertaHtml.classList;    

    if(emailHtmlOk) {
        classes.remove('alert-danger');
        classes.add('alert-success');
        alertaHtml.style.display = 'block';
        alertaHtml.innerHTML = 'Curso enviado, verifique sua caixa de email';
        emailHtml.value = '';
        return false;
    } else {
        classes.remove('alert-success');
        classes.add('alert-danger');
        alertaHtml.style.display = 'block';
        alertaHtml.innerHTML = 'Informe um email válido';
        emailHtmlMsg.innerHTML = '';
        return false;
    }
}

/************************************************
Validando call to action da section CSS
************************************************/

let emailCss = document.querySelector('#emailCss');
let emailCssMsg = document.querySelector('#emailCssMsg');
let emailCssOk = false;

function validaEmailCss() {

    if(emailCss.value.indexOf('@') == '-1' || emailCss.value.indexOf('.') == '-1') {
        emailCssMsg.innerHTML = 'Digite um email válido';
        emailCssMsg.style.color = 'red';
        emailCssOk = false;
    } else {
        emailCssMsg.innerHTML = '';
        emailCssOk = true;
    }

    if(emailCss.value == "") {
        emailCssMsg.style.display = 'none';
    } else {
        emailCssMsg.style.display = 'block';
    }
}

function enviaEmailCss() {

    let alertaCss = document.querySelector('#alertaCss');
    let classes = alertaCss.classList;    

    if(emailCssOk) {
        classes.remove('alert-danger');
        classes.add('alert-success');
        alertaCss.style.display = 'block';
        alertaCss.innerHTML = 'Curso enviado, verifique sua caixa de email';
        emailCss.value = '';
        return false;
    } else {
        classes.remove('alert-success');
        classes.add('alert-danger');
        alertaCss.style.display = 'block';
        alertaCss.innerHTML = 'Informe um email válido';
        emailCssMsg.innerHTML = '';
        return false;
    }
}

/************************************************
Validando call to action da section JS
************************************************/

let emailJs = document.querySelector('#emailJs');
let emailJsMsg = document.querySelector('#emailJsMsg');
let emailJsOk = false;

function validaEmailJs() {

    if(emailJs.value.indexOf('@') == '-1' || emailJs.value.indexOf('.') == '-1') {
        emailJsMsg.innerHTML = 'Digite um email válido';
        emailJsMsg.style.color = 'red';
        emailJsOk = false;
    } else {
        emailJsMsg.innerHTML = '';
        emailJsOk = true;
    }

    if(emailJs.value == "") {
        emailJsMsg.style.display = 'none';
    } else {
        emailJsMsg.style.display = 'block';
    }
}

function enviaEmailJs() {

    let alertaJs = document.querySelector('#alertaJs');
    let classes = alertaJs.classList;    

    if(emailJsOk) {
        classes.remove('alert-danger');
        classes.add('alert-success');
        alertaJs.style.display = 'block';
        alertaJs.innerHTML = 'Curso enviado, verifique sua caixa de email';
        emailJs.value = '';
        return false;
    } else {
        classes.remove('alert-success');
        classes.add('alert-danger');
        alertaJs.style.display = 'block';
        alertaJs.innerHTML = 'Informe um email válido';
        emailJsMsg.innerHTML = '';
        return false;
    }
}

/************************************************
Validando form de contato
************************************************/

let nomeContato = document.querySelector('#nomeContato');
let nomeContatoMsg = document.querySelector('#nomeContatoMsg');
let nomeContatoOk = false;

function validaNomeContato() {

    if(nomeContato.value.length < 3) {
        nomeContatoMsg.innerHTML = 'Informe um nome válido';
        nomeContatoMsg.style.color = 'red';
        nomeContatoOk = false;
    } else {
        nomeContatoMsg.innerHTML = '';
        nomeContatoOk = true;
    }

    if(nomeContato.value == "") {
        nomeContatoMsg.style.display = 'none';
    } else {
        nomeContatoMsg.style.display = 'block';
    }

}

let emailContato = document.querySelector('#emailContato');
let emailContatoMsg = document.querySelector('#emailContatoMsg');
let emailContatoOk = false;

function validaEmailContato() {

    if(emailContato.value.indexOf('@') == '-1' || emailContato.value.indexOf('.') == '-1') {
        emailContatoMsg.innerHTML = 'Digite um email válido';
        emailContatoMsg.style.color = 'red';
        emailContatoOk = false;
    } else {
        emailContatoMsg.innerHTML = '';
        emailContatoOk = true;
    }

    if(emailContato.value == "") {
        emailContatoMsg.style.display = 'none';
    } else {
        emailContatoMsg.style.display = 'block';
    }

}

let mensagemContato = document.querySelector('#mensagemContato');
let mensagemContatoMsg = document.querySelector('#mensagemContatoMsg');
let mensagemContatoOk = false;
mensagemContato.style.resize = 'none';

function validaMensagemContato() {

    let contador = document.querySelector('#contador');
    contador.innerHTML = mensagemContato.value.length;

    if(mensagemContato.value.length > 200) {
        mensagemContatoMsg.innerHTML = 'O campo mensagem não pode ter mais que 200 caracteres';
        mensagemContatoMsg.style.color = 'red';
        mensagemContatoOk = false;
    } else {
        mensagemContatoMsg.innerHTML = '';
        mensagemContatoOk = true;
    }

    if(mensagemContato.value == "") {
        mensagemContatoMsg.style.display = 'none';
        contador.style.display = 'none';
        mensagemContatoOk = false;
    } else {
        mensagemContatoMsg.style.display = 'block';
        contador.style.display = 'block';
    }

}

function enviarContato() {

    let alertaContato = document.querySelector('#alertaContato');
    let classes = alertaContato.classList;

    if(nomeContatoOk && emailContatoOk && mensagemContatoOk) {
        classes.remove('alert-danger');
        classes.add('alert-success');
        alertaContato.style.display = 'block';
        alertaContato.innerHTML = 'Mensagem recebida! Em breve entraremos me contato';
        emailJs.value = '';
        return false;
    } else {
        classes.remove('alert-success');
        classes.add('alert-danger');
        alertaContato.style.display = 'block';
        alertaContato.innerHTML = 'Por favor, revise os campos e envie o formulário novamente';
        emailJsMsg.innerHTML = '';
        return false;
    }    

}