import React, {useState} from 'react';
import ArtistList from './ArtistList';

const RecordLabel = ({recordlabel}) => {
//    const {artists:}  = recordlabel 
    const [seeArtists, setSeeArtists] = useState(false)
    
    const handleArtistClick = () => {
        setSeeArtists(!seeArtists)
    }

  return (
    <div>
        <div>
            <header>Record Label:
                <h1>{recordlabel.name}</h1><button onClick={handleArtistClick}>{seeArtists ? 'Hide Artists' : 'See Artists'}</button>
            </header>
        </div>
        <ArtistList recordlabel={recordlabel} seeArtists={seeArtists}/>
    </div>
  )
}
export default RecordLabel;