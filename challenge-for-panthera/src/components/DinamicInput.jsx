'use client'
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import AddMedia from "./addMedia";
import smileIcon from "../../public/emoji-smile.png"

const DinamicInput = () => {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [inputValue, setInputValue] = useState('');

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


  return (
    <div>
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
            <EmojiPicker onEmojiClick={handleEmojiClick} theme='dark'/>
          </div>
        )}
        </div>
    </div>
  );
};

export default DinamicInput;
