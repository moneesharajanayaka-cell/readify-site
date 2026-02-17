const sound = document.getElementById("cozySound");

function playSound() {
    sound.play();
}

function stopSound() {
    sound.pause();
    sound.currentTime = 0;
}


function addCompleted() {
    const input = document.getElementById("completedInput");
    const text = input.value;

    if (text === "") return;

    let list = loadFromLocal("completedBooks") || [];
    list.push(text);
    saveToLocal("completedBooks", list);

    displayCompleted();
    input.value = "";
}

function displayCompleted() {
    const list = loadFromLocal("completedBooks") || [];
    const ul = document.getElementById("completedList");
    ul.innerHTML = "";

    list.forEach(item => {
        ul.innerHTML += `<li>${item}</li>`;
    });
}

displayCompleted();
