export const FavoritesCard = ({comic, handleDeleteFavoriteComic}) => {
    return (

        <div className="comic_container">
            <img className="comic_image" src={`./images/${comic.comic.name}.jpg`} width="30%" />
            <div className="comic_content">
                <h3>
                    <span className="card_comicname">
                        {comic.comic.name}
                    </span>
                </h3>
                <p>Date Issued: {comic.comic.dateIssued}</p>
                <p>Story Synopsis: {comic.comic.description}</p>
                <button type="button" className="button" onClick={""}>
                    Add Comment
                </button>
                <button type="button" className="button" onClick={""}>
                    Edit Comment
                </button>
                <button type="button" className="button" onClick={""}>
                    Delete Comment
                </button>
                <button type="button" className="button" onClick={() => handleDeleteFavoriteComic(comic.id)}>
                    Delete Comic
                </button>
            </div>
        </div>
    )
}