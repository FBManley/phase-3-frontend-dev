import React, {useState} from 'react';
import ArtistList from './ArtistList';
import ArtistForm from './ArtistForm';

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
        <ArtistForm />
    </div>
  )
}
export default RecordLabel;