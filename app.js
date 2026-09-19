;
const players = [
  { name:"Boss",  photo:"https://i.pravatar.cc/150?img=1", kisses:12, music:1, smileys:8 },
  { name:"Aysel", photo:"https://i.pravatar.cc/150?img=2", kisses:7,  music:0, smileys:5 },
  { name:"Murad", photo:"https://i.pravatar.cc/150?img=3", kisses:4,  music:0, smileys:3 },
  { name:"Nigar", photo:"https://i.pravatar.cc/150?img=4", kisses:9,  music:0, smileys:6 },
  { name:"Elvin", photo:"https://i.pravatar.cc/150?img=5", kisses:5,  music:0, smileys:4 },
  { name:"Lala",  photo:"https://i.pravatar.cc/150?img=6", kisses:11, music:0, smileys:9 },
  { name:"Tural", photo:"https://i.pravatar.cc/150?img=7", kisses:3,  music:0, smileys:2 },
  { name:"Zehra", photo:"https://i.pravatar.cc/150?img=8", kisses:8,  music:0, smileys:7 },
  { name:"Orxan", photo:"https://i.pravatar.cc/150?img=9", kisses:6,  music:0, smileys:4 },
  { name:"Leyla",  photo:"https://i.pravatar.cc/150?img=10", kisses:10, music:0, smileys:8 },
  { name:"Samir", photo:"https://i.pravatar.cc/150?img=11", kisses:2,  music:0, smileys:2 },
  { name:"Gunel", photo:"https://i.pravatar.cc/150?img=12", kisses:13, music:0, smileys:10 }
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
    <div class="avatar">
      <img src="${player.photo}" alt="${player.name}">
    </div>
    <span>${player.name}</span>
  `;

  div.addEventListener("click", () => {
    openProfile(index);
  });

  playersBox.appendChild(div);
});


/* COIN */
function updateCoins() {
  coinsBox.textContent = coins;
}


/* PROFİL */
function openProfile(index) {

  const player = players[index];

  const old = document.getElementById("profileModal");

  if (old) {
    old.remove();
  }

  const modal = document.createElement("div");

  modal.id = "profileModal";

  modal.innerHTML = `
    <div style="
      position:fixed;
      inset:0;
      background:rgba(0,0,0,.75);
      display:flex;
      align-items:center;
      justify-content:center;
      z-index:9999;
      padding:20px;
    ">

      <div style="
        width:100%;
        max-width:370px;
        max-height:90vh;
        overflow:auto;
        background:#4a2614;
        border:2px solid #d99a54;
        border-radius:22px;
        padding:22px;
        color:white;
        text-align:center;
      ">

        <!-- ŞƏKİL -->
        <img
          src="${player.photo}"
          style="
            width:110px;
            height:110px;
            object-fit:cover;
            border-radius:18px;
            border:4px solid #f6cf91;
          "
        >

        <h2 style="
          margin:10px 0 22px;
        ">
          ${player.name}
        </h2>


        <!-- ÖPÜŞ -->
        <div style="
          background:#32190d;
          border-radius:16px;
          padding:15px;
          margin-bottom:12px;
        ">

          <div style="
            font-size:20px;
            font-weight:bold;
            margin-bottom:12px;
          ">
            💋 Öpüş
          </div>

          <div style="
            display:flex;
            gap:12px;
            justify-content:center;
          ">

            <button
              id="greenKiss"
              style="
                width:65px;
                height:50px;
                border:0;
                border-radius:14px;
                background:#20c55a;
                font-size:25px;
                cursor:pointer;
              "
            >
              💋
            </button>

            <button
              id="redKiss"
              style="
                width:65px;
                height:50px;
                border:0;
                border-radius:14px;
                background:#e53935;
                font-size:25px;
                cursor:pointer;
              "
            >
              💋
            </button>

          </div>

          <div style="
            margin-top:10px;
            font-size:14px;
          ">
            ${player.kisses} öpüş
          </div>

        </div>


        <!-- MAHNİ -->
        <div style="
          background:#32190d;
          border-radius:16px;
          padding:15px;
          margin-bottom:12px;
        ">

          <div style="
            font-size:20px;
            font-weight:bold;
            margin-bottom:10px;
          ">
            🎵 Mahnı
          </div>

          <div style="
            background:#5a3018;
            border-radius:12px;
            padding:12px;
          ">
            ${
              player.music > 0
              ? "🎵 1 mahnı"
              : "🔒 9 bonusla açılır"
            }
          </div>

          ${
            player.music === 0
            ? `
              <button
                id="buyMusic"
                style="
                  margin-top:10px;
                  width:100%;
                  border:0;
                  border-radius:12px;
                  padding:12px;
                  background:#f2b44f;
                  font-weight:bold;
                "
              >
                🪙 9 bonusla al
              </button>
            `
            : ""
          }

        </div>


        <!-- SMAYLİK -->
        <div style="
          background:#32190d;
          border-radius:16px;
          padding:15px;
          margin-bottom:15px;
        ">

          <div style="
            font-size:20px;
            font-weight:bold;
            margin-bottom:10px;
          ">
            😊 Smaylik
          </div>

          <div style="
            font-size:30px;
            letter-spacing:8px;
          ">
            😊 😍 😂 ❤️
          </div>

          <div style="
            margin-top:10px;
            font-size:14px;
          ">
            ${player.smileys} smaylik
          </div>

        </div>


        <button
          id="closeProfile"
          style="
            width:100%;
            border:0;
            border-radius:13px;
            padding:14px;
            background:#f2b44f;
            color:#3b1b08;
            font-weight:bold;
            font-size:16px;
          "
        >
          Bağla
        </button>

      </div>
    </div>
  `;

  document.body.appendChild(modal);


  /* YAŞIL ÖPÜŞ */
  document.getElementById("greenKiss").addEventListener("click", () => {

    player.kisses++;

    status.textContent = `💋 ${player.name}-ə öpüş göndərildi!`;

    openProfile(index);
  });


  /* QIRMIZI ÖPÜŞ */
  document.getElementById("redKiss").addEventListener("click", () => {

    status.textContent = `❤️ ${player.name}-ə göndərildi.`;

  });


  /* MAHNINI AL */
  const buyMusic = document.getElementById("buyMusic");

  if (buyMusic) {

    buyMusic.addEventListener("click", () => {

      if (coins < 9) {
        alert("Mahnı üçün 9 bonus lazımdır.");
        return;
      }

      coins -= 9;

      updateCoins();

      player.music = 1;

      status.textContent = "🎵 Mahnı açıldı!";

      openProfile(index);

    });

  }


  /* BAĞLA */
  document
    .getElementById("closeProfile")
    .addEventListener("click", () => {
      modal.remove();
    });

}


/* SEÇİLMİŞ OYUNÇUNU SİL */
function clearSelectedPlayers() {

  document.querySelectorAll(".player").forEach(player => {
    player.classList.remove("selected");
  });

}


/* ŞÜŞƏ */
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
    }

    status.textContent =
      `🎯 Şüşə ${players[selected - 1].name}-i seçdi!`;

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

  bonusBtn.textContent =
    "✅ Bonus götürüldü";

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
