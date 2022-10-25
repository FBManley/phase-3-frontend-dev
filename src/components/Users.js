import React, { useState, useEffect} from 'react'
import UserLink from './components/UserLink';

const Users = () => {
    const [users, setUsers] = useState([])
    // const [userFormFlag, setUserFormFlag] = useState(false) // button that lets me add another user. index view that allows expansion to a form - gives create and read
    useEffect(() => {
    fetch("http://localhost:9292")
    .then((r) => r.json())
    .then((data) => {
        console.log(data)
        setUsers(data)
    });
    }, [])

    const usersList = users.map( user => <UserLink key={user.id} user={user}/>)
    
    return (
        <div>
            <ul>
                {usersList}
            </ul>
        </div>
    )
}
export default Users;
//