const players = [
  "👤", "👤", "👤", "👤",
  "👤", "👤", "👤", "👤",
  "👤", "👤", "👤", "👤"
];

const playersBox = document.getElementById("players");
const bottle = document.getElementById("bottle");
const spinBtn = document.getElementById("spinBtn");
const bonusBtn = document.getElementById("bonusBtn");
const giveBtn = document.getElementById("giveBtn");

const coinsElement = document.getElementById("coins");
const statusElement = document.getElementById("status");

const bonusAmount = document.getElementById("bonusAmount");

const chatInput = document.getElementById("chatInput");
const chatSend = document.getElementById("chatSend");
const chatMessages = document.getElementById("chatMessages");

let coins = 100;
let spinning = false;
let rotation = 0;


// ==========================
// 12 OYUNÇUNU GÖSTƏR
// ==========================

players.forEach((player, index) => {

  const box = document.createElement("div");

  box.className = "player";

  box.dataset.index = index;

  box.innerHTML = `
    <div class="player-picture">${player}</div>
    <div class="player-name">Oyunçu ${index + 1}</div>
  `;

  playersBox.appendChild(box);

});


// ==========================
// ŞÜŞƏNİ FƏRİLAD
// ==========================

spinBtn.addEventListener("click", () => {

  if (spinning) {
    return;
  }

  spinning = true;

  statusElement.textContent = "🍾 Şüşə fırlanır...";

  spinBtn.disabled = true;

  // Köhnə seçimi təmizlə
  document.querySelectorAll(".player").forEach(player => {
    player.classList.remove("selected");
  });


  // Təsadüfi oyunçu
  const selectedIndex = Math.floor(Math.random() * players.length);


  // Bir neçə tam dövr + təsadüfi bucaq
  const extraRotation =
    1440 + Math.floor(Math.random() * 720);

  rotation += extraRotation;

  bottle.style.transform =
    `rotate(${rotation}deg)`;


  // Animasiya bitəndən sonra
  setTimeout(() => {

    const selectedPlayer =
      document.querySelector(
        `.player[data-index="${selectedIndex}"]`
      );

    if (selectedPlayer) {
      selectedPlayer.classList.add("selected");
    }

    statusElement.textContent =
      `🎯 Oyunçu ${selectedIndex + 1} seçildi!`;

    spinning = false;

    spinBtn.disabled = false;

  }, 3000);

});


// ==========================
// GÜNDƏLİK BONUS
// ==========================

bonusBtn.addEventListener("click", () => {

  const dailyBonus = 25;

  coins += dailyBonus;

  coinsElement.textContent = coins;

  statusElement.textContent =
    `🎁 +${dailyBonus} bonus qazandın!`;

});


// ==========================
// ADMİN BONUSU
// ==========================

giveBtn.addEventListener("click", () => {

  const amount = Number(bonusAmount.value);

  if (!amount || amount < 1) {

    alert("Bonus məbləğini düzgün yaz.");

    return;
  }

  coins += amount;

  coinsElement.textContent = coins;

  statusElement.textContent =
    `👑 Admin +${amount} bonus əlavə etdi.`;

});


// ==========================
// ÇAT MESAJI GÖNDƏR
// ==========================

function sendMessage() {

  const message =
    chatInput.value.trim();

  if (!message) {
    return;
  }


  const newMessage =
    document.createElement("div");

  newMessage.className =
    "chat-message";

  newMessage.innerHTML =
    `<b>Sən:</b> ${message}`;


  chatMessages.appendChild(newMessage);


  chatInput.value = "";


  // Çatı aşağı sürüşdür
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
