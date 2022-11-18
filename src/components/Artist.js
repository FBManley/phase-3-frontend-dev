import React, {useState} from 'react'

// import React, { useState } from "react";
// show record label list? button for crud

const Artist = ({artist, onDeleteArtist}) => {
    const [isSigned, setIsSigned] = useState(artist.is_signed)

    const handleDelete = () => {
        fetch(`http://localhost:9292/artists/${artist.id}`, {
            method: 'DELETE',
        })
        .then(r => r.json())
        .then(deletedArtist => onDeleteArtist(deletedArtist.id))
    }
    const handleClick = () => {
        fetch(`http://localhost:9292/artists/${artist.id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "is_signed": !isSigned
            })
        })
        .then(r => r.json())
        .then(data => setIsSigned(data.is_signed))
    }
  
  return (
    <div>
        <div>
            <ul>
                <h3>Artist: {artist.name}:</h3>
                <li>Album: "{artist.albums}"</li>
                <button onClick={handleClick}>{isSigned ? "Yes" : "No"}</button>
                <button onClick={handleDelete}>delete artist</button>
            </ul>
        </div>
        
    </div>
  )
}

export default Artist;