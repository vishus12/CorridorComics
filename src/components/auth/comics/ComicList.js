import React, { useState, useEffect } from 'react'
import { ComicCard } from './ComicCard'
import { getComics } from '../modules/ComicManager.js'
import { useNavigate } from 'react-router-dom'


export const ComicListComponent = ({getLoggedInUser}) => {
    //creating useState setting comics to an empty array
    const [comics, setComics] = useState([])


//getting all the comics from fetch and parsing the comics from database
    const getAllComics = () => {
        getComics()
        .then(response => {
            setComics(response)
            
        })
    }
// getAllComics is invoked when page is loaded
    useEffect(() => {
        getAllComics()
    }, [])
    
//Mapping individual comics to the comic card 
    return (
        <>
            <div className="container-cards">
                {comics.map(i => <ComicCard
                    key={i.id}
                    comic={i}
                    getLoggedInUser={getLoggedInUser}
                    //passing comic and getLoggedInUser to comic card
                    // key being a component react needs 
                   />)}
            </div>
        </>
    )
}