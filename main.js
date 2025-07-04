import BotaoConclui from './componentes/concluiTarefa.js' //importa a funçao que cria o botão de concluir tarefas
import BotaoDeleta from './componentes/deletaTarefa.js' //importa a funçao que cria o botão de deletar tarefas
    
    //declaro uma função 'criarTarefa' que será chamada com o botão de adicionar tarefa
    const criarTarefa = (evento) => {
    
    //serve para impedir que o navegador fique recarregando a página cada vez que adiciono uma nova tarefa
    evento.preventDefault()


    //aqui eu pego os data-atributes para as variaveis atráves do doom
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value //salva o texto digitado no input

    //aqui é onde cria um elemento que vai adicionar ao 'li', que vai representar uma nova nota no bloco de notas
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${valor}</p>` //aqui é onde vai o texto digitado, o p está dentro do 'li', que será o texto da nota

    tarefa.innerHTML = conteudo

    //esses apeendChild meio que criam novas notas dentro de cada li, com as regras de pai e filho no html
    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)
    input.value = " " //limpa a barra de pesquisa depois de adicionar uma nota

} //isso tudo é a tarefa

const novaTarefa = document.querySelector('[data-form-button]') //pega o botão do html que adiciona a tarefa

novaTarefa.addEventListener('click', criarTarefa) //escuta o click para realizar a tarefa. que é criar a nota