import React, {useEffect, useState } from "react";
import '../App.css';
import { v4 as uuidv4 } from 'uuid';
import RecordLabel from "./RecordLabel";
import RecordLabelForm from "./RecordLabelForm";

function App() {
    const [recordlabels, setRecordLabels] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/record_labels")
        .then(r => r.json())
        .then((recordlabels) => setRecordLabels(recordlabels))
    }, []);
    // useEffect(() => {
    //     fetch("http://localhost:9292/record_labels")
    //     .then(r => r.json())
    //     .then((rls) => {
    //         const updatedLabels = rls.map((record) => {
    //             return {...record, is_signed: true}
    //         })
    //         setRecordLabels(updatedLabels)
    //     })
        
    // }, []);



    const recordlabelsList = recordlabels.map((recordlabel) => (
        <RecordLabel recordlabel={recordlabel} key={uuidv4()}/>
    ))
    
    const handleRecordLabelSubmit = (recordlabel) => {
        setRecordLabels(recordlabel)
    }
    // function handleRecordLabelSubmit(addedlabel){
    //     const updatedLabels = recordlabels.map((tobeaddlabel) => {
    //         if(tobeaddlabel.id === addedlabel.id) return {...tobeaddlabel, is_signed: true};
    //         console.log("signed")
    //         return tobeaddlabel
    //     })
    //     setRecordLabels(updatedLabels)
    // }
    // function handleRecordLabelSubmit(recordlabel) {
    //     setRecordLabels([...recordlabels, recordlabel])
    // }
  return (
   <div>
    <h2>Welcome to SignMe! A talent finding app for prospective Record Labels.</h2>
   <RecordLabelForm handleRecordLabelSubmit={handleRecordLabelSubmit}/>
   {recordlabelsList}
   </div> 
  );
}

export default App;