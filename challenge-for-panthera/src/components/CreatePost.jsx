import DinamicInput from "./DinamicInput";
import UserImage from "./UserImage";

export default function CreatePost () {

    return <div className="create-post-container">
        <UserImage />
        <DinamicInput />
    </div>
}