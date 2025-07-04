const BotaoDeleta = () => { 
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', deletarTarefa)

    return botaoDeleta
}

const deletarTarefa = (evento) => { 
    const botaoDeleta = evento.target
    
    const tarefaCompleta = botaoDeleta.parentElement

    tarefaCompleta.remove()

    return botaoDeleta

}

export default BotaoDeleta
//Aqui é o botão de deletar tarefas, para deixar mais fácil para a equipe editar, os botões estão separados do main.js//