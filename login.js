let users = {
  Admin: { password: "um9YP!fTw&@3w8s7hnH2vkN#", saldo: 10000 },
  Utente01: { password: "Gx#8Vz@m2LfD", saldo: 100 },
  Utente02: { password: "Kz!7Xp#Aq4Rt", saldo: 100 },
  Utente03: { password: "Mn@9Vx#Pt6Bd", saldo: 100 },
  Utente04: { password: "Jq@3Zf!Px8Kl", saldo: 100 },
  Utente05: { password: "Rt!5Mn#Qk2Vx", saldo: 100 },
  Utente06: { password: "Lf@8Xp#Mn3Vz", saldo: 100 },
  Utente07: { password: "Pt#4Kz!Jq9Bd", saldo: 100 },
  Utente08: { password: "Zf!6Rt@Px7Mn", saldo: 100 },
  Utente09: { password: "Xp@2Mn#Lf3Vz", saldo: 100 },
  Utente10: { password: "Kz#5Bd!Pt8Jq", saldo: 100 },
  Utente11: { password: "Vz@9Jq#Kz4Mn", saldo: 100 },
  Utente12: { password: "Bd!7Rt@Xp5Lf", saldo: 100 },
  Utente13: { password: "Mn#3Px!Lf8Kz", saldo: 100 },
  Utente14: { password: "Rt@6Bd#Jq2Xp", saldo: 100 },
  Utente15: { password: "Px!4Vz@Mn9Kz", saldo: 100 },
  Utente16: { password: "Jq@7Lf#Bd5Rt", saldo: 100 },
  Utente17: { password: "Kz!8Mn@Px3Vz", saldo: 100 },
  Utente18: { password: "Bd#2Rt!Lf9Jq", saldo: 100 },
  Utente19: { password: "Xp@5Mn#Kz6Px", saldo: 100 },
  Utente20: { password: "Lf!3Vz@Rt8Bd", saldo: 100 },
  Utente21: { password: "Mn#9Jq!Kz4Lf", saldo: 100 },
  Utente22: { password: "Rt@7Px#Bd5Mn", saldo: 100 },
  Utente23: { password: "Vz!6Lf@Kz2Jq", saldo: 100 },
  Utente24: { password: "Bd#8Mn!Rt3Px", saldo: 100 },
  Utente25: { password: "Xp@4Vz#Lf9Mn", saldo: 100 },
  Utente26: { password: "Jq!7Rt@Px5Kz", saldo: 100 },
  Utente27: { password: "Kz#8Bd!Mn3Lf", saldo: 100 },
  Utente28: { password: "Rt@2Px#Vz9Jq", saldo: 100 },
  Utente29: { password: "Mn!5Lf@Bd6Rt", saldo: 100 },
  Utente30: { password: "Vz@3Kz#Jq8Mn", saldo: 100 },
};

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (users[username] && users[username].password === password) {
    localStorage.setItem("loggedInUser", username);
    localStorage.setItem("userSaldo", users[username].saldo);

    if (username === "Admin") {
      window.location.href = "games.html";
    } else {
      window.location.href = "games.html";
    }
  } else {
    document.getElementById("login-message").textContent = "Credenziali errate.";
    document.getElementById("login-message").style.color = "red";
  }
});