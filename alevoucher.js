// 🔐 Codici AleVoucher validi (caricati da localStorage o inizializzati)
let validVouchers = JSON.parse(localStorage.getItem("validVouchers")) || [
  "ABCD1234EFGH5678IJKL9012", "ZXCV0987BNML5432QWERT678", "PLMN4567OKIJ8321UJNH3456",
  "UIOP8765LKJH4321MNBV0987", "ASDF3456GHJK7890QWERT123", "YUIO9876MNBC6543XCVB3210",
  "HJKL7654VBNM3210ASDF0987", "QWER5678ZXCV2345UIOP8765", "TYUI7890QWERT6543ASDF3456",
  "ZXCV4567ASDF0987UIOP7654", "QAZX9876PLMN5432TYUI1234", "UIOP7654GHJK9870PLMN6543",
  "ASDF2345ZXCV9876QWER4567", "VBNM8765TYUI5432QAZX0987", "QWERT6789GHJK4321ZXCV5678",
  "UIOP5432QAZX9876VBNM6543", "TYUI7654ZXCV4321QWERT8765", "PLMN6543ASDF7890GHJK2345",
  "ZXCV0987QAZX7654VBNM5432", "GHJK9876TYUI4321ASDF6543", "PLMN5432ZXCV8765QAZX7654",
  "UIOP4321QWER9876GHJK6789", "ASDF7654QAZX5432VBNM0987", "QWERT8765UIOP2345ZXCV7654",
  "TYUI6543VBNM7890GHJK4321", "ZXCV7654ASDF8765QWER5432", "PLMN2345TYUI6789QAZX9876",
  "GHJK6543QWERT7654ZXCV8765", "UIOP7654ASDF7890VBNM6543", "QAZX8765TYUI5432PLMN7654",
  "ZXCV7654QAZX8765QWERT6543", "GHJK7654ZXCV7890UIOP5432", "TYUI4321PLMN6543QAZX8765",
  "QAZX6543VBNM9876ZXCV7654", "ASDF7890QWERT8765PLMN6543", "UIOP6543ZXCV5432QAZX9876",
  "VBNM4321TYUI6543ZXCV9876", "GHJK8765PLMN5432QAZX9876", "QWERT7654ZXCV7890ASDF6543",
  "UIOP9876QAZX5432VBNM8765", "ZXCV7654GHJK8765QAZX6543", "TYUI5432PLMN9876ZXCV7654",
  "ASDF6543QAZX7654VBNM8765", "UIOP5432QWERT7654ZXCV9876", "GHJK7654PLMN5432QAZX9876",
  "ZXCV4321TYUI6543VBNM7654", "ASDF8765QAZX9876PLMN5432", "QWERT6543ZXCV7654GHJK8765",
  "UIOP5432VBNM9876QAZX8765", "TYUI7654PLMN6543ZXCV9876", "GHJK4321ZXCV8765QWERT7654",
  "QAZX6543UIOP7890VBNM7654", "ZXCV5432TYUI8765QAZX9876", "GHJK7654PLMN8765ZXCV5432"
];

// 🎯 Funzione per riscattare un codice AleVoucher
document.getElementById("redeemForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const code = document.getElementById("voucher-code").value.trim().toUpperCase();
  const message = document.getElementById("redeem-message");

  // ✅ Validazione formato
  if (!/^[A-Z0-9]{24}$/.test(code)) {
    message.textContent = "Formato non valido. Inserisci 24 caratteri alfanumerici.";
    message.style.color = "red";
    return;
  }

  // 🎁 Verifica e riscatto
  if (validVouchers.includes(code)) {
    let userSaldo = parseInt(localStorage.getItem("userSaldo"), 10);
    if (isNaN(userSaldo)) userSaldo = 0;

    userSaldo += 100;
    localStorage.setItem("userSaldo", userSaldo);

    // 🔒 Rimuove il codice usato
    validVouchers = validVouchers.filter(v => v !== code);
    localStorage.setItem("validVouchers", JSON.stringify(validVouchers));

    message.textContent = "✅ Codice riscattato! 100 AleCoin aggiunti.";
    message.style.color = "green";
    document.getElementById("voucher-code").value = "";

    setTimeout(() => {
      window.location.href = "games.html";
    }, 2000);
  } else {
    message.textContent = "❌ Codice non valido o già utilizzato.";
    message.style.color = "red";
  }
});

// 🛡️ Funzione per mostrare i codici solo all'amministratore
function loadVouchers() {
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser === "Admin") {
    const container = document.getElementById("voucher-container");
    if (container) {
      container.innerHTML = "";
      validVouchers.forEach((code) => {
        const li = document.createElement("li");
        li.innerHTML = `🎫 Codice: <strong>${code}</strong>`;
        container.appendChild(li);
      });
    }
  }
}

// 🚪 Funzione di logout
function logout() {
  localStorage.clear();
  window.location.href = "index.html"; // o "dashboard.html" se non usi login
}

// 🔄 Avvia caricamento codici se necessario
loadVouchers();