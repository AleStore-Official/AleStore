let games = [
  { id: 1, name: "Paddle Battle di Ale", link: "https://gd.games/ale4582/paddle-battle-di-ale" },
  { id: 2, name: "Tappy Plane di Ale", link: "https://gd.games/ale4582/tappy-plane-di-ale" },
  { id: 3, name: "Platformer di Ale", link: "https://gd.games/ale4582/platformer-di-ale" },
  { id: 4, name: "Car Coin Hunt di Ale", link: "https://gd.games/ale4582/car-coin-hunt-di-ale" },
  { id: 5, name: "Multiplayer Platformer Pickup di Ale", link: "https://gd.games/ale4582/multiplayer-platformer-pickup-" },
  { id: 6, name: "Road Crosser di Ale", link: "https://gd.games/ale4582/road-crosser-di-ale" },
  { id: 7, name: "Shark Frenzy di Ale", link: "https://gd.games/ale4582/shark-frenzy-di-ale" },
  { id: 8, name: "Lane Runner di Ale", link: "https://gd.games/ale4582/lane-runner-di-ale" },
  { id: 9, name: "Racing Game di Ale", link: "https://gd.games/ale4582/racing-game-di-ale" },
  { id: 10, name: "Shooting Gallery di Ale", link: "https://gd.games/ale4582/shooting-gallery-di-ale" }
];

function loadDownloads() {
  const list = document.getElementById("downloads-list");
  list.innerHTML = "";

  games.forEach((game) => {
    if (localStorage.getItem(`download-${game.id}`)) {
      const item = document.createElement("div");
      item.className = "download-item";
      item.innerHTML = `
        <h3>${game.name}</h3>
        <a href="${game.link}" target="_blank"><button>Gioca Online</button></a>
      `;
      list.appendChild(item);
    }
  });
}

function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}

loadDownloads();