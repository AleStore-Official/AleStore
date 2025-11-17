import { createClient } from 'https://esm.sh/@supabase/supabase-js';

const supabase = createClient(
  'https://hsyyrcbibohwvbuwxwok.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzeXlyY2JpYm9od3ZidXd4d29rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEwNjE0MDcsImV4cCI6MjA3NjYzNzQwN30.2KsFsGYjwf_cA7Z9oglVthiaE1_jWYuQ6HMMm5UXsyo'
);

document.getElementById("redeemForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const code = document.getElementById("voucher-code").value.trim().toUpperCase();
  const message = document.getElementById("redeem-message");

  if (!/^[A-Z0-9]{24}$/.test(code)) {
    message.textContent = "Invalid format. Enter 24 alphanumeric characters.";
    message.style.color = "red";
    return;
  }

  const { data, error } = await supabase
    .from("voucher_codes")
    .select("enabled, used, reward")
    .eq("code", code)
    .single();

  if (error || !data) {
    message.textContent = "Code not found.";
    message.style.color = "red";
    return;
  }

  if (!data.enabled) {
    message.textContent = "Code not enabled.";
    message.style.color = "red";
    return;
  }

  if (data.used) {
    message.textContent = "Code already used.";
    message.style.color = "orange";
    return;
  }

  const { error: updateError } = await supabase
    .from("voucher_codes")
    .update({
      used: true,
      enabled: false,
      redeemed_at: new Date().toISOString()
    })
    .eq("code", code);

  if (updateError) {
    message.textContent = "Error redeeming code.";
    message.style.color = "red";
    return;
  }

  let saldo = parseInt(localStorage.getItem("userSaldo"), 10) || 0;
  saldo += data.reward || 100;
  localStorage.setItem("userSaldo", saldo);

  message.textContent = `Voucher redeemed! ${data.reward || 100} AleCoin added.`;
  message.style.color = "green";
  document.getElementById("voucher-code").value = "";
});