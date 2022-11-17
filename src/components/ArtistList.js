import React, { useState } from 'react';
import ArtistForm from './ArtistForm';
import Artist from './Artist';

const ArtistList = ({recordlabel, seeArtists}) => {
    const [artists, setArtists] = useState(recordlabel.artists)

    const handleArtistSubmit = (artist) => {
        setArtists([...artists, artist])
    }
    const onDeleteArtist = (id) => {
        const updatedArtists = artists.filter(artist => artist.id !==id);
        setArtists(updatedArtists)
    }
    if(seeArtists === true){
        return(
            <div>
                <ArtistForm recordlabel={recordlabel.id} handleArtistSubmit={handleArtistSubmit}/>
                <h3>Artists:</h3>
                <table>
                    <tbody>
                        {artists.map((artist) => (<Artist key={artist.id} artist={artist} onDeleteArtist={onDeleteArtist}/>))}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ArtistList;