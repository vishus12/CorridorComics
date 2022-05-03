import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { updateFavoriteComic } from '../modules/FavoriteManager';
import { getFavoriteComic } from '../modules/FavoriteManager';


export const FavoritesCard = ({ favoriteComic, handleDeleteFavoriteComic, handleDeleteComment }) => {
    // prop objects passed through favorites card which triger on click events
    const navigate = useNavigate();


    //return with a terinary that hides the add button once a comment has been added
    return (

        <div className="comic_container">
            <img className="comic_image" src={`./images/${favoriteComic.comic.name}.jpg`} width="30%" />
            <div className="comic_content">
                <h3>
                    <span className="card_comicname">
                        {favoriteComic.comic.name}
                    </span>
                </h3>
                <p>Date Issued: {favoriteComic.comic.dateIssued}</p>
                <p>Story Synopsis: {favoriteComic.comic.description}</p>
                <p>Comments: {favoriteComic.comments}</p>


                {
                    favoriteComic.comments === "" ? (
                        <>
                            <button type="button" className="button" onClick={() => navigate(`/favorites/${favoriteComic.id}/createcomment`)}>
                                Add Comment
                            </button>
                        </>
                    ) : (
                        <>
                            <button type="button" className="button" onClick={() => navigate(`/favorites/${favoriteComic.id}/editcomment`)}>
                                Edit Comment
                            </button>
                            <button type="button" className="button" onClick={() => handleDeleteComment(favoriteComic)}>
                                Delete Comment
                            </button>
                        </>
                    )
                }
                <button type="button" className="button" onClick={() => handleDeleteFavoriteComic(favoriteComic.id)}>
                    Delete Comic
                </button>
            </div>
        </div>
    )
}
// handleDeleteFavoriteComic invoked on click of delete comic button


