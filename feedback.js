function submitFeedback() {
    const name = document.getElementById("fbName").value;
    const email = document.getElementById("fbEmail").value;
    const msg = document.getElementById("fbMsg").value;
    const confirm = document.getElementById("fbConfirm");

    if (name === "" || email === "" || msg === "") {
        confirm.textContent = "Please fill in all fields.";
        confirm.style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        confirm.textContent = "Invalid email.";
        confirm.style.color = "red";
        return;
    }

    let feedback = loadFromLocal("feedback") || [];
    feedback.push({ name, email, msg });
    saveToLocal("feedback", feedback);

    confirm.textContent = "Thanks for your feedback!";
    confirm.style.color = "green";

    document.getElementById("fbName").value = "";
    document.getElementById("fbEmail").value = "";
    document.getElementById("fbMsg").value = "";
}


function toggleFAQ(i) {
    const contents = document.querySelectorAll(".faq-content");

    contents.forEach((el, idx) => {
        if (idx === i) {
            el.style.display = el.style.display === "block" ? "none" : "block";
        } else {
            el.style.display = "none";
        }
    });
}
