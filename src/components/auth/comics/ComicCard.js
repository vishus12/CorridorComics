import React from 'react'

export const ComicCard = ({comic}) => {
    return (
        
        <div className="comic_container">
            <div className="comic_content">
              
              <img className="comic" src={`./images/${comic.name}.jpg`}/> 
                <h3>
                    <span className="card_comicname">
                        {comic.name}
                    </span>
                </h3>
                <p>Date Issued: {comic.dateIssued}</p>
                <p>Story Synopsis: {comic.description}</p>
            </div>
        </div>
    )
}
