import React from 'react'

export const ActivityCard = ({imgSrc, index, title, ...props}) => (
  <div {...props}>
    <img
      src={`https://res.cloudinary.com/thetripguru/image/upload/h_160,q_90,w_500/${imgSrc}.jpg`}
      alt="activity preview"
    />
    <p>
      {index}: {title}
    </p>
  </div>
)
