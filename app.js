const players = [
  "👤","👤","👤","👤","👤","👤",
  "👤","👤","👤","👤","👤","👤"
];

const names = players.map((_, i) => "Player " + (i + 1));

const playersBox = document.getElementById("players");
const bottle = document.getElementById("bottle");
const spinBtn = document.getElementById("spinBtn");
const result = document.getElementById("result");

const chatBox = document.getElementById("chatBox");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");


function placePlayers() {

  playersBox.innerHTML = "";

  const table = document.getElementById("table");
  const rect = table.getBoundingClientRect();

  const radius = Math.min(rect.width, rect.height) * 0.405;

  players.forEach((avatar, i) => {

    const angle = (-90 + i * 30) * Math.PI / 180;

    const x =
      50 + Math.cos(angle) *
      (radius / rect.width) * 100;

    const y =
      50 + Math.sin(angle) *
      (radius / rect.height) * 100;


    const card = document.createElement("div");

    card.className = "player";

    card.style.left = x + "%";
    card.style.top = y + "%";


    card.innerHTML = `
      <div class="avatar">${avatar}</div>
      <div class="name">${names[i]}</div>
    `;


    playersBox.appendChild(card);

  });
}


placePlayers();

window.addEventListener("resize", placePlayers);



let rotation = 0;
let spinning = false;


spinBtn.addEventListener("click", () => {

  if (spinning) return;

  spinning = true;

  result.textContent = "🍾 Şüşə fırlanır...";


  const extra =
    1440 + Math.floor(Math.random() * 720);


  rotation += extra;


  bottle.style.transform =
    `rotate(${rotation}deg)`;


  setTimeout(() => {

    const chosen =
      Math.floor(Math.random() * 12);

    result.textContent =
      `🎯 Seçilən: ${names[chosen]}`;

    spinning = false;

  }, 2300);

});



function sendMessage() {

  const text = chatInput.value.trim();

  if (!text) return;


  const row = document.createElement("div");

  row.innerHTML =
    `<b>Sən:</b> ${text.replace(/[<>]/g, "")}`;


  chatBox.appendChild(row);

  chatBox.scrollTop =
    chatBox.scrollHeight;


  chatInput.value = "";

}


sendBtn.addEventListener(
  "click",
  sendMessage
);


chatInput.addEventListener(
  "keydown",
  (e) => {

    if (e.key === "Enter") {
      sendMessage();
    }

  }
);
