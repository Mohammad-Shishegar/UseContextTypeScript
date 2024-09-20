import React, { useEffect, useState } from 'react'
import UserModel from './UserModel'
import UserList from './UserList'
import { useUsers } from './UserContext'
import axios from 'axios'

function App(): JSX.Element {

    useEffect(() => {
        const getData = async () => {
            try {
                let response = await axios.get("https://jsonplaceholder.typicode.com/users")
                if (response.status === 200)
                    userContext?.setAllUser(response.data)
            }
            catch (e) {
                throw new Error("problem occured!!")
            }
        }
        getData()
    }, [])

    const userContext = useUsers()

    return (
        <div>
            <UserList users={userContext?.users} />
        </div>
    )
}

export default App