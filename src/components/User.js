import React, { useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Task from './Task'

const User = () => {
    // render user and bunch of tasks (able to edit/delete tasks)
    const [owner, setOwner] = useState({
        tasks: []
    })
    const [taskFormFlag, setDogFormFlag] = useState(false)
    
    const params = useParams()

    useEffect(() => {
        fetch (`http://localhost:9292/users/${params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        }) 
        // fetch user and tasks that should be on this page
    }, [])
  return (
    <div>
        <h2>I am a user</h2>
    </div>
  )
}

export default User;
