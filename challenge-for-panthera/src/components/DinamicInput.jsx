'use client'
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import AddMedia from "./addMedia";
import Modal from 'react-modal';
import UserImage from "./UserImage";
import ImageEditor from "./ImageEditor";

const customStyles = {
  content: {
    bottom: 'auto',
    minHeight: '10rem',
    left: '50%',
    position: 'fixed',
    right: 'auto',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    minWidth: '20rem',
    width: 'auto',
    maxWidth: '60rem'
  },
};

const DinamicInput = ({setPost}) => {
  const [ postModal, setPostModal ] = useState(false);
  const [ isEnlarged, setIsEnlarged ] = useState(false);
  const [ showPicker, setShowPicker ] = useState(false);
  const [ inputValue, setInputValue ] = useState('');
  const [ selectedImage, setSelectedImage ] = useState();
  const [ privacy, setPrivacy ] = useState('public');
  const [ editImage, setEditImage ] = useState(false);
  const [ cropImageModal, setCropImageModal ] = useState(false);

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
    setSelectedImage(value)
    return setPostModal(true)
  }

  const handleCloseModal = () => {
    setSelectedImage(undefined)
    setPostModal(false)
  }

  const handleEdit = () => {
    setPostModal(false)
    setEditImage(true)
    setCropImageModal(true)
  }

  const handleNewImage = (image) => {
    setSelectedImage(image)
    setEditImage(false)
    setPostModal(true)
  }

  const handlePost = () => {
    const data = {
        text: inputValue,
        image: selectedImage,
        privacy,
    }
    
    setPostModal(false)
    if(data.text || data.image) {
      setPost(data)
    }
    setInputValue("")
    setSelectedImage(undefined)
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
        
        { postModal && (
            <Modal
              isOpen={postModal}
              onRequestClose={handleCloseModal}
              style={customStyles}
              className="Modal"
              overlayClassName="Overlay"

            >
              <div className="modal-card-container">
                <div className="control-modal">
                  <span>Create Post</span>
                  <button className="close-modal" onClick={handleCloseModal}>
                    <img src="./close-icon.png" alt="close modal" className="edit-icons"/>
                  </button>
                </div>
                <div className="modal-content">
                  <div>
                    <UserImage/>
                  </div>
                  <div>
                  <div className="modal-functions">
                  <div className="input-modal">
                    { selectedImage && (
                      <div className="image-container">
                        <img src={URL.createObjectURL(selectedImage)}  className="background-image"alt="selected image" />
                        <div className="button-container">
                          <div>
                            <button className="button-add-image button1">
                              <img src="./plus-icon.png" alt="add button" className="edit-icons" />
                            </button>
                            <button onClick={handleEdit} className="button-edit-image button2">
                              <img src="./edit-icon.png" alt="edit button" className="edit-icons" />
                              Edit
                            </button>
                          </div>
                          <div>
                            <button className="button-delete-image button3" onClick={() => setSelectedImage(undefined)}>
                              <img src="./close-icon.png" alt="close icon" className="edit-icons" />
                            </button>
                          </div>
                      </div>
                    </div>
                    )}
                    <div className="modal-input-container">
                      <textarea
                        value={inputValue}
                        className={`enlarging-input`}
                        placeholder='what are you thinking?'
                        onClick={handleClick}
                        onChange={e => setInputValue(e.target.value)}
                      />
                      <div className="emoji-container">
                          <img alt="emojis button" onClick={togglePicker} className="emoji-button" src="./emoji-smile.png"/>
                      </div>
                    </div>
                    {showPicker && (
                      <div className="emoji-picker">
                        <EmojiPicker skinTonesDisabled searchDisabled onEmojiClick={handleEmojiClick} theme='dark'/>
                      </div>
                    )}
                  </div> 
                </div>
                <div className="modal-input-functions">
                  <div className="modal-subfunctions">
                  <AddMedia selectedImage={handleSaveImage}/>
                    <select className='dropdown pointer' onChange={(value) => handleSelectorChange(value)} name="selectedFruit">
                      <option value="public">Public</option>
                      <option value="private">Private</option>
                    </select>
                  </div>
                  <div className="subfunctions">
                    <button className="post-button" onClick={handlePost}>Post</button>
                  </div>
                </div>
                  </div>
                </div>
              </div>
            </Modal>
        )}
        { editImage && (
            <ImageEditor src={selectedImage} newImage={handleNewImage} />
        )}
    </div>
  );
};

export default DinamicInput;
