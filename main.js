const images = document.querySelector('img')

fetch('https://api.giphy.com/v1/gifs/translate?api_key=DGJXoVny0Ruubz0rNEKG31tnIQ8yz4DC&s=cats', {
    mode: 'cors'
}).then((response) => {
    return response.json()
}).then((response) => {
    images.src = response.data.images.original.url
})

// search button to change the gif
const searchBtn = document.querySelector('#button')

// click event for the search button
searchBtn.addEventListener('click', () => {
    searchGiphy()
})

// the function behind changing the gif 
async function searchGiphy() {
    let searchInput = document.querySelector('#search').value
    if (searchInput === "") {
        searchInput = "random"
    }
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=DGJXoVny0Ruubz0rNEKG31tnIQ8yz4DC&s=' + searchInput, {mode: 'cors'})
    const searchInputData = await response.json()
    images.src = searchInputData.data.images.original.url
}

const body = document.querySelector('body')
const btn = document.createElement('button')
btn.addEventListener('click', () => {
    location.reload()
})
btn.textContent = "Change Cat Gif"
body.appendChild(btn)
