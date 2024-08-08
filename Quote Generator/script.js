const api_url = "https://api.quotable.io/random"
const quote = document.getElementById('quote');
const author = document.getElementById('author');


async function getQuote(url) {
    const response = await fetch(url)
    let data = await response.json()
    console.log(data);
    
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
    
}
getQuote(api_url);

function linkedIn(){
    window.open('https://www.linkedin.com/shareArticle?mini=true&&text='+ quote.innerHTML + "----by" +author.innerHTML, "width=600", "height=300")
}

