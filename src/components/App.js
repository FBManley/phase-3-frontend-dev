import React, {useEffect, useState } from "react";
import '../App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Artist, ArtistForm, Header
import Artist from './Artist';
import ArtistForm from "./ArtistForm";

function App() {
    const [artists, setArtists] = useState([])
    useEffect(() => {
        fetch("http://localhost:9292/artists")
            .then(r => r.json())
            .then((artist) => setArtists(artist))
    }, []);

    const artistList = artists.map((artist) => (
        <Artist artist={artist}/>
    ))
   
    const handleArtistSubmit = (art) => {
        setArtists(art)
    }

  return (
   <div>
    welcome!
    <ArtistForm  handleArtistSubmit={handleArtistSubmit}/>
    {artistList}
   </div>
  );
}

export default App;