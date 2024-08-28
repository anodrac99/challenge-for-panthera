import ReactCrop, {convertToPixelCrop} from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import { useState } from 'react'

export default function ImageEditor({ src, newImage }) {

    const [finalImage, setFinalImage] = useState(src)
    const [crop, setCrop] = useState({
        unit: '%', // Can be 'px' or '%'
        x: 25,
        y: 25,
        width: 50,
        height: 50
    })

  const handleSave = () => {
    newImage(finalImage)
  }

  return (
    <div className='image-editor-container'>
        <ReactCrop onComplete={c => setFinalImage(convertToPixelCrop(c))} crop={crop} onChange={c => setCrop(c)}>
            <img src={URL.createObjectURL(src)} />
        </ReactCrop>
        <button onClick={handleSave}>save</button>
    </div>
  )
}