var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText);
        let authors = document.querySelector('.authors');
        let news = document.querySelector('.news')
        data.forEach(element => {
            authors.innerHTML += viewAuthor(element)
            news.innerHTML += viewNews(element)
        });
    }
};
xhttp.open("GET", "./data.json", true);
xhttp.send();

let news = 0;


function viewAuthor(author) {
    return `
    <div class="author">${author.name}</div>
    `
}

function viewNews(section) {
    let interval = setInterval(function() {
        news += 1;
        if (news === 3) {
            clearInterval(interval)
        }
        return `
        <div class="news-item">${section.news}</div>
        `

    }, 1000)
}