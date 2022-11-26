import React, { useState } from 'react';
import ArtistForm from './ArtistForm';
import Artist from './Artist';
import { v4 as uuidv4 } from 'uuid';

const ArtistList = ({recordlabel, seeArtists}) => {
    const [artists, setArtists] = useState(recordlabel.artists)

    const handleArtistSubmit = (artist) => {
        setArtists([...artists, artist])
    }

    const onDeleteArtist = (id) => {
        const updatedArtists = artists.filter(artist => artist.id !== id);
        setArtists(updatedArtists)
    }
    if(seeArtists === true){
        return(
            <div>
                <ArtistForm recordlabel={recordlabel.id} handleArtistSubmit={handleArtistSubmit}/>
                <div>
                    <p>
                        {artists.map((artist) => (<Artist  key={uuidv4()} artist={artist} onDeleteArtist={onDeleteArtist} recordlabel={recordlabel.id}/>))}
                    </p>
                </div>
            </div>
        )
    }
}
export default ArtistList;
