// Daily Scam Prevention Tips
const tips = [
    "Never share your password with anyone.",
    "Don't click on links in unsolicited emails.",
    "Use two-factor authentication for extra security.",
    "Always verify the sender of an email before opening attachments."
];

document.getElementById('tip-of-the-day').innerText = tips[Math.floor(Math.random() * tips.length)];

// Quiz Function
function checkQuiz() {
    const answers = document.forms['quiz-form'];
    let score = 0;

    // Loop through questions 1 to 26
    for (let i = 1; i <= 26; i++) {
        if (answers[`q${i}`].value === "correct") {
            score++;
        }
    }

    document.getElementById('quiz-result').innerText = `You got ${score}/26 questions correct!`;
}

// Scam Checker Function
function checkScam() {
    const message = document.getElementById('message').value.toLowerCase();
    let result = "This message seems safe.";

    if (message.includes("urgent") || message.includes("password") || message.includes("bank account")||
        message.includes("Won") ||message.includes("lottery") ||message.includes("cash prize") ||message.includes("OTP")||
        message.includes("end")||message.includes("soon")||message.includes("expires")||message.includes("http")
   || message.includes(".")|| message.includes("/")|| message.includes("lend")|| message.includes("money")|| message.includes("rupees")
   || message.includes("$")|| message.includes("dollar")|| message.includes("llar")|| message.includes("Rs.")|| message.includes("please")
   || message.includes("plz") || message.includes("urgent") || 
   message.includes("immediate") || 
   message.includes("account") || 
   message.includes("verify") || 
   message.includes("verification") || 
   message.includes("confirm") || 
   message.includes("suspend") || 
   message.includes("security") || 
   message.includes("important") || 
   message.includes("restricted") || 
   message.includes("action required") || 
   message.includes("upgrade") || 
   message.includes("login") || 
   message.includes("sign in") || 
   message.includes("password") || 
   message.includes("limited time") || 
   message.includes("reward") || 
   message.includes("exclusive offer") || 
   message.includes("gift") || 
   message.includes("congratulations") || 
   message.includes("prize") || 
   message.includes("claim") || 
   message.includes("click here") || 
   message.includes("reset") || 
   message.includes("protected") || 
   message.includes("trusted") || 
   message.includes("secure") || 
   message.includes("access") || 
   message.includes("statement") || 
   message.includes("unusual activity") || 
   message.includes("update") || 
   message.includes("restore") || 
   message.includes("support") || 
   message.includes("resolve") || 
   message.includes("bank") || 
   message.includes("balance") || 
   message.includes("payment") || 
   message.includes("transaction") || 
   message.includes("service") || 
   message.includes("pay now") || 
   message.includes("due") || 
   message.includes("overdue") || 
   message.includes("issue") || 
   message.includes("problem") || 
   message.includes("billing") || 
   message.includes("fraud") || 
   message.includes("order") || 
   message.includes("invoice") || 
   message.includes("receipt") || 
   message.includes("shipping") || 
   message.includes("delivery") || 
   message.includes("free") || 
   message.includes("refund") || 
   message.includes("loan") || 
   message.includes("credit") || 
   message.includes("offer") || 
   message.includes("settlement") || 
   message.includes("reminder") || 
   message.includes("notification") || 
   message.includes("update now") || 
   message.includes("unlock") || 
   message.includes("document") || 
   message.includes("attached") || 
   message.includes("personal") || 
   message.includes("details") || 
   message.includes("identity") || 
   message.includes("register") || 
   message.includes("submission") || 
   message.includes("bonus") || 
   message.includes("funds") || 
   message.includes("discount") || 
   message.includes("approved") || 
   message.includes("eligible") || 
   message.includes("special") || 
   message.includes("deal") || 
   message.includes("transfer") || 
   message.includes("redeem") || 
   message.includes("redeem now") || 
   message.includes("win") || 
   message.includes("donation") || 
   message.includes("foundation") || 
   message.includes("charity") || 
   message.includes("action") || 
   message.includes("click now") || 
   message.includes("service provider") || 
   message.includes("subscription") || 
   message.includes("auto-renew") || 
   message.includes("thank you") || 
   message.includes("validate") || 
   message.includes("problem with your account") || 
   message.includes("notice")
   )
         {
        result = "Warning: This message might be a scam! Please first verify it or asked authorized people";
    }

    document.getElementById('scam-result').innerText = result;
}
