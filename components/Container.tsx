import React from 'react'
import randomPhoto from '../randomPhoto'

const Container = ({ children }: { children: any}) => (
    <div style={{
        fontSize: '12px',
        backgroundImage: `url(${randomPhoto()})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '300px',
        display: 'grid',
        placeItems: 'center',
        padding: '30px 50px',
        boxSizing: 'border-box'
    }}>
        {children}
    </div>
)

export default Container