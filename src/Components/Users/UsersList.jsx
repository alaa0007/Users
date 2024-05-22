import React from 'react'
import classes from './UsersList.module.css'

import Card from '../UI/Card'

const UsersList = ({ users }) => {
  return (
    <>
        {
            users.length === 0 && <p style={{textAlign: 'center', color: 'white'}}>No users found!</p>
        }
        {
            users.length > 0 && 
                <Card className={classes.users}>
                    <ul>
                        {
                            users.map((user) => <li key={user.id}>{user.username} ({user.age} years old) </li>)
                        }
                    </ul>
                </Card>
        }
    </>
  )
}

export default UsersList;