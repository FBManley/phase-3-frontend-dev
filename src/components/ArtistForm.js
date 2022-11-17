import React, { useState } from 'react'

const ArtistForm = ({handleArtistSubmit}) => {
    const [artistForm, setArtistForm] = useState({
        name: '',
        albums: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:9292/artist', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(artistForm)
        })
        .then(r => r.json())
        .then(art => {
            handleArtistSubmit(art);
            setArtistForm({
                name: '',
                albums: ''
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
            <input type="text" placeholder="albums" value={artistForm.albums} albums="albums" onChange={handleChange}/>
            <button>Create Artist</button>
        </form>
    </div>
  )
}
export default ArtistForm;