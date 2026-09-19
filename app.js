const players = [
  { name: "Aysel", avatar: "👩🏻", hearts: 88 },
  { name: "Murad", avatar: "👨🏻", hearts: 72 },
  { name: "Nigar", avatar: "👩🏻", hearts: 95 },
  { name: "Elvin", avatar: "👨🏻", hearts: 64 },
  { name: "Lala", avatar: "👩🏻", hearts: 81 },
  { name: "Tural", avatar: "👨🏻", hearts: 56 },
  { name: "Zəhra", avatar: "👩🏻", hearts: 77 },
  { name: "Orxan", avatar: "👨🏻", hearts: 91 },
  { name: "Leyla", avatar: "👩🏻", hearts: 68 },
  { name: "Samir", avatar: "👨🏻", hearts: 84 },
  { name: "Məlahət", avatar: "👩🏻", hearts: 73 },
  { name: "Rəşad", avatar: "👨🏻", hearts: 60 }
];

let hearts = 100;

const playersBox = document.getElementById("players");
const bottle = document.getElementById("bottle");
const statusText = document.getElementById("status");
const spinBtn = document.getElementById("spinBtn");
const heartsText = document.getElementById("hearts");

const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const sendChat = document.getElementById("sendChat");

const bonusAmount = document.getElementById("bonusAmount");
const giveBonus = document.getElementById("giveBonus");

const storeBtn = document.getElementById("storeBtn");
const storeModal = document.getElementById("storeModal");
const closeStore = document.getElementById("closeStore");


/* OYUNÇULAR */

function renderPlayers() {

  playersBox.innerHTML = "";

  players.forEach((player, index) => {

    const playerBox = document.createElement("div");

    playerBox.className = `player p${index + 1}`;

    playerBox.dataset.index = index;

    playerBox.innerHTML = `
      <div class="player-card">
        ${player.avatar}
      </div>

      <div class="player-name">
        ${player.name}
      </div>

      <div class="player-hearts">
        ❤️ ${player.hearts}
      </div>
    `;

    playersBox.appendChild(playerBox);
  });
}

renderPlayers();


/* ÜRƏK SAYI */

function updateHearts() {
  heartsText.textContent = hearts;
}

updateHearts();


/* ŞÜŞƏNİ FIRLAT */

spinBtn.addEventListener("click", () => {

  if (hearts <= 0) {

    statusText.textContent =
      "❤️ Ürəyin qalmayıb!";

    return;
  }

  hearts--;

  updateHearts();

  document.querySelectorAll(".player").forEach(player => {
    player.classList.remove("selected");
  });

  spinBtn.disabled = true;

  statusText.textContent =
    "Şüşə fırlanır...";

  bottle.classList.remove("spinning");

  void bottle.offsetWidth;

  bottle.classList.add("spinning");


  const selectedIndex =
    Math.floor(Math.random() * players.length);


  setTimeout(() => {

    const selectedPlayer =
      document.querySelector(
        `.player[data-index="${selectedIndex}"]`
      );

    selectedPlayer.classList.add("selected");

    statusText.textContent =
      `🎯 Şüşə ${players[selectedIndex].name} seçdi!`;

    addMessage(
      "Sistem",
      `🍾 Şüşə ${players[selectedIndex].name} adlı oyunçunu seçdi!`
    );

    spinBtn.disabled = false;

  }, 2200);

});


/* ÇAT */

function addMessage(name, message) {

  const div = document.createElement("div");

  div.className = "message";

  const bold = document.createElement("b");

  bold.textContent = name + ":";

  div.appendChild(bold);

  div.appendChild(
    document.createTextNode(" " + message)
  );

  chatMessages.appendChild(div);

  chatMessages.scrollTop =
    chatMessages.scrollHeight;
}


function sendMessage() {

  const text =
    chatInput.value.trim();

  if (!text) return;

  addMessage("Sən", text);

  chatInput.value = "";

  chatInput.focus();
}


sendChat.addEventListener(
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


/* ADMİN BONUS */

giveBonus.addEventListener(
  "click",
  () => {

    const amount =
      parseInt(bonusAmount.value);

    if (!amount || amount <= 0) {

      alert(
        "Bonus miqdarını düzgün yaz."
      );

      return;
    }

    hearts += amount;

    updateHearts();

    addMessage(
      "Admin",
      `❤️ ${amount} bonus əlavə edildi.`
    );

  }
);


/* MAĞAZA */

storeBtn.addEventListener(
  "click",
  () => {

    storeModal.classList.remove(
      "hidden"
    );

  }
);


closeStore.addEventListener(
  "click",
  () => {

    storeModal.classList.add(
      "hidden"
    );

  }
);


storeModal.addEventListener(
  "click",
  (event) => {

    if (event.target === storeModal) {

      storeModal.classList.add(
        "hidden"
      );

    }

  }
);


/* MAĞAZADAN ÜRƏK */

document
  .querySelectorAll(".store-item")
  .forEach(item => {

    item.addEventListener(
      "click",
      () => {

        const amount =
          parseInt(
            item.dataset.hearts
          );

        hearts += amount;

        updateHearts();

        addMessage(
          "Mağaza",
          `❤️ ${amount} bonus hesabına əlavə edildi.`
        );

        storeModal.classList.add(
          "hidden"
        );

      }
    );

  });
