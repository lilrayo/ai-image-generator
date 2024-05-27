import React from 'react'
import './ImageGenerator.css'
import ai from '../Assets/ai.png'
const ImageGenerator = () => {
  return (
    <div className='ai-image-generator'>
      <div className='header'>
        AI Image <span>Generator</span>
        <div className='img-loading'>
          <div className='image'>
            <img src={ai} alt='ai-image' />
          </div>
          <div className='search-box'>
            <input type="text" className='search-input' placeholder='Describe what you want to see'/>
            <div className='generate-btn'>Generate</div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ImageGenerator
