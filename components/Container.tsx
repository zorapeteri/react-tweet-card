import React, { useState, useEffect, useRef } from 'react'
import { photos } from '../photos'

const Container = ({ children }: { children: any }) => {
  const ref = useRef(null)
  const [bgImage, setBgImage] = useState('')

  useEffect(() => {
    if (ref?.current) {
      setBgImage(
        photos[
          Array.from(
            document?.querySelectorAll('.example-container') || []
          ).indexOf(ref.current)
        ]
      )
    }
  }, [ref])

  return (
    <div
      ref={ref}
      className="example-container"
      style={{
        fontSize: '12px',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '300px',
        display: 'grid',
        placeItems: 'center',
        padding: '30px 50px',
        boxSizing: 'border-box',
      }}
    >
      {children}
    </div>
  )
}

export default Container
