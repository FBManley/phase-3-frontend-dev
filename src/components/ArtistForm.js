import React, { useState } from 'react'

const ArtistForm = ({recordlabel, handleArtistSubmit}) => {
    const [artistForm, setArtistForm] = useState({
        name: '',
        albums: '',
        is_signed: false,
        record_label_id: recordlabel
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:9292/artists', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(artistForm)
        })
        .then(r => r.json())
        .then(artist => {
            handleArtistSubmit(artist);
            
            setArtistForm({
                name: '',
                albums: '',
                is_signed: false,
            })
        })
    }

    const handleChange = (e) => {
        setArtistForm({...artistForm, [e.target.name]: e.target.value})
    };
    
  return (
    <div>Add a New Artist
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" value={artistForm.name} name="name" onChange={handleChange}/>
            <input type="text" placeholder="albums" value={artistForm.albums} name="albums" onChange={handleChange}/>
            <button>Create Artist</button>
        </form>
    </div>
  )
}
export default ArtistForm;
// send state as cb back to parent->ArtistList->RecordLabel->App to update the recordlabels state 