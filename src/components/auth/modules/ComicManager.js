const apiUrl = 'http://localhost:8088'

export const getComics = () => {
    return fetch(`${apiUrl}/comics`)
    .then(response => response.json())
}

export const getComicsById = (id) => {
    return fetch(`${apiUrl}/comics/${id}`)
    .then(response => response.json())
}




