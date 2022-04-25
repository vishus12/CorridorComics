import React, { useState, useEffect } from 'react'
import { ComicCard } from './ComicCard'
import { getComics } from '../modules/ComicManager.js'
import { useNavigate } from 'react-router-dom'

export const ComicListComponent = () => {
    const [comics, setComics] = useState([])
    // const navigate = useNavigate();

    const getAllComics = () => {
        getComics()
        .then(response => {
            setComics(response)
            
        })
    }
    
    useEffect(() => {
        getAllComics()
    }, [])
    
    
    console.log(comics)
    return (
        <>
            <div className="container-cards">
                {comics.map(i => <ComicCard
                    key={i.id}
                    comic={i}
                   />)}
            </div>
        </>
    )
}