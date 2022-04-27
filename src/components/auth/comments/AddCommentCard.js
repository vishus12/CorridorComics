import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateFavoriteComic } from '../modules/FavoriteManager';

export const CommentCard = ({ getLoggedInUser }) => {
    const [comics, setComics] = useState({})
    const navigate = useNavigate();
    const user = getLoggedInUser();

    const controlInput = (event) => {
        const newComics = { ...comics }

        newComics.userId = getLoggedInUser()

        let selectedTarget = event.target.value

        if (event.target.id.includes('Id')) {
            selectedTarget = parseInt(selectedTarget)
        }
        newTask[event.target.id] = selectedTarget
        setComics(newComics)
    }
    useEffect(() => {

    }, [])
    const saveComics = (event) => {
        event.preventDefault()
        updateFavoriteComic()
            .then(() => navigate('/Favorites'))
    }

    return (

        <div className='create_new_comment'>
            <form>
                <h2>New Comment
                </h2>
                <fieldset>
                    <label htmlFor="name">Comment</label>
                    <input type="text" id="name" onChange={controlInput} required autoFocus className="controlled_form comment_controlled_form" placeholder="comment discription" value={favorites.comment} />
                </fieldset>
                <button type="button" id="comment_submit_btn" className="submit_btn" onClick={saveComics}>Submit</button>
            </form>
        </div>
    )
}