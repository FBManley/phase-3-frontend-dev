import React, { useState, useEffect} from 'react'

const Users = () => {
    const [users, setUsers] = useState([])
    // const [userFormFlag, setUserFormFlag] = useState(false) // button that lets me add another user. index view that allows expansion to a form - gives create and read
    useEffect(() => {
        
    fetch("http://localhost:9292")
    .then((r) => r.json())
    .then((data) => console.log(data));
    }, [])
    
    return (
        <div>

        </div>
    )
}
export default Users;