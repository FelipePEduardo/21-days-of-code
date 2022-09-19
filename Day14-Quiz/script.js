let title = document.querySelector("h1");
let instructions = document.querySelector("#instructions");
let warning = document.querySelector("#warning");
//let answers = document.querySelector("#answers");
let points = 0 // pontos para o placar
let scoreboard = 0 // placar

// Question
let numQuestion = document.querySelector("#numQuestion");
let ask = document.querySelector("#ask");

// Alternatives
let a = document.querySelector("#a") 
let b = document.querySelector("#b")
let c = document.querySelector("#c")

// Article com class questions
let articleQuestions = document.querySelector(".questions")
// ol li com alternativas
let alternatives = document.querySelector("#alternatives")

const q0 = {
  numQuestion: 0,
  ask: "Pergunta",
  alternativeA : "Alternativa A",
  alternativeB : "Alternativa B",
  alternativeC : "Alternativa C",
  correct : "0",
}

const q1 = {
  numQuestion: 1,
  ask: "HTML é o mesmo que...",
  alternativeA : "Hi Thanks, Much Love",
  alternativeB : "How To Make language",
  alternativeC : "HyperText Markup Language",
  correct : "HyperText Markup Language",
}

const q2 = {
  numQuestion: 2,
  ask: "CSS é o mesmo que...",
  alternativeA : "Cousin Sister Sound",
  alternativeB : "Cascading Style Sheets",
  alternativeC : "Cascading Sounds Sheets",
  correct : "Cascading Style Sheets",
}

const q3 = {
  numQuestion: 3,
  ask: "function() significa...",
  alternativeA : "Fundação",
  alternativeB : "Função",
  alternativeC : "Fonte",
  correct : "Função",
}

const q4 = {
  numQuestion: 4,
  ask: "Você gostou da NLW eSports",
  alternativeA : "Não",
  alternativeB : "Não",
  alternativeC : "Óbvio",
  correct : "Óbvio",
}

const q5 = {
  numQuestion: 5,
  ask: "O Brasil se localiza em qual continente?",
  alternativeA : "África",
  alternativeB : "Europa",
  alternativeC : "América",
  correct : "América",
}

// Constante com array de objetos com todas as questões 
const questions = [q0, q1, q2, q3, q4, q5]

let number = document.querySelector("#number")
let total = document.querySelector("#total")

number.textContent = q1.numQuestion

let totalQuestions = (questions.length)-1
//console.log("Total de questões" + totalQuestions)
total.textContent = totalQuestions

// Montar a 1a questão completa, para iniciar o Quiz
numQuestion.textContent = q1.numQuestion
ask.textContent = q1.ask
a.textContent = q1.alternativeA
b.textContent = q1.alternativeB
c.textContent = q1.alternativeC

// Configurar o value inicial da 1a questão completa 
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

// Para montar as proximas questões
function nextQuestion(nQuestion) {
  number.textContent = nQuestion
  numQuestion.textContent = questions[nQuestion].numQuestion
  ask.textContent = questions[nQuestion].ask
  a.textContent = questions[nQuestion].alternativeA
  b.textContent = questions[nQuestion].alternativeB
  c.textContent = questions[nQuestion].alternativeC
  a.setAttribute('value', nQuestion+'A')
  b.setAttribute('value', nQuestion+'B')
  c.setAttribute('value', nQuestion+'C')
}

function blockAlternatives() {
  a.classList.add('block')
  b.classList.add('block')
  c.classList.add('block')
}

function unlockAlternatives() {
  a.classList.remove('block')
  b.classList.remove('block')
  c.classList.remove('block')
}

function checkIfRight(nQuestion, answer) {
  let numberOfQuestion = nQuestion.value
  //console.log("Questão " + numberOfQuestion)

  let answerChoosed = answer.textContent
  //console.log("RespU" + answerChoosed)

  let right = questions[numberOfQuestion].correct
  //console.log("RespC" + right)

  if(answerChoosed == right){
    points += 10
  }

  // Atualizar placar
  scoreboard = points
  instructions.textContent = "Pontos " + scoreboard

  // bloquear a escolha de opções
  blockAlternatives()

  setTimeout(function(){
    next = numberOfQuestion+1

    if(next > totalQuestions) {
      //console.log("Fim de jogo!")
      endGame()
    } else {
      nextQuestion(next)
    }
  }, 250)
  unlockAlternatives()
}

function endGame() {
  instructions.textContent = "Fim de jogo!"
  numQuestion.textContent = ""

  let pont = ''
  points == 0 ? pont = 'ponto' : pont = "pontos"

  ask.textContent = "Você conseguiu " + points + " " + pont

  warning.textContent = "Você conseguiu " + points + " " + pont

  a.textContent = ""
  b.textContent = ""
  c.textContent = ""

  a.setAttribute('value', '0')
  b.setAttribute('value', '0')
  c.setAttribute('value', '0')

  
  // Ocultar o article da questão
  articleQuestions.style.display = 'none'
  
  setTimeout(function() {
    points = 0 // zerar placar
    location.reload();
  },2000)
}