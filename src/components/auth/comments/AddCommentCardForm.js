import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateFavoriteComic, getFavoriteComicsById  } from '../modules/FavoriteManager';


export const AddCommentToPageCard = ({ getLoggedInUser }) => {
    const [comics, setComics] = useState({})
    const {favoriteId} = useParams()
    // to grab the id from the dom
    const navigate = useNavigate();
    //to navigate to specific page

//copy of useState. updating that copy with new information from the user. setting that useState to that copy. 
    const controlInput = (event) => {
        const newComics = { ...comics }
        //3. copy of comics

        newComics.userId = getLoggedInUser()
        //setting the id in newComics to the logged in user

        let selectedTarget = event.target.value
        // storing the input field 

        newComics[event.target.id] = selectedTarget
        // storing whats typed in the input field 

        setComics(newComics)
        //setting comics to updated object
    }

   
    useEffect(() => {
        getFavoriteComicsById(favoriteId)
        .then(fav => setComics(fav)) 
        // 1. setting useState to the comic thats returned by the fetch call
    }, [])


    const saveComics = (event) => {
        event.preventDefault()
        updateFavoriteComic(comics)
            .then(() => navigate('/Favorites'))
    }
    // Save comics is passing the comics state to updateFavoriteComic then navigating to favorites

    return (

        <div className='create_new_comment'>
            <form>
                <h2>New Comment
                </h2>
                <fieldset>
                    <label htmlFor="name">Comment</label>
                    <input type="text" id="comments" onChange={controlInput} required autoFocus className="controlled_form 
                    comment_controlled_form" placeholder="comment description" value={comics.comment} />
                </fieldset>
                <button type="button" id="comment_submit_btn" className="submit_btn" onClick={saveComics}>Submit</button>
            </form>
        </div>
        // 2. on change once something in the inputform is typed controlInput is activated
    )
}