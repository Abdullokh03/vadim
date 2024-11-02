document.getElementById('newsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (title && content) {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `<h2>${title}</h2><p>${content}</p>`;

        document.getElementById('newsList').prepend(newsItem);

        // Очистить поля
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
    }
});
