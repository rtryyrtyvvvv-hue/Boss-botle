const players = [
  {
    name: "Boss",
    photo: "https://i.pravatar.cc/150?img=1",
    kisses: 12,
    music: "🎵 1 mahnı",
    smileys: "😊 8"
  },
  {
    name: "Aysel",
    photo: "https://i.pravatar.cc/150?img=2",
    kisses: 7,
    music: "🎵 1 mahnı",
    smileys: "😊 5"
  },
  {
    name: "Murad",
    photo: "https://i.pravatar.cc/150?img=3",
    kisses: 4,
    music: "🎵 1 mahnı",
    smileys: "😊 3"
  },
  {
    name: "Nigar",
    photo: "https://i.pravatar.cc/150?img=4",
    kisses: 9,
    music: "🎵 1 mahnı",
    smileys: "😊 6"
  },
  {
    name: "Elvin",
    photo: "https://i.pravatar.cc/150?img=5",
    kisses: 5,
    music: "🎵 1 mahnı",
    smileys: "😊 4"
  },
  {
    name: "Lala",
    photo: "https://i.pravatar.cc/150?img=6",
    kisses: 11,
    music: "🎵 1 mahnı",
    smileys: "😊 9"
  },
  {
    name: "Tural",
    photo: "https://i.pravatar.cc/150?img=7",
    kisses: 3,
    music: "🎵 1 mahnı",
    smileys: "😊 2"
  },
  {
    name: "Zəhra",
    photo: "https://i.pravatar.cc/150?img=8",
    kisses: 8,
    music: "🎵 1 mahnı",
    smileys: "😊 7"
  },
  {
    name: "Orxan",
    photo: "https://i.pravatar.cc/150?img=9",
    kisses: 6,
    music: "🎵 1 mahnı",
    smileys: "😊 4"
  },
  {
    name: "Leyla",
    photo: "https://i.pravatar.cc/150?img=10",
    kisses: 10,
    music: "🎵 1 mahnı",
    smileys: "😊 8"
  },
  {
    name: "Samir",
    photo: "https://i.pravatar.cc/150?img=11",
    kisses: 2,
    music: "🎵 1 mahnı",
    smileys: "😊 2"
  },
  {
    name: "Günel",
    photo: "https://i.pravatar.cc/150?img=12",
    kisses: 13,
    music: "🎵 1 mahnı",
    smileys: "😊 10"
  }
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

/* SƏNİN OYUNÇUN */
const myPlayerIndex = 0;


/* 12 OYUNÇUNU GÖSTƏR */
players.forEach((player, index) => {

  const div = document.createElement("div");

  div.className = "player";
  div.id = `player-${index + 1}`;

  div.innerHTML = `
    <div class="avatar">
      <img 
        src="${player.photo}" 
        alt="${player.name}"
        style="
          width:100%;
          height:100%;
          object-fit:cover;
          border-radius:7px;
        "
      >
    </div>

    <span>${player.name}</span>
  `;

  /* PROFİLƏ BASMA */
  div.addEventListener("click", () => {
    openProfile(index);
  });

  playersBox.appendChild(div);
});


/* COIN */
function updateCoins() {
  coinsBox.textContent = coins;
}


/* PROFİL PƏNCƏRƏSİ */
function openProfile(index) {

  const player = players[index];

  /* ƏVVƏLKİ PROFİLİ BAĞLA */
  const oldProfile = document.getElementById("profileModal");

  if (oldProfile) {
    oldProfile.remove();
  }


  /* BAŞQASININ PROFİLİ */
  if (index !== myPlayerIndex) {

    const modal = document.createElement("div");

    modal.id = "profileModal";

    modal.innerHTML = `
      <div style="
        position:fixed;
        inset:0;
        background:#000b;
        display:flex;
        align-items:center;
        justify-content:center;
        z-index:9999;
        padding:20px;
      ">

        <div style="
          width:100%;
          max-width:360px;
          background:#4a2614;
          border:2px solid #d99a54;
          border-radius:20px;
          padding:22px;
          text-align:center;
          color:white;
        ">

          <div style="
            font-size:60px;
            margin-bottom:10px;
          ">🔒</div>

          <h2 style="margin:5px 0;">
            ${player.name}
          </h2>

          <p style="
            color:#f6d6ac;
            line-height:1.5;
          ">
            Bu profil yalnız profil sahibinə görünür.
          </p>

          <button
            id="closeProfile"
            style="
              width:100%;
              border:0;
              border-radius:12px;
              padding:13px;
              background:#f2b44f;
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

    document
      .getElementById("closeProfile")
      .addEventListener("click", () => {
        modal.remove();
      });

    return;
  }


  /* SƏNİN PROFİLİN */

  const modal = document.createElement("div");

  modal.id = "profileModal";

  modal.innerHTML = `
    <div style="
      position:fixed;
      inset:0;
      background:#000b;
      display:flex;
      align-items:center;
      justify-content:center;
      z-index:9999;
      padding:20px;
    ">

      <div style="
        width:100%;
        max-width:360px;
        background:#4a2614;
        border:2px solid #d99a54;
        border-radius:20px;
        padding:20px;
        color:white;
        text-align:center;
      ">

        <img
          src="${player.photo}"
          style="
            width:100px;
            height:100px;
            object-fit:cover;
            border-radius:16px;
            border:4px solid #f6cf91;
          "
        >

        <h2 style="
          margin:10px 0 18px;
        ">
          ${player.name} 👑
        </h2>


        <div style="
          background:#32190d;
          border-radius:14px;
          padding:12px;
          margin-bottom:10px;
          text-align:left;
        ">
          💋 Öpüşlər: <b>${player.kisses}</b>
        </div>


        <div style="
          background:#32190d;
          border-radius:14px;
          padding:12px;
          margin-bottom:10px;
          text-align:left;
        ">
          ${player.music}
        </div>


        <div style="
          background:#32190d;
          border-radius:14px;
          padding:12px;
          margin-bottom:10px;
          text-align:left;
        ">
          ${player.smileys}
        </div>


        <button
          id="closeProfile"
          style="
            width:100%;
            border:0;
            border-radius:12px;
            padding:14px;
            margin-top:8px;
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

  const amount =
    Number(bonusAmount.value);


  if (!amount || amount < 1) {

    alert(
      "Bonus məbləğini düzgün yaz."
    );

    return;
  }


  coins += amount;

  updateCoins();


  status.textContent =
    `👑 Admin ${amount} coin əlavə etdi.`;

});


updateCoins();
