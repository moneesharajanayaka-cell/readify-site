function pickBook() {
    
    const selectedGenre = document.getElementById('genre').value;
    const selectedLength = document.getElementById('length').value;
    const resultDiv = document.getElementById('result');

    
    let filteredBooks = books.filter(book => {
        
        const matchGenre = (selectedGenre === "all" || book.genre.toLowerCase() === selectedGenre.toLowerCase());
        
        
        let matchLength = true;
        if (selectedLength === "short") matchLength = book.length <= 250;
        else if (selectedLength === "medium") matchLength = book.length > 250 && book.length <= 450;
        else if (selectedLength === "long") matchLength = book.length > 450;

        return matchGenre && matchLength;
    });

    
    if (filteredBooks.length === 0) {
        resultDiv.innerHTML = `
            <div class="result-card">
                <p>No books found matching those criteria. Try a different combination!</p>
            </div>`;
        return;
    }

    
    const randomIndex = Math.floor(Math.random() * filteredBooks.length);
    const randomBook = filteredBooks[randomIndex];

    
    resultDiv.innerHTML = `
        <div class="result-card">
            <img src="${randomBook.image}" alt="${randomBook.title}" onerror="this.src='assets/images/default-book.jpg'">
            <h3>${randomBook.title}</h3>
            <p><strong>Author:</strong> ${randomBook.author}</p>
            <p><strong>Genre:</strong> ${randomBook.genre} | ${randomBook.length} pages</p>
            <p style="margin: 15px 0;">${randomBook.description}</p>
            
            <div class="recommender-buttons">
                <button class="btn" onclick="pickBook()">Pick Again</button>
                <button class="btn" onclick="saveToReadingList('${randomBook.title}')" style="background: #FFD700;">Add to Reading List</button>
            </div>
        </div>
    `;
}

function saveToReadingList(bookTitle) {
    
    let readingList = JSON.parse(localStorage.getItem('userReadingList')) || [];

    
    if (!readingList.includes(bookTitle)) {
        readingList.push(bookTitle);
        localStorage.setItem('userReadingList', JSON.stringify(readingList));
        alert(`📚 "${bookTitle}" has been added to your reading list!`);
    } else {
        alert("You already added this book to your list!");
    }
}