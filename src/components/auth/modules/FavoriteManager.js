const remoteUrl = "http://localhost:8088"

export const addFavoriteComics = (faveComic) => {
    return fetch(`${remoteUrl}/favorites`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(faveComic)
    }).then(parseResponse => parseResponse.json())   
        
}

export const getFavoriteComic= () => {
    return fetch(`${remoteUrl}/favorites?_expand=comic`)
        .then(parseResponse => parseResponse.json())
}

export const deleteFavoriteComic= (favoritesId) => {
    return fetch(`${remoteUrl}/favorites/${favoritesId}`, {
        method: 'DELETE'
    }).then(parseResponse => parseResponse.json())
}

export const updateFavoriteComic= (favoritesId) => {
    return fetch(`${remoteUrl}/favorites/${favoritesId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(favoritesId)
    }).then(parseResponse => parseResponse.json())
}

export const getFavoriteComicsById = (favoritesId) =>{
    return fetch(`${remoteUrl}/favorites/${favoritesId}`,{
        
    }).then(parseResponse => parseResponse.json())
}