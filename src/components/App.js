import React, {useEffect, useState } from "react";
import '../App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Artist, ArtistForm, Header
// import Artist from './Artist';
// import ArtistForm from "./ArtistForm";
import RecordLabel from "./RecordLabel";
import RecordLabelForm from "./RecordLabelForm";

function App() {
    const [recordlabels, setRecordLabels] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/record_labels")
        .then(r => r.json())
        .then((recordlabels) => setRecordLabels(recordlabels))
    }, []);

    const recordlabelsList = recordlabels.map((recordlabel) => (
        <RecordLabel recordlabel={recordlabel} key={recordlabel.id}/>
    ))
    
    const handleRecordLabelSubmit = (recordlabel) => {
        setRecordLabels(recordlabel)
    }

  return (
   <div>
    <h2>Welcome to SignMe! A talent finding app for prospective Record Labels.</h2>
   <RecordLabelForm handleRecordLabelSubmit={handleRecordLabelSubmit}/>
   {recordlabelsList}
   </div>
  );
}

export default App;