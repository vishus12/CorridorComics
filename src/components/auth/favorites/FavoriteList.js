import React, { useState, useEffect } from 'react'
import { FavoritesCard } from './FavoriteCard'
import { useNavigate } from 'react-router-dom';
import { getFavoriteComic, deleteFavoriteComic } from '../modules/FavoriteManager' 


export const FavoriteComicListComponent = ({getLoggedInUser}) => {
    const [favoriteComics, setFavoriteComics] = useState([])
    const navigate = useNavigate();

    const handleDeleteFavoriteComic = (id) => {
        deleteFavoriteComic(id)
        .then(() => getFavoriteComic().then(setFavoriteComics))
    }


    const getAllFavoriteComics = () => {
        getFavoriteComic()
        .then(response => {
            setFavoriteComics(response)
            
        })
    }
    
    useEffect(() => {
        getAllFavoriteComics()
    }, [])
    

    return (
        <>
            <div className="container-cards">
                {favoriteComics.map(favoriteComics => <FavoritesCard
                    key={favoriteComics.id}
                    comic={favoriteComics}
                    getLoggedInUser={getLoggedInUser}
                    handleDeleteFavoriteComic={handleDeleteFavoriteComic}
                   />)}
            </div>
        </>
    )
}