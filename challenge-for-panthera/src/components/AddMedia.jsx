import { useRef } from "react"

export default function AddMedia ({selectedImage}) {
    const imageRef = useRef(null)

    const handleImage = () => {
        imageRef.current.click()
    }

    const handleSelectedImage = (event) => {
        console.log(event.target.files[0]);
        
        selectedImage(event.target.files[0])
    }

    return <div className="add-media-container">
        <span>Agrega</span>
        <img alt="image button" onClick={handleImage} className="icons-pointer" src="./image-icon.png"/>
        <input type="file" onChange={handleSelectedImage} ref={imageRef} style={{ display: "none"}}/>
        <img alt="video button" onClick={() =>{}} className="icons-pointer" src="./video-icon.png"/>
        <img alt="voice button" onClick={() =>{}} className="icons-pointer" src="./voice-icon.png"/>
        <img alt="tag button" onClick={() =>{}} className="icons-pointer" src="./tag-icon.png"/>
    </div>
}
