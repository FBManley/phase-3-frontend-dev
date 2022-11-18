import React, {useState} from 'react'

// import React, { useState } from "react";
// show record label list? button for crud

const Artist = ({artist, onDeleteArtist}) => {
    // const [selectrecordlabel, setSelectedRecordLabel] = useState()
    
    const handleDelete = () => {
        fetch(`http://localhost:9292/artists/${artist.id}`, {
            method: 'DELETE',
        })
        .then(r => r.json())
        .then(deletedArtist => onDeleteArtist(deletedArtist.id))
    }
    const handleAddToLabel = () => {
        fetch(`http://localhost:9292/artist/${artist.id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
        .then(r => r.json())
        .then()
    }
  return (
    <table>
        <thead>
            <tr>
                <th>Artist:{artist.name}:</th>
                <th>Album:"{artist.albums}"</th>
                <th>
                    <button onClick={handleAddToLabel}>sign artist</button>
                </th>
                <th>
                    <button onClick={handleDelete}>delete artist</button>
                </th>
            </tr>
        </thead>
        
    </table>
  )
}

export default Artist;