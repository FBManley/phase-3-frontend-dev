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
    // const onEditArtist = () {

    // }
    if(seeArtists === true){
        return(
            <tr>
                <ArtistForm recordlabel={recordlabel.id} handleArtistSubmit={handleArtistSubmit}/>
                <tr>
                    <th>
                        {artists.map((artist) => (<Artist key={artist.id} artist={artist} onDeleteArtist={onDeleteArtist}/>))}
                    </th>
                </tr>
            </tr>
        )
    }
}
export default ArtistList;