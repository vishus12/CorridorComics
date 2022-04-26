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


