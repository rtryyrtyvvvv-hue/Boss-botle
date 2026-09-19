const players = [
  {
    name: "Aysel",
    gender: "👩",
    hearts: 88
  },
  {
    name: "Murad",
    gender: "👨",
    hearts: 72
  },
  {
    name: "Nigar",
    gender: "👩",
    hearts: 95
  },
  {
    name: "Elvin",
    gender: "👨",
    hearts: 64
  },
  {
    name: "Lala",
    gender: "👩",
    hearts: 81
  },
  {
    name: "Tural",
    gender: "👨",
    hearts: 56
  },
  {
    name: "Zəhra",
    gender: "👩",
    hearts: 77
  },
  {
    name: "Orxan",
    gender: "👨",
    hearts: 91
  },
  {
    name: "Leyla",
    gender: "👩",
    hearts: 68
  },
  {
    name: "Samir",
    gender: "👨",
    hearts: 84
  },
  {
    name: "Məlahət",
    gender: "👩",
    hearts: 73
  },
  {
    name: "Rəşad",
    gender: "👨",
    hearts: 60
  }
];


const playersBox = document.getElementById("players");

const bottle = document.getElementById("bottle");

const spinBtn = document.getElementById("spinBtn");

const statusElement =
  document.getElementById("status");

const heartsElement =
  document.getElementById("hearts");

const bonusElement =
  document.getElementById("bonus");

const giveBtn =
  document.getElementById("giveBtn");

const bonusAmount =
  document.getElementById("bonusAmount");

const chatInput =
  document.getElementById("chatInput");

const chatSend =
  document.getElementById("chatSend");

const chatMessages =
  document.getElementById("chatMessages");


let hearts = 100;

let bonus = 0;

let spinning = false;

let rotation = 0;


// ==============================
// 12 OYUNÇUNU MASAYA YERLƏŞDİR
// ==============================

players.forEach((player, index) => {

  const box = document.createElement("div");

  box.className = "player";

  box.dataset.index = index;


  box.innerHTML = `
    
    <div class="player-avatar">
      ${player.gender}
    </div>

    <div class="player-name">
      ${player.name}
    </div>

    <div class="player-gender">
      ❤️ ${player.hearts}
    </div>

  `;


  playersBox.appendChild(box);

});


// ==============================
// ŞÜŞƏNİ FƏRİLAT
// ==============================

spinBtn.addEventListener("click", () => {

  if (spinning) {
    return;
  }


  spinning = true;

  spinBtn.disabled = true;


  // Köhnə seçimi sil
  document
    .querySelectorAll(".player")
    .forEach(player => {

      player.classList.remove("selected");

    });


  statusElement.textContent =
    "🍾 Şüşə fırlanır...";


  // Təsadüfi oyunçu seç
  const selectedIndex =
    Math.floor(
      Math.random() * players.length
    );


  // Şüşənin uzun fırlanması
  const extraRotation =
    1440 +
    Math.floor(
      Math.random() * 720
    );


  rotation += extraRotation;


  bottle.style.transform =
    `rotate(${rotation}deg)`;


  // 3 saniyə sonra nəticə
  setTimeout(() => {

    const selectedPlayer =
      document.querySelector(
        `.player[data-index="${selectedIndex}"]`
      );


    if (selectedPlayer) {

      selectedPlayer.classList.add(
        "selected"
      );

    }


    const player =
      players[selectedIndex];


    statusElement.textContent =
      `🎯 ${player.name} seçildi!`;


    spinning = false;

    spinBtn.disabled = false;


  }, 3000);

});


// ==============================
// ADMİN BONUSU
// ==============================

giveBtn.addEventListener("click", () => {

  const amount =
    Number(bonusAmount.value);


  if (!amount || amount < 1) {

    alert(
      "Bonus məbləğini düzgün yaz."
    );

    return;
  }


  bonus += amount;


  bonusElement.textContent =
    bonus;


  statusElement.textContent =
    `👑 Admin ❤️ ${amount} bonus əlavə etdi.`;

});


// ==============================
// ÇAT MESAJI
// ==============================

function sendMessage() {

  const text =
    chatInput.value.trim();


  if (!text) {
    return;
  }


  const message =
    document.createElement("div");


  message.className =
    "message";


  message.innerHTML =
    `<b>Sən:</b> ${text}`;


  chatMessages.appendChild(
    message
  );


  chatInput.value = "";


  chatMessages.scrollTop =
    chatMessages.scrollHeight;

}


chatSend.addEventListener(
  "click",
  sendMessage
);


chatInput.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Enter") {

      sendMessage();

    }

  }
);


// ==============================
// BAŞLANĞIC
// ==============================

heartsElement.textContent =
  hearts;

bonusElement.textContent =
  bonus;
