import React, { useState, useEffect } from 'react'
import { FavoritesCard } from './FavoriteCard'
import { useNavigate } from 'react-router-dom';
import { getFavoriteComic, deleteFavoriteComic, updateFavoriteComic } from '../modules/FavoriteManager'


export const FavoriteComicListComponent = ({ getLoggedInUser }) => {
    const [favoriteComics, setFavoriteComics] = useState([])
    //favoritesComics lists the favorite comics for that given user where setFavoriteComics sets users favorite comics

    const [comics, setComics] = useState(0)
    // 1. usestate start from 0

    const navigate = useNavigate();
    //navigate to different pages

    const currentUser = getLoggedInUser()
    //current logged in users id

    const handleDeleteFavoriteComic = (id) => {
        deleteFavoriteComic(id)
            .then(() => getAllFavoriteComics(currentUser).then(result => (setFavoriteComics(result))))
        // handleDeleteFavoriteComic takes id of comic passes through delete fetch deleting comic and reloading the setFavoriteComics state
    }

    const handleDeleteComment = (favoriteComic) => {
        setComics(comics + 1)
        // 2. click delete comment it changes the value of comics triggering useEffect
        const deleteComment = {
            userId: favoriteComic.userId,
            comicId: favoriteComic.comicId,
            comments: "",
            id: favoriteComic.id

        }
        updateFavoriteComic(deleteComment)
        // updateFavoriteComic fetch is patching the delete comment object when invoked passing the important keys with empty string for comments
    }

    //updating the state of favoriteComics that is being mapped to dom 
    const getAllFavoriteComics = (userId) => {
        getFavoriteComic(userId)
            .then(response => {
                setFavoriteComics(response)
                // fetch call that take userid for that user and all their favorite comics and sets state to that

            })
    }

    useEffect(() => {
        getAllFavoriteComics(currentUser)
    }, [comics])
    // useEffect is calling getAllFavoriteComics passing in current logged in user. Comics state in the dependency array when updated will trigger the useffect "refreshing" the page


    return (
        <>
            <div className="container-cards">
                {favoriteComics.map(favoriteComic => <FavoritesCard
                    //.map takes the callback function and applies each callback function to each element in the array
                    key={favoriteComic.id}
                    favoriteComic={favoriteComic}
                    getLoggedInUser={getLoggedInUser}
                    handleDeleteFavoriteComic={handleDeleteFavoriteComic}
                    handleDeleteComment={handleDeleteComment}
                />)}
            </div>
        </>
    ) //maping these props to favoritesCard 
}