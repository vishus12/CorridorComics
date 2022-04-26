import React, { useState } from 'react'
import "./ComicCard.css"
import { addFavoriteComics } from "../modules/FavoriteManager"

export const ComicCard = ({ comic, getLoggedInUser }) => {
    const userId = JSON.parse(getLoggedInUser())
    const [favorite, setFavorite] = useState({
        userId: userId,
        comicId: "",
        comments: ""
    })

    const handleFavoriteComic = () => {

        let comicObject = {
            userId: userId.id,
            comicId: comic.id,
            comments: ""
        }
        addFavoriteComics(comicObject)
    }

    return (

        <div className="comic_container">
            <img className="comic_image" src={`./images/${comic.name}.jpg`} width="30%" />
            <div className="comic_content">
                <h3>
                    <span className="card_comicname">
                        {comic.name}
                    </span>
                </h3>
                <p>Date Issued: {comic.dateIssued}</p>
                <p>Story Synopsis: {comic.description}</p>
                <button type="button" className="button" onClick={handleFavoriteComic}>
                    Favorite
                </button>
            </div>
        </div>
    )
}
