export const FavoritesCard = ({comic}) => {
    return (

        <div className="comic_container">
            <img className="comic_image" src={`./images/${comic.name}.jpg`} width="30%" />
            <div className="comic_content">
                <h3>
                    <span className="card_comicname">
                        {comic.name}
                    </span>
                </h3>
                <p>Date Issued: {comic.dateIssued}</p>
                <p>Story Synopsis: {comic.description}</p>
                <button type="button" className="button" onClick={""}>
                    Add Comment
                </button>
                <button type="button" className="button" onClick={""}>
                    Edit Comment
                </button>
                <button type="button" className="button" onClick={""}>
                    Delete Comment
                </button>
            </div>
        </div>
    )
}