import { createClient } from 'https://esm.sh/@supabase/supabase-js';

const supabase = createClient(
  'https://hsyyrcbibohwvbuwxwok.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzeXlyY2JpYm9od3ZidXd4d29rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEwNjE0MDcsImV4cCI6MjA3NjYzNzQwN30.2KsFsGYjwf_cA7Z9oglVthiaE1_jWYuQ6HMMm5UXsyo'
);

async function redeemVoucher(code, currentUser) {
  const { data, error } = await supabase
    .from("voucher_codes")
    .select("enabled, used, reward")
    .eq("code", code)
    .single();

  if (error || !data) {
    return { success: false, message: "Code not found." };
  }

  if (!data.enabled) {
    return { success: false, message: "Code not enabled." };
  }

  if (data.used) {
    return { success: false, message: "Code already used." };
  }

  const { error: updateError } = await supabase
    .from("voucher_codes")
    .update({
      used: true,
      enabled: false,
      user_id: currentUser,
      redeemed_at: new Date().toISOString()
    })
    .eq("code", code);

  if (updateError) {
    return { success: false, message: "Error redeeming code." };
  }

  return { success: true, message: `Code redeemed! ${data.reward} AleCoin added.` };
}