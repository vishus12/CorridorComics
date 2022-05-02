import React, { useState } from 'react'
import "./ComicCard.css"
import { addFavoriteComics } from "../modules/FavoriteManager"

export const ComicCard = ({ comic, getLoggedInUser }) => {
    //storing logged in user in userID
    const userId = JSON.parse(getLoggedInUser())
   
    //function that creates an object with properties
    const handleFavoriteComic = () => {

        let comicObject = {
            userId: userId,
            comicId: comic.id,
            comments: ""
        }
        // this passes the comicObject to the fetch function
        addFavoriteComics(comicObject)
        //thus saving the favorite comic
    }
// this is what renders to the dom
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
