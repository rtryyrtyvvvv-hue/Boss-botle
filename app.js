const playerData = [
  ["👤", "Boss", "👑"],
  ["👩", "Aylin", ""],
  ["👨", "Murad", ""],
  ["👩", "Nərgiz", ""],
  ["👨", "Elvin", ""],
  ["👩", "Lalə", ""],
  ["👨", "Orxan", ""],
  ["👩", "Leyla", ""],
  ["👨", "Rəşad", ""],
  ["👩", "Aysu", ""],
  ["👨", "Samir", ""],
  ["👩", "Məftun", ""]
];

const players = document.getElementById("players");
const bottle = document.getElementById("bottle");
const spinBtn = document.getElementById("spinBtn");

const positions = [
  [50, 8],
  [75, 12],
  [92, 29],
  [92, 52],
  [76, 78],
  [55, 92],
  [28, 92],
  [8, 75],
  [7, 51],
  [7, 29],
  [25, 12],
  [50, 5]
];

playerData.forEach((p, i) => {

  const el = document.createElement("div");

  el.className = "player";

  el.style.left = positions[i][0] + "%";
  el.style.top = positions[i][1] + "%";

  el.innerHTML = `
    <div class="avatar">${p[0]}</div>
    <div class="badge">${p[2]}</div>
    <div class="name">${p[1]}</div>
  `;

  players.appendChild(el);
});


let spinning = false;
let angle = 0;


spinBtn.onclick = () => {

  if (spinning) return;

  spinning = true;
  spinBtn.disabled = true;

  const target = Math.floor(Math.random() * 12);

  const targetAngle =
    (target * 30) +
    360 * 5 +
    Math.floor(Math.random() * 360);

  angle += targetAngle;

  bottle.style.transition =
    "transform 4s cubic-bezier(.12,.8,.18,1)";

  bottle.style.transform =
    `translate(-50%, -50%) rotate(${angle}deg)`;


  setTimeout(() => {

    const chosen = playerData[target];

    addMessage(
      `🍾 Şüşə ${chosen[1]} adlı oyunçuya düşdü!`
    );

    spinning = false;
    spinBtn.disabled = false;

  }, 4200);
};


function addMessage(text) {

  const box = document.getElementById("messages");

  const p = document.createElement("p");

  p.textContent = text;

  box.appendChild(p);

  box.scrollTop = box.scrollHeight;
}


document.getElementById("sendBtn").onclick = () => {

  const input =
    document.getElementById("chatInput");

  const text = input.value.trim();

  if (!text) return;

  addMessage("Sən: " + text);

  input.value = "";
};


document.getElementById("chatInput")
  .addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

      document
        .getElementById("sendBtn")
        .click();

    }

  });


document.getElementById("bonusBtn").onclick = () => {

  const amount =
    Math.max(
      1,
      Number(
        document.getElementById("bonusInput").value
      ) || 0
    );

  const hearts =
    document.getElementById("hearts");

  hearts.textContent =
    Number(hearts.textContent) + amount;

  document.getElementById("adminMsg").textContent =
    `❤️ ${amount} bonus əlavə edildi.`;
};
