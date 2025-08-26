let userSaldo = parseInt(localStorage.getItem("userSaldo"), 10);


let games = [
  { id: 1, name: "Paddle Battle", image: "paddle-battle.jpg", description: "Sfida il tuo avversario con riflessi e strategia!", cost: 50, apk: "apk/paddle-battle.apk" },
  { id: 2, name: "Tappy Plane", image: "tappy-plane.jpg", description: "Guida l'aereo e schiva gli ostacoli per ottenere il punteggio più alto!", cost: 50, apk: "apk/tappy-plane.apk" },
  { id: 3, name: "Platformer", image: "platformer.jpg", description: "Salta, corri e supera livelli pieni di sfide e ostacoli!", cost: 50, apk: "apk/platformer.apk" },
  { id: 4, name: "Car Coin Hunt", image: "car-coin-hunt.jpg", description: "Raccogli monete e sfreccia attraverso il circuito!", cost: 50, apk: "apk/car-coin-hunt.apk" },
  { id: 5, name: "Multiplayer Platformer Pickup", image: "multiplayer-platformer.jpg", description: "Gioca con amici e raccogli oggetti lungo il percorso!", cost: 50, apk: "apk/multiplayer-platformer-pickup.apk" },
  { id: 6, name: "Road Crosser", image: "road-crosser.jpg", description: "Attraversa la strada evitando il traffico!", cost: 50, apk: "apk/road-crosser.apk" },
  { id: 7, name: "Shark Frenzy", image: "shark-frenzy.jpg", description: "Nuota e evita i pericoli nel mondo degli squali!", cost: 50, apk: "apk/shark-frenzy.apk" },
  { id: 8, name: "Lane Runner", image: "lane-runner.jpg", description: "Corri lungo le corsie evitando gli ostacoli!", cost: 50, apk: "apk/lane-runner.apk" },
  { id: 9, name: "Racing Game", image: "racing-game.jpg", description: "Sfida avversari e vinci la gara!", cost: 50, apk: "apk/racing-game.apk" },
  { id: 10, name: "Shooting Gallery", image: "shooting-gallery.jpg", description: "Mira e spara ai bersagli nel minor tempo possibile!", cost: 50, apk: "apk/shooting-gallery.apk" }
];

document.getElementById("user-saldo").textContent = userSaldo;

function loadGames() {
  const gallery = document.getElementById("game-gallery");
  gallery.innerHTML = "";

  games.forEach((game) => {
    const card = document.createElement("div");
    card.className = "game-card";
    card.innerHTML = `
      <img src="${game.image}" alt="${game.name}">
      <h3 class="game-title">${game.name}</h3>
      <p>${game.description}</p>
      <p><strong>Costo: ${game.cost} AleCoin</strong></p>
      <button onclick="buyGame(${game.id})">Acquista</button>
    `;
    gallery.appendChild(card);
  });
}

function buyGame(gameId) {
  const game = games.find(g => g.id === gameId);

  if (userSaldo >= game.cost) {
    userSaldo -= game.cost;
    localStorage.setItem("userSaldo", userSaldo);
    document.getElementById("user-saldo").textContent = userSaldo;
    localStorage.setItem(`download-${gameId}`, true);
    alert(`Hai acquistato ${game.name}! Ora puoi scaricarlo.`);
    window.location.href = "downloads.html";
  } else {
    alert("AleCoin insufficienti. Ricarica il saldo.");
  }
}

document.getElementById("saldo-button").addEventListener("click", function () {
  window.location.href = "alevoucher.html";
});

function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}

loadGames();