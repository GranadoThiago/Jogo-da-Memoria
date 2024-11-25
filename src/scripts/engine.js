const emojis = [
    "🐱",
    "🐱",
    "🦝",
    "🦝",
    "🦊",
    "🦊",
    "🐶",
    "🐶",
    "🐵",
    "🐵",
    "🦁",
    "🦁",
    "🐯",
    "🐯",
    "🐮",
    "🐮",
];

let openCards = []

// Função para misturar os emojis
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

// Desenhando os cards na tela
for (let i = 0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.onclick = handleClick;
    box.innerHTML = shuffleEmojis[i]
    document.querySelector(".game").appendChild(box);
}

// Função para selecionar os cards
function handleClick() {
  if (openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }
  
  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }
}

// Verificando se os cards são iguais
function checkMatch(param) {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
      openCards[0].classList.add("boxMatch");
      openCards[1].classList.add("boxMatch");
  } else{
      openCards[0].classList.remove("boxOpen");
      openCards[1].classList.remove("boxOpen");
  }
  openCards = [];
  
  if (document.querySelectorAll(".boxMatch").length === emojis.length){
      alert("Você venceu!");
  }
}