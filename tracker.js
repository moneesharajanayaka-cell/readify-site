function calcProgress() {
    const total = Number(document.getElementById("totalPages").value);
    const read = Number(document.getElementById("pagesRead").value);
    const speed = Number(document.getElementById("readSpeed").value);

    const percent = (read / total) * 100;
    const daysLeft = Math.ceil((total - read) / speed);

    document.getElementById("percent").textContent = `Completed: ${percent.toFixed(1)}%`;
    document.getElementById("finish").textContent = `Estimated finish: ${daysLeft} day(s)`;

    const bar = document.getElementById("progressFill");
    bar.style.width = percent + "%";

    saveToLocal("progressData", { total, read, speed });
}
