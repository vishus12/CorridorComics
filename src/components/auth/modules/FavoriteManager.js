const remoteUrl = "http://localhost:8080"

export const getFavoriteComics = () => {
    return fetch(`${remoteUrl}/favorites`)
        .then(parseResponse => parseResponse.json())
}

export const getFavoriteComicsById = (id) => {
    return fetch(`${remoteUrl}/favorites/${id}`)
        .then(parseResponse => parseResponse.json())
}

export const updateFavoriteComics = (editedComic) => {
    return fetch(`${remoteUrl}/favorites/${editedComic.id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedComic)
    }).then(parseResponse => parseResponse.json())
}

