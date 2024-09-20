import React, { useEffect } from "react";
import { useUsers } from "./UserContext";
import axios from "axios";
import UserList from "./UserList";
import UserModel from "./UserModel";

const App = (): JSX.Element => {

    const userContext = useUsers()

    useEffect(() => {
        const getData = async () => {
            try {
                let response = await axios.get("https://jsonplaceholder.typicode.com/users")
                if (response.status === 200)
                    userContext?.dispatch({ type: "SET_USER", payload: response.data })
            }
            catch (e) {
                throw new Error("problem occured!!")
            }
        }
        getData()
    }, [])

    const addNewUser = ():void => {
        let newUser : UserModel = {
            id : Math.floor(Math.random()*100) ,
            name : "Mohammad",
            username : "M.sh",
            email : "aa@gmail.com"
        }
        userContext?.dispatch({type : "ADD_USER" , payload : newUser})
    }

    return (
        <>
        <UserList/>
        <button onClick={()=>addNewUser()}>Add user</button>
        </>
    )
}

export default App