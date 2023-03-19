function login() {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    if(username == 'bruna' && password == 'bruninha') {
        window.location.href = "pages/tela.html"
        console.log('aqui')
    } else {
        document.getElementById('loginIncorreto').innerHTML = 'Senha Incorreta'
    }
}