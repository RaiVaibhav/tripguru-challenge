import React from 'react'
import renderHTML from 'react-render-html'

export const ActivityExpanded = ({imgSrc, description, title}) => (
  <div className='activity-expanded'>
    <img
      src={`https://res.cloudinary.com/thetripguru/image/upload/h_160,q_90,w_500/${imgSrc}.jpg`}
      alt="activity preview"
    />
    <div className='description-div'>
      <div className='title'>{title}</div>
      <div className='description'>{renderHTML(description)}</div>
    </div>
  </div>
)
