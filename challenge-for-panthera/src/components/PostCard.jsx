import UserImage from "./UserImage";

export default function PostCard ({post}) {
    
    return <div className="post-card-container">
        <div className="post-header">
            <div className="header-user-info">
                <UserImage />
                <div className="header-user-status">
                    <span>Juan</span>
                    <img src="./check-icon.png" alt="check tag" className="icons-user-header" />
                </div>
                <span className="header-privacy-icon">&bull; {`${5} min`}<img src="./globe-icon.png" alt="world icon" className="icons-user-header" /></span>
            </div>
            <div>
                <img src="./dots-horizontal.png" className="icons-pointer" alt="more options icon" />
            </div>
        </div>
        <img className='post-image' src={URL.createObjectURL(post.image)} alt="selected image" />
        <p className="post-text">{post.text}</p>
        <hr color="#31312E"/>
        <div className="interactions">
            <span className="interactions-buttons">
                <img src="./hand.png" alt="like icon" />
                {`${25} Likes`}
            </span>
            <span className="interactions-buttons">
                <img src="./comment-icon.png" alt="comment icon" className="interactions-icons"/>
                {`${25} Comment`}
            </span>
            <span  className="interactions-buttons">
                <img src="./share-icon.png" alt="share icon" className="interactions-icons"/>
                {`${10} Share`}
            </span>
        </div>
    </div>
}