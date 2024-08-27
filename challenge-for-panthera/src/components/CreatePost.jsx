import DinamicInput from "./DinamicInput";
import UserImage from "./UserImage";

export default function CreatePost ({setPost}) {

    const handleSetPost = (post) => {
        setPost(post)
    }

    return <div className="create-post-container">
        <UserImage />
        <DinamicInput setPost={handleSetPost} />
    </div>
}