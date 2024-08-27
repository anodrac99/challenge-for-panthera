'use client'
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import AddMedia from "./addMedia";

const DinamicInput = ({setPost}) => {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedImage, SetSelectedImage] = useState();
  const [privacy, setPrivacy] = useState('public')

  const handleClick = () => {
    setIsEnlarged(!isEnlarged);
  };

  const handleEmojiClick = (emojiObject) => {
    setInputValue(prev => prev + emojiObject.emoji);
    setShowPicker(false);
  };

  const togglePicker = () => {
    setShowPicker(prev => !prev);
  };

  const handleSelectorChange = (value) => {
    setPrivacy(value.target.value)
  }

  const handleSaveImage = (value) => {
    SetSelectedImage(value)
  }

  const handlePost = () => {
    const data = {
        text: inputValue,
        image: selectedImage,
        privacy,
    }
    
    return setPost(data)
  }

  return (
    <div className="dinamic-input-container">
        <div className={`input-container ${isEnlarged ? 'enlarged' : ''}`}>
            <textarea
                value={inputValue}
                className={`enlarging-input`}
                placeholder='what are you thinking?'
                onClick={handleClick}
                onChange={e => setInputValue(e.target.value)}
            />
            <div className="emoji-container">
            { isEnlarged && 
                <img alt="emojis button" onClick={togglePicker} className="emoji-button" src="./emoji-smile.png"/>
            }
            </div>
            {showPicker && (
                    <div className="emoji-picker">
                        <EmojiPicker skinTonesDisabled searchDisabled onEmojiClick={handleEmojiClick} theme='dark'/>
                    </div>
            )}
        </div>
        { isEnlarged && (
            <div className="input-functions-container">
            <AddMedia selectedImage={handleSaveImage}/>
            <div className="subfunctions">
                <select className='dropdown' onChange={(value) => handleSelectorChange(value)} name="selectedFruit">
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                </select>
                <button className="post-button" onClick={handlePost}>Post</button>
                </div>
            </div>
        )}
    </div>
  );
};

export default DinamicInput;
