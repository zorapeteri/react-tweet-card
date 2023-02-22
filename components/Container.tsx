import React, { useState, useEffect, useRef } from 'react'
import { photos } from '../photos'

const Container = ({
  children,
  withImages,
}: {
  children: any
  withImages?: boolean
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [bgImage, setBgImage] = useState('')
  const [hasImage, setHasImage] = useState(false)

  useEffect(() => {
    if (ref?.current) {
      setBgImage(
        photos[
          Array.from(
            document?.querySelectorAll('.example-container') || []
          ).indexOf(ref.current)
        ]
      )

      setTimeout(() => {
        setHasImage(
          Boolean(ref?.current?.querySelector('.react-tweet-card__image'))
        )
      }, 250)
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
        height: hasImage ? '600px' : '300px',
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
