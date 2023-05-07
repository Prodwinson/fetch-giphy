const images = document.querySelector('img')

fetch('https://api.giphy.com/v1/gifs/translate?api_key=DGJXoVny0Ruubz0rNEKG31tnIQ8yz4DC&s=cats', {
    mode: 'cors'
}).then((response) => {
    return response.json()
}).then((response) => {
    images.src = response.data.images.original.url
})

const body = document.querySelector('body')
const btn = document.createElement('button')
btn.addEventListener('click', () => {
    location.reload()
})
btn.textContent = "Change Image"

body.appendChild(btn)

