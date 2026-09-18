const players = [
  "👤", "👤", "👤", "👤",
  "👤", "👤", "👤", "👤",
  "👤", "👤", "👤", "👤"
];

const playersBox = document.getElementById("players");
const bottle = document.getElementById("bottle");
const status = document.getElementById("status");
const spinBtn = document.getElementById("spinBtn");
const bonusBtn = document.getElementById("bonusBtn");
const giveBtn = document.getElementById("giveBtn");
const bonusAmount = document.getElementById("bonusAmount");
const coinsBox = document.getElementById("coins");

let coins = 100;
let spinning = false;

// 12 oyunçunu göstər
players.forEach((player, index) => {
  const div = document.createElement("div");
  div.className = "player";
  div.innerHTML = `
    <div class="avatar">${player}</div>
    <span>Oyunçu ${index + 1}</span>
  `;
  playersBox.appendChild(div);
});

// Coinləri yenilə
function updateCoins() {
  coinsBox.textContent = coins;
}

// Şüşəni fırlat
spinBtn.addEventListener("click", () => {
  if (spinning) return;

  spinning = true;
  spinBtn.disabled = true;
  status.textContent = "🍾 Şüşə fırlanır...";

  const rotation = 1440 + Math.floor(Math.random() * 1440);

  bottle.style.transition = "transform 3s cubic-bezier(.17,.67,.18,1)";
  bottle.style.transform = `rotate(${rotation}deg)`;

  setTimeout(() => {
    const selected = Math.floor(Math.random() * 12) + 1;

    status.textContent = `🎯 Şüşə Oyunçu ${selected}-ni seçdi!`;

    spinning = false;
    spinBtn.disabled = false;
  }, 3000);
});

// Gündəlik bonus
bonusBtn.addEventListener("click", () => {
  coins += 25;
  updateCoins();

  bonusBtn.disabled = true;
  bonusBtn.textContent = "✅ Bonus götürüldü";

  status.textContent = "🎁 25 coin bonus qazandın!";
});

// Admin bonusu
giveBtn.addEventListener("click", () => {
  const amount = Number(bonusAmount.value);

  if (!amount || amount < 1) {
    alert("Bonus məbləğini düzgün yaz.");
    return;
  }

  coins += amount;
  updateCoins();

  status.textContent = `👑 Admin ${amount} coin əlavə etdi.`;
});

updateCoins();
