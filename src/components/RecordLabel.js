import React, {useState} from 'react';
import ArtistList from './ArtistList';

const RecordLabel = ({recordlabel}) => {
//    const {artists:}  = recordlabel 
    const [seeArtists, setSeeArtists] = useState(false)
    
    const handleArtistClick = () => {
        setSeeArtists(!seeArtists)
    }
    
  return (
    <div>RecordLabel
        <thead>
            <tr>
                <th>{recordlabel.name}</th>
                <th>
                    <button onClick={handleArtistClick}>{seeArtists ? 'Hide Artists' : 'See Artists'}</button>
                </th>
            </tr>
        </thead>
        <ArtistList recordlabel={recordlabel} seeArtists={seeArtists}/>
    </div>
  )
}
export default RecordLabel;