document.addEventListener('DOMContentLoaded', loadNews);

document.getElementById('newsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (title && content) {
        const newsItem = { title, content };
        addNewsToList(newsItem);
        saveNewsToLocalStorage(newsItem);
        
        // Очистить поля
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
    }
});

function addNewsToList(newsItem) {
    const newsList = document.getElementById('newsList');
    const newsElement = document.createElement('div');
    newsElement.className = 'news-item';
    newsElement.innerHTML = `<h2>${newsItem.title}</h2><p>${newsItem.content}</p>`;
    newsList.prepend(newsElement);
}

function saveNewsToLocalStorage(newsItem) {
    let newsArray = JSON.parse(localStorage.getItem('news')) || [];
    newsArray.push(newsItem);
    localStorage.setItem('news', JSON.stringify(newsArray));
}

function loadNews() {
    const newsArray = JSON.parse(localStorage.getItem('news')) || [];
    newsArray.forEach(newsItem => {
        addNewsToList(newsItem);
    });
}
