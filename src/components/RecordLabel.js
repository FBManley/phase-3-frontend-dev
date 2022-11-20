import React, {useState} from 'react';
import ArtistList from './ArtistList';
import { v4 as uuidv4 } from 'uuid';

const RecordLabel = ({recordlabel}) => {
    const [seeArtists, setSeeArtists] = useState(false)
    
    const handleArtistClick = () => {
        setSeeArtists(!seeArtists)
    }
  
  return (
    <div>
        <div>
            <header key={uuidv4()} >Record Label:
                <h1  >{recordlabel.name}:{recordlabel.id} </h1>
                <button onClick={handleArtistClick}>{seeArtists ? 'Hide Artists' : 'Show Artists'}</button>
            </header>
        </div>
        <ArtistList recordlabel={recordlabel} seeArtists={seeArtists} />
    </div>
  )
}
export default RecordLabel;