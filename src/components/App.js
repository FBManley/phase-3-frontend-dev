import React, {useEffect, useState } from "react";
import '../App.css';
import RecordLabel from "./RecordLabel";
import { v4 as uuidv4 } from 'uuid';
import RecordLabelForm from "./RecordLabelForm";

function App() {
    const [recordlabels, setRecordLabels] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/record_labels")
        .then(r => r.json())
        .then((recordlabels) => setRecordLabels(recordlabels))
    }, []);

    const recordlabelsList = recordlabels.map((recordlabel) => (
        <RecordLabel recordlabel={recordlabel} key={uuidv4()}/>
    ))
    
    const handleRecordLabelSubmit = (recordlabel) => {
        setRecordLabels(recordlabel)
        // needs to reflect updated list [...recordlabel, newartist]
    }
   
  return (
   <div>
    <header>Welcome to SignMe! A talent finding app for prospective Record Labels.</header>
   <RecordLabelForm handleRecordLabelSubmit={handleRecordLabelSubmit}/>
   {recordlabelsList}
   </div> 
  );
}

export default App;