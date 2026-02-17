function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("nav-open");
}


function saveToLocal(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLocal(key) {
    let val = localStorage.getItem(key);
    return val ? JSON.parse(val) : null;
}
