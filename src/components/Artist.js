import React, {useState} from 'react'
// import React, { useState } from "react";
// show record label list? button for crud

const Artist = ({artist, onDeleteArtist}) => {
    // const [isSigned, setIsSigned] = useState(artist.has_signed)

    const handleDelete = () => {
        fetch(`http://localhost:9292/${artist.id}`, {
            method: 'DELETE',
        })
        .then(r => r.json())
        .then(deletedArtist => onDeleteArtist(deletedArtist.id))
    }
    // const handleClick = () => {
    //     fetch(`http://localhost:9292/${artist.id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify()
    //     })
    //     .then(r => r.json())
    //     .then()
    // }
  return (
    <div>
        <thead>
            <tr>
                <th>{artist.name}</th>
                <th>{artist.albums}</th>
                <th>
                    <button>edit albums</button>
                </th>
                <th>
                    <button onClick={handleDelete}>x</button>
                </th>
            </tr>
        </thead>
        
    </div>
  )
}

export default Artist;