let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');
let container = document.querySelector('.container');
let logoImg = document.querySelector('.logo img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    
    if (current === 'dark') {
        pageContent.style.backgroundColor = '#1a1a1a';
        container.style.backgroundColor = '#2d2d2d';
        container.style.borderColor = '#444';
        
        document.querySelector('h1').style.color = '#fff';
        document.querySelector('h2').style.color = '#6b9bff';
        document.querySelector('h2').style.borderBottomColor = '#444';
        
        let paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(p => p.style.color = '#e0e0e0');
        
        let listItems = document.querySelectorAll('.mission-list li');
        listItems.forEach(li => li.style.color = '#e0e0e0');
        
        logoImg.src = 'byui-logo-dark.png';
        
    } else if (current === 'light') {
        pageContent.style.backgroundColor = '#fff';
        container.style.backgroundColor = 'white';
        container.style.borderColor = '#000';
        
        document.querySelector('h1').style.color = '#000';
        document.querySelector('h2').style.color = '#467dea';
        document.querySelector('h2').style.borderBottomColor = '#e2e0e0';
        
        let paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(p => p.style.color = '#000');
        
        let listItems = document.querySelectorAll('.mission-list li');
        listItems.forEach(li => li.style.color = '#000');
        
        logoImg.src = 'byui-logo.png';
    }
}