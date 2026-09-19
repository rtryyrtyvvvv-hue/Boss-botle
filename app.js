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

/* 12 OYUNÇU */
players.forEach((player, index) => {
  const div = document.createElement("div");

  div.className = "player";
  div.id = `player-${index + 1}`;

  div.innerHTML = `
    <div class="avatar">${player}</div>
    <span>Oyunçu ${index + 1}</span>
  `;

  playersBox.appendChild(div);
});

/* COIN */
function updateCoins() {
  coinsBox.textContent = coins;
}

/* SEÇİLMİŞ OYUNÇUNU SİL */
function clearSelectedPlayers() {
  document.querySelectorAll(".player").forEach(player => {
    player.classList.remove("selected");
  });
}

/* ŞÜŞƏNİ FİRLAT */
spinBtn.addEventListener("click", () => {

  if (spinning) return;

  spinning = true;
  spinBtn.disabled = true;

  clearSelectedPlayers();

  status.textContent = "🍾 Şüşə fırlanır...";

  const selected =
    Math.floor(Math.random() * players.length) + 1;

  const rotation =
    1440 + Math.floor(Math.random() * 1440);

  bottle.style.transition =
    "transform 3.5s cubic-bezier(.17,.67,.18,1)";

  bottle.style.transform =
    `rotate(${rotation}deg)`;

  setTimeout(() => {

    const selectedPlayer =
      document.getElementById(`player-${selected}`);

    if (selectedPlayer) {
      selectedPlayer.classList.add("selected");

      selectedPlayer.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }

    status.textContent =
      `🎯 Şüşə Oyunçu ${selected}-ni seçdi!`;

    spinning = false;
    spinBtn.disabled = false;

  }, 3500);
});

/* GÜNDƏLİK BONUS */
bonusBtn.addEventListener("click", () => {

  if (bonusBtn.disabled) return;

  coins += 25;

  updateCoins();

  bonusBtn.disabled = true;
  bonusBtn.textContent = "✅ Bonus götürüldü";

  status.textContent =
    "🎁 25 coin bonus qazandın!";
});

/* ADMİN BONUSU */
giveBtn.addEventListener("click", () => {

  const amount = Number(bonusAmount.value);

  if (!amount || amount < 1) {
    alert("Bonus məbləğini düzgün yaz.");
    return;
  }

  coins += amount;

  updateCoins();

  status.textContent =
    `👑 Admin ${amount} coin əlavə etdi.`;
});

updateCoins();
