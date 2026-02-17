document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const genreFilter = document.getElementById('genreFilter');
    const booksGrid = document.getElementById('booksGrid');

    
    function displayBooks(booksToRender) {
        booksGrid.innerHTML = ''; 

        if (booksToRender.length === 0) {
            booksGrid.innerHTML = '<p>No books found. Try a different search!</p>';
            return;
        }

        booksToRender.forEach(book => {
            const card = document.createElement('div');
            card.className = 'book-card';
            card.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                <button onclick="openModal('${book.title}')">View Details</button>
            `;
            booksGrid.appendChild(card);
        });
    }

    
    displayBooks(books);

    
    function filterBooks() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedGenre = genreFilter.value;

        const filtered = books.filter(book => {
            const matchesSearch = book.title.toLowerCase().includes(searchTerm) || 
                                 book.author.toLowerCase().includes(searchTerm);
            const matchesGenre = selectedGenre === 'all' || book.genre === selectedGenre;
            return matchesSearch && matchesGenre;
        });

        displayBooks(filtered);
    }

    
    searchInput.addEventListener('input', filterBooks);
    genreFilter.addEventListener('change', filterBooks);
});


genreFilter.addEventListener("change", () => {
    const genre = genreFilter.value;
    let filtered = genre ? books.filter(b => b.genre === genre) : books;
    loadBooks(filtered);
});


const modal = document.getElementById("bookModal");

function openModal(i) {
    const book = books[i];

    document.getElementById("modalTitle").textContent = book.title;
    document.getElementById("modalImage").src = book.image;
    document.getElementById("modalDesc").textContent = book.description;

    let seqHTML = "";
    book.sequels.forEach(s => seqHTML += `<li>${s}</li>`);
    document.getElementById("modalSequels").innerHTML = seqHTML;

    let reviewHTML = "<tr><th>Name</th><th>Rating</th><th>Review</th></tr>";
    book.reviews.forEach(r => {
        reviewHTML += `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`;
    });
    document.getElementById("modalReviews").innerHTML = reviewHTML;

    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function (e) {
    if (e.target === modal) closeModal();
};


function openModal(bookTitle) {
    
    const book = books.find(b => b.title === bookTitle);

    if (book) {
        
        const modal = document.getElementById('bookModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalImage = document.getElementById('modalImage');
        const modalDesc = document.getElementById('modalDesc');

       
        modalTitle.innerText = book.title;
        modalImage.src = book.image;
        modalDesc.innerText = book.description || "No description available.";

        
        modal.style.display = "block";
    }
}


function closeModal() {
    document.getElementById('bookModal').style.display = "none";
}


window.onclick = function(event) {
    const modal = document.getElementById('bookModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
