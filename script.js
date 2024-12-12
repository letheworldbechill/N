
let currentScreen = 'home-screen';

const articles = [
    { id: '1', title: 'Was ist Gaslighting?', content: 'Gaslighting ist eine Form der psychologischen Manipulation...' },
    { id: '2', title: 'Warum isolieren Narzissten ihre Opfer?', content: 'Narzissten isolieren ihre Opfer, um Kontrolle auszuüben...' }
];

const resources = [
    { id: '1', name: 'Hilfetelefon Gewalt gegen Frauen', phone: '08000 116 016' },
    { id: '2', name: 'Telefonseelsorge', phone: '0800 111 0 111' }
];

const navigateTo = (screenId) => {
    document.getElementById(currentScreen).classList.remove('active');
    document.getElementById(screenId).classList.add('active');
    currentScreen = screenId;
};

const saveEntry = () => {
    const entry = document.getElementById('journal-entry').value;
    if (entry.trim()) {
        const journalEntries = document.getElementById('journal-entries');
        const newEntry = document.createElement('div');
        newEntry.textContent = entry;
        journalEntries.appendChild(newEntry);
        document.getElementById('journal-entry').value = '';
    }
};

const loadArticles = () => {
    const articlesList = document.getElementById('articles-list');
    articlesList.innerHTML = '';
    articles.forEach(article => {
        const articleItem = document.createElement('li');
        articleItem.textContent = article.title;
        articleItem.onclick = () => showArticleDetail(article);
        articlesList.appendChild(articleItem);
    });
};

const showArticleDetail = (article) => {
    document.getElementById('article-title').textContent = article.title;
    document.getElementById('article-content').textContent = article.content;
    navigateTo('article-detail-screen');
};

const loadResources = () => {
    const resourcesList = document.getElementById('resources-list');
    resourcesList.innerHTML = '';
    resources.forEach(resource => {
        const resourceItem = document.createElement('li');
        resourceItem.innerHTML = `${resource.name}: <a href="tel:${resource.phone}">${resource.phone}</a>`;
        resourcesList.appendChild(resourceItem);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById(currentScreen).classList.add('active');
    loadArticles();
    loadResources();
});
