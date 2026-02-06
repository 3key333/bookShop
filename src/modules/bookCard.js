const API_KEY = 'AIzaSyCCJNTGZBO1AK8EqVD0w1AofijhQaMgofA';
const booksContainer = document.querySelector('.books-inner');
const loadMoreBtn = document.querySelector('.load-more-btn');

let currentPage = 0;
const booksPerPage = 6; // Загружаем по 6 книг (2 строки по 3)

// Настраиваем контейнер при загрузке
document.addEventListener('DOMContentLoaded', () => {
    if (booksContainer) {
        booksContainer.style.cssText = `
            display: grid;
            grid-template-columns: repeat(3, 1fr); /* 3 колонки */
            gap: 30px; /* отступы */
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        `;
    }
    loadBooks();
});

async function loadBooks() {
    try {
        const startIndex = currentPage * booksPerPage;
        const url = `https://www.googleapis.com/books/v1/volumes?q=javascript&startIndex=${startIndex}&maxResults=${booksPerPage}&key=${API_KEY}`;
        
        const response = await fetch(url);
        const data = await response.json();
        console.log(`Загружено: ${data.items?.length || 0} книг`);
        
        displayBooks(data.items || []);
        currentPage++;
        
    } catch (error) {
        console.error('Ошибка:', error);
        if (booksContainer) {
            booksContainer.innerHTML = '<p>Ошибка загрузки</p>';
        }
    }
}

function displayBooks(books) {
    books.forEach(book => {
        const title = book.volumeInfo?.title || 'Без названия';
        const author = book.volumeInfo?.authors?.[0] || 'Автор неизвестен';
        const image = book.volumeInfo?.imageLinks?.thumbnail || 'https://via.placeholder.com/150x200';
        
        const card = document.createElement('div');
        card.className = 'book-card';
        card.style.cssText = `
            background: white;
            border-radius: 8px; 
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        `;
        
        card.innerHTML = `
        <a href="#">
            <div style="height: 200px;">
                <img src="${image}" 
                     alt="${title}" 
                     style="width: 100%; height: 100%;">
            </div>
            <div style="padding: 15px;">
                <p style="font-size: 12px; color: rgba(92, 106, 121, 1); margin: 0 0 5px;">${author}</p>
                <h3 style="color: rgba(28, 42, 57, 1); font-size: 16px; margin: 0;">${title}</h3>
            </div>
        </a>
        `;
        
        if (booksContainer) {
            booksContainer.appendChild(card);
        }
    });
}

if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function(e){
        e.preventDefault(); // ← ЭТА СТРОЧКА ОСТАНАВЛИВАЕТ ПЕРЕЗАГРУЗКУ
        loadBooks();
    });
}