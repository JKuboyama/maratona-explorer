const elementoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  'Com certeza!',
  'Não tenho tanta certeza.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Vai acontecer!',
  'Me pergunte novamente outro dia.',
  'Sim, definitivamente!',
  'Minha resposta é uma só: NÃO!',
  'Tudo depende do que vc vai almoçar hoje...',
  'Melhor não te dizer agora.',
  'Acho possível, mas pouco provável.',
  'As vozes na minha cabeça dizem que não.',
  'Provavelmente.',
  'Seu futuro está muito nebuloso...',
  'Boas chances.',
  'Muito difícil.',
  'Sim.',
  'Não.',
  'Foque no que você quer e pergunte novamente.',
  'Seu tataravô está aqui comigo e disse que sim.',
]

// clicar em fazer pergunta
function fazerPergunta() {
  if (inputPergunta.value == '') {
    alert('Digite sua pergunta')
    return
  }

  buttonPerguntar.setAttribute('disabled', true)

  const pergunta = '<div>' + inputPergunta.value + '</div>'

  // gerar numero aletorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1

  // sumir a resposta depois de 3 segundos
  setTimeout(function () {
    elementoResposta.style.opacity = 0
    buttonPerguntar.removeAttribute('disabled')
  }, 3000)
}
