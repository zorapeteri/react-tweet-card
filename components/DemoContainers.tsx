import React from 'react'

const imgSource = 'https://images.unsplash.com/photo-1468779065891-103dac4a7c48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80'

export const OutsideContainer = ({ children }: { children: any}) => (
    <div style={{
        fontSize: '10px',
        backgroundImage: `url(${imgSource})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '400px',
        maxHeight: '400px',
        padding: '50px',
        boxSizing: 'border-box',
    }}>
        {children}
    </div>
)

export const ParentContainer = ({ children }: { children: any}) => (
    <>
    <span
        style={{
            color: 'purple',
            margin: '4px 0',
            padding: '0 4px',
            fontSize: '16px',
            fontWeight: 'bold',
            backgroundColor: 'rgba(255,255,255,0.6)',
            alignSelf: 'end',
            justifySelf: 'start'
        }}
    >
        ParentContainer
    </span>
    <div style={{
        border: '4px solid purple',
        width: '100%',
        height: '100%',
        display: 'grid',
        placeItems: 'center',
        boxSizing: 'border-box',
        padding: '7px'
    }}>
        {children}
    </div>
    </>
);