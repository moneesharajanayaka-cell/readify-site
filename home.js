const quotes = [
    "“Not all those who wander are lost.” – Tolkien",
    "“Reality is merely an illusion.” – Einstein",
    "“The only limit to our realization of tomorrow is our doubts today.”",
    "“There is no friend as loyal as a book.” – Hemingway"
];

let quoteIndex = 0;
const quoteText = document.getElementById("quoteText");

setInterval(() => {
    quoteText.style.opacity = 0;
    setTimeout(() => {
        quoteIndex = (quoteIndex + 1) % quotes.length;
        quoteText.textContent = quotes[quoteIndex];
        quoteText.style.opacity = 1;
    }, 500);
}, 4000);


const authorName = document.getElementById("authorName");
let authorIndex = new Date().getDate() % authors.length;
authorName.textContent = authors[authorIndex];


function saveEmail() { 
    const email = document.getElementById("newsletterEmail").value;
    const msg = document.getElementById("newsletterMsg");

    if (!email || !email.includes("@")) {
        msg.textContent = "Invalid email!";
        msg.style.color = "red";
        return;
    }

    let emails = loadFromLocal("newsletterEmails") || [];
    emails.push(email);
    saveToLocal("newsletterEmails", emails);

    msg.textContent = "Subscribed successfully!";
    msg.style.color = "green";
}

