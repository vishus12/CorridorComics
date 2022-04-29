import React, { useState, useEffect } from 'react'
import { FavoritesCard } from './FavoriteCard'
import { useNavigate } from 'react-router-dom';
import { getFavoriteComic, deleteFavoriteComic } from '../modules/FavoriteManager' 


export const FavoriteComicListComponent = ({getLoggedInUser}) => {
    const [favoriteComics, setFavoriteComics] = useState([])
    const navigate = useNavigate();
    const currentUser = getLoggedInUser()

    const handleDeleteFavoriteComic = (id) => {
        deleteFavoriteComic(id)
        .then(() => getAllFavoriteComics(currentUser).then(result => (setFavoriteComics(result))))
    }


    const getAllFavoriteComics = (userId) => {
        getFavoriteComic(userId)
        .then(response => {
            setFavoriteComics(response)
            
        })
    }
    
    useEffect(() => {
        getAllFavoriteComics(currentUser)
    }, [])
    

    return (
        <>
            <div className="container-cards">
                {favoriteComics.map(favoriteComic => <FavoritesCard
                    key={favoriteComic.id}
                    favoriteComic={favoriteComic}
                    getLoggedInUser={getLoggedInUser}
                    handleDeleteFavoriteComic={handleDeleteFavoriteComic}
                   />)}
            </div>
        </>
    )
}