import React, { useState } from 'react'

const RecordLabelForm = ({handleRecordLabelSubmit}) => {
    const [recordlabelForm, setRecordLabelForm] = useState({
        name: ''
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:9292/record_labels', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recordlabelForm)
        })
        .then(r => r.json())
        .then(rl => {
            handleRecordLabelSubmit(rl);
            setRecordLabelForm({
                name: ''
            })
        })
    }
    const handleChange = (e) => {
        setRecordLabelForm({...recordlabelForm, [e.target.name]: e.target.value})
    };

  return (
    <div>Add New Record Label
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" value={recordlabelForm.name} name="name" onChange={handleChange}/>
            <button>Create Record Label</button>
        </form>
    </div>
  )
}
export default RecordLabelForm;