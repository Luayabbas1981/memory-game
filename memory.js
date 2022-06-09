const h1 = document.createElement("h1");
h1.textContent = "Memory game";
const section = document.createElement("section");
const footer = document.createElement("footer");
footer.classList.add("start")
const creator = document.createElement("div");
creator.textContent = "created by Luay Abbas";
creator.classList.add("creator");
const reStart = document.createElement("div");
reStart.textContent = "Click here to restart the game";
reStart.classList.add("restart");
const startMeassge = document.createElement("div");
const mistakes = document.createElement("div");
mistakes.classList.add("mistakes");
let num=0;
mistakes.innerHTML= `Number of mistakes : ${num}` ;
footer.append(creator, reStart, startMeassge,mistakes);
document.body.append(h1, section, footer);

for (i = 0; i < 20; i++) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("main");
  cardDiv.id = `main${i + 1}`;
  section.appendChild(cardDiv);
  const face = document.createElement("div");
  face.classList.add("face");
  face.id = `face${i + 1}`;
  const img = document.createElement("img");
  face.appendChild(img);
  const back = document.createElement("div");
  back.classList.add("back");
  back.id = `back${i + 1}`;
  cardDiv.append(face, back);
  window.setTimeout(hideCards, 4000);
  function hideCards() {
    back.style = `
  transform: scale(1)`;
  startMeassge.textContent="";
  reStart.style.display="block"
  }
  cardDiv.addEventListener("click", () => {
    back.style.display = "none";
  });
}

let photoSrcArray = [];

(function randomPhoto() {
  const randomNum = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + 1);

  while (photoSrcArray.length < 20) {
    i++;
    chosenNum = randomNum(0, 19);

    if (!photoSrcArray.includes(chosenNum)) {
      photoSrcArray.push(chosenNum);
    }
  }
  startMeassge.textContent="Take a look and wait until the photos be coverd befor you start to play";
})();

for (i = 0; i < photoSrcArray.length; i++) {
  section.children[
    i
  ].children[0].children[0].src = `./images/${photoSrcArray[i]}.jpg`;

  section.children[i].children[1].textContent = photoSrcArray[i];
}

let card1;
let card2;
let card3;

const compareCards = (e) => {
  let clickCard = e.target;
  

  console.log(card1);
  if (clickCard !== card1) {
    if (!card1) {
      return (card1 = clickCard);
    }

    card2 = clickCard;
  }

  if (
    parseInt(card1.textContent) + 10 == parseInt(card2.textContent) ||
    parseInt(card1.textContent) - 10 == parseInt(card2.textContent)
  ) {
    card2.style.display = "none";

    return (card1 = card3);
  } else {
    num++
    mistakes.innerHTML= `your mistakes : ${num}`
    window.setTimeout(hideCard, 850);
    function hideCard() {
      
      card1.style.display = "block";
      card2.style.display = "block";
       (card1 = card3);
    } 
  }
};

const sectionArray = Array.from(section.children);

sectionArray.forEach((e) => {
  e.children[1].addEventListener("click", compareCards);
});

reStart.addEventListener("click", () => window.location.reload(true));
