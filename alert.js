function alerta(){
    const nome = document.querySelector('#nome').value
    const assunto = document.querySelector('#assunto').value
    const email = document.querySelector('#email').value
    const sobrenome = document.querySelector('#sobrenome').value

    if(!nome || !assunto || !email || !sobrenome){
        console.log(nome, assunto, email, sobrenome)
        window.alert('Por favor, preencha os campos obrigatórios!')
    } else {
         window.alert(`Obrigado ${nome}, Recebemos sua mensagem, Aguarde nosso retorno! (mensagem de teste)`)
    }
}

