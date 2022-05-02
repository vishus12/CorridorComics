import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { updateFavoriteComic } from '../modules/FavoriteManager';


export const FavoritesCard = ({ favoriteComic, handleDeleteFavoriteComic }) => {
    const navigate = useNavigate();
 const [comic, comicUpdate] = useState(false)
 
 const handleDeleteComment = () =>{
     const deleteComment = {...favoriteComic}
     deleteComment.comments = ""
     updateFavoriteComic(deleteComment)
     .then(navigate("/favorites"))

 }   
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
                            <button type="button" className="button" onClick={handleDeleteComment}>
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


