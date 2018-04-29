import React from 'react'

export const ActivityExpanded = ({imgSrc, description, title}) => (
  <div>
    <img
      src={`https://res.cloudinary.com/thetripguru/image/upload/h_160,q_90,w_500/${imgSrc}.jpg`}
      alt="activity preview"
    />
    <p> {title} </p>
    <p> {description} </p>
  </div>
)
