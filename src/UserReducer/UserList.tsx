import React, { useEffect } from 'react'
import UserModel from './UserModel'
import { useUsers } from './UserContext'


const UserList = (): JSX.Element => {

    const userContext = useUsers()

    const deleteUser = (id: number) => {
        userContext?.dispatch({type:"DELETE_USER" , payload:id})
    }

    return (
        <div>
            <table style={{ fontFamily: "arial, sans-serif", borderCollapse: "collapse", width: "100%", display: "flex", flexDirection: "column" }}>
                <tr>
                    <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>id</th>
                    <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>Name</th>
                    <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>Username</th>
                    <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>email</th>
                    <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}></th>
                </tr>
                <tr style={{ display: "flex", flexDirection: "column" }} >
                    {userContext?.state?.data?.map((item :UserModel) => (
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>{item.id}</td>
                            <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>{item.name}</td>
                            <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>{item.username}</td>
                            <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>{item.email}</td>
                            <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}><button
                                onClick={()=>deleteUser(item.id)}
                                style={{ width: "80px", height: "50px", borderRadius: "10px", border: "2px solid #ff6666", backgroundColor: "inherit", color: "#ff6666 " }}>Delete</button></td>
                        </div>
                    ))}
                </tr>
            </table>
        </div>
    )
}

export default UserList