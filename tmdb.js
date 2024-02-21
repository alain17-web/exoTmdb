const filmContainer = document.getElementById('film')

const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
    getMovies()
})
btn.style.cursor = 'pointer'
btn.style.backgroundColor = 'teal'
btn.style.color = 'white'

const api_key = "api_key=c573d649c7d159c69c75dfb1da627bcf";
const BASE_URL = "https://api.themoviedb.org/3/";
const url = "search/movie?"

// const page = "&page=1"

const getMovies = async () => {

    let title = document.getElementById('input').value

    let movie = `&query=${title}`
    let language = '&language=en'

    const link = BASE_URL + url + api_key + movie + language

    try {
        const res = await fetch(link)
        if (!res.ok) {
            throw new Error('Erreur lors de la requête :', res.status)
        }
        else {
            const data = await res.json()
            display(data.results)
        }

    } catch (error) {

    }

}

const display = (movies) => {
    filmContainer.innerHTML = ''
    movies.forEach(movie => {
        if (movie.original_language === 'en') {
            const originalTitle = movie.original_title
            const list = document.createElement('li')
            list.style.marginTop = '20px'
            list.textContent = originalTitle
            filmContainer.appendChild(list)
        }

    })
}