const appIntro = document.getElementById("app-intro-container");
const appGame = document.getElementById("app-game-container");

const playerName = document.getElementById("name");
const startBtn = document.getElementById("start-btn");
const msjNombre = document.getElementById("msj-nombre");

const player = document.getElementById("player-name");

const playerChoice = document.getElementById("player-choice");
const pcChoice = document.getElementById("pc-choice");
const winMsj = document.getElementById("win-msj");
const score = document.getElementById("score");
const exitBtn = document.getElementById("exit-btn");

const img1Player = document.getElementById("img1-player");
const img2Player = document.getElementById("img2-player");
const img3Player = document.getElementById("img3-player");
const img1P = document.getElementById("img1-p");
const img2P = document.getElementById("img2-p");
const img3P = document.getElementById("img3-p");
const img1Pc = document.getElementById("img1-pc");
const img2Pc = document.getElementById("img2-pc");
const img3Pc = document.getElementById("img3-pc");

const regExp = /^[a-zA-ZÀ-ÿ\s]{2,20}$/;

const values = [
  {
    name : "piedra",
    win : 1,
    lose : 2
  },
  {
    name : "papel",
    win : 3,
    lose : 1
  },
  {
    name : "tijera",
    win : 2,
    lose : 3
  }
]

let playerCount = 0;
let pcCount = 0;

let validar = () => {
  if(regExp.test(playerName.value)){
    appIntro.classList.add("active");
    appGame.classList.remove("active");
    player.innerHTML = playerName.value;
    imprimirScore();
  } else {
    msjNombre.classList.remove("active");
  }
}

const choice = (e) => {

  let choice = e.target.alt
  let pcChoiceValue = parseInt(Math.random()*3+1);

  agregarImg(choice, pcChoiceValue);
  agregarMsj(choice, pcChoiceValue);
  calcularScore();
  imprimirScore();

}

const agregarImg = (choice, pcChoiceValue) => {

  switch (choice) {
    case "piedra":
      img1P.classList.remove("active");
      img2P.classList.add("active");
      img3P.classList.add("active");
      break;
    case "papel":
      img1P.classList.add("active");
      img2P.classList.remove("active");
      img3P.classList.add("active");
      break;
    case "tijera":
      img1P.classList.add("active");
      img2P.classList.add("active");
      img3P.classList.remove("active");
      break;
  };
  switch (pcChoiceValue) {
    case 1:
      img1Pc.classList.add("active");
      img2Pc.classList.add("active");
      img3Pc.classList.remove("active");
      break;
    case 2:
      img1Pc.classList.add("active");
      img2Pc.classList.remove("active");
      img3Pc.classList.add("active");
      break;
    case 3:
      img1Pc.classList.remove("active");
      img2Pc.classList.add("active");
      img3Pc.classList.add("active");
      break;
  }
}

const agregarMsj = (choice, pcChoiceValue) =>{
  values.forEach((x)=>{
    if(x.name == choice){
      if(x.win == pcChoiceValue){
        winMsj.innerHTML = "GANASTE"
      } else if (x.lose == pcChoiceValue){
        winMsj.innerHTML = "PERDISTE"
      } else {
        winMsj.innerHTML = "EMPATE"
      }
    }
  })
}

const calcularScore = () => {
  let msj = winMsj.innerText;
  if (msj == "GANASTE") playerCount = playerCount + 1;
  else if (msj == "PERDISTE") pcCount = pcCount + 1;
}

const imprimirScore = () => {
  score.innerText = "SCORE: " + playerName.value + ": " + playerCount + " PC: " + pcCount;
}

startBtn.addEventListener('click', validar);

img1Player.addEventListener('click', choice);
img2Player.addEventListener('click', choice);
img3Player.addEventListener('click', choice);

const exitGame = () => {
  appIntro.classList.remove("active");
  appGame.classList.add("active");
  resetScore();
  resetImg();
  resetIntro();
}

const resetIntro = () => {
  playerName.value = "";
  msjNombre.classList.add("active");
}

const resetImg = () => {
  img1P.classList.add("active");
  img2P.classList.add("active");
  img3P.classList.add("active");
  img1Pc.classList.add("active");
  img2Pc.classList.add("active");
  img3Pc.classList.add("active");
}

const resetScore = () => {
  pcCount = 0;
  playerCount = 0;
  winMsj.innerHTML = "";
  imprimirScore();
}

exitBtn.addEventListener('click', exitGame);