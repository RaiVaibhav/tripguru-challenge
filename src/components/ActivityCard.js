import React from 'react'

export const ActivityCard = ({imgSrc, index, title, ...props}) => (
  <div {...props} className='activity-card'>
    <img
      src={`https://res.cloudinary.com/thetripguru/image/upload/h_160,q_90,w_500/${imgSrc}.jpg`}
      alt="activity preview"
    />
    <div className='title-div'>
      <span>
        <b className='index'>{index} - </b> <span className='title'>{title}</span>
      </span>
    </div>
  </div>
)
