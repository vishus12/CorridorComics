import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateFavoriteComic, getFavoriteComicsById  } from '../modules/FavoriteManager';

export const AddCommentToPageCard = ({ getLoggedInUser }) => {
    const [comics, setComics] = useState({})
    const {favoriteId} = useParams()
    const navigate = useNavigate();

    const controlInput = (event) => {
        const newComics = { ...comics }

        newComics.userId = getLoggedInUser()

        let selectedTarget = event.target.value

        if (event.target.id.includes('Id')) {
            selectedTarget = parseInt(selectedTarget)
        }
        newComics[event.target.id] = selectedTarget
        setComics(newComics)
    
    }
    useEffect(() => {
        getFavoriteComicsById(favoriteId)
        .then(fav => setComics(fav)) 

    }, [])
    const saveComics = (event) => {
        event.preventDefault()
        updateFavoriteComic(comics)
            .then(() => navigate('/Favorites'))
    }

    return (

        <div className='create_new_comment'>
            <form>
                <h2>New Comment
                </h2>
                <fieldset>
                    <label htmlFor="name">Comment</label>
                    <input type="text" id="comments" onChange={controlInput} required autoFocus className="controlled_form comment_controlled_form" placeholder="comment description" value={comics.comment} />
                </fieldset>
                <button type="button" id="comment_submit_btn" className="submit_btn" onClick={saveComics}>Submit</button>
            </form>
        </div>
    )
}