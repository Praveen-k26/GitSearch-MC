import React from 'react';
import './card.styles.scss'

const Card = ({avatarurl, htmlurl, name, bio, location}) => {

    return (
        <div className='wrapper'>
            <div className='container'>
                <header className='header'>
                    <img src={avatarurl} alt={name} className='img'/>
                        <h4 className='name'>{name}</h4>

                </header>
                <p className='bio'>{bio}</p>
                <p className='location'>{location}</p>
                <a href={htmlurl} className='a'>Follow</a>
            </div>
        </div>
    )
}

export default Card;