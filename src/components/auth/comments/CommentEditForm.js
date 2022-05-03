import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateFavoriteComic, getFavoriteComicsById } from '../modules/FavoriteManager';

export const EditCommentToPageCard = ({ getLoggedInUser }) => {
    const [comics, setComics] = useState({})
    const { favoriteId } = useParams()
    // to grab the id from the dom
    const navigate = useNavigate();
    //to navigate to specific page

    const controlInput = (event) => {
        const newComics = { ...comics }
        newComics.userId = getLoggedInUser()
        //3. setting the id in newComics to the logged in user

        let selectedTarget = event.target.value
        // storing event.target.value to selectedTarget

        if (event.target.id.includes('Id')) {
            selectedTarget = parseInt(selectedTarget)
        }
        //getting slected comic by id and parsing storing in selectedTarget

        newComics[event.target.id] = selectedTarget
        // storing selectedTarget to newComics square bracket object notation

        setComics(newComics)
        //setting the usedState equal to the updated object of comics

    }
    useEffect(() => {
        getFavoriteComicsById(favoriteId)
            .then(fav => setComics(fav))
        // 1. setting useState to the comic thats returned by the fetch call
    }, [])


    const editComics = (event) => {
        event.preventDefault()
        updateFavoriteComic(comics)
            .then(() => navigate('/Favorites'))
    }
    // edit comics is passing the comics state to updateFavoriteComic fetch then navigating to favorites

    return (

        <div className='create_new_comment'>
            <form>
                <h2>Edit Comment
                </h2>
                <fieldset>
                    <label htmlFor="name">Comment</label>
                    <input type="text" id="comments" onChange={controlInput} required autoFocus className="controlled_form comment_controlled_form" value={comics.comments} />
                </fieldset>
                <button type="button" id="comment_submit_btn" className="submit_btn" onClick={editComics}>Submit</button>
            </form>
        </div>
    )// 2. on change once something in the inputform is typed controlInput is activated
}