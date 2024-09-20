import React, { Context, createContext, useContext, useState } from 'react'
import UserModel from './UserModel'
import { JsxElement } from 'typescript'

type UserContextType = {
    users: UserModel[] | undefined,
    addUser: (user: UserModel) => void,
    deleteUser: (id: number) => void,
    setAllUser: (data: UserModel[]) => void
}

type ContainerProps = {
    children: React.ReactNode
}

const UserContext = createContext<UserContextType | null>(null)

export const UserContextProvider = ({ children }: ContainerProps): JSX.Element => {

    const [users, setUsers] = useState<UserModel[]>()

    const addUser = (user: UserModel): void => {
        let temp: UserModel[] | undefined = users
        temp?.push(user)
        setUsers(temp)
    }

    const deleteUser = (id: number): void => {
        let temp: UserModel[] | undefined = users?.filter(item => item.id !== id)
        setUsers(temp)
    }

    const setAllUser = (data: UserModel[]): void => {
        if (data)
            setUsers(data)
    }

    return (
        <UserContext.Provider value={{ users, addUser, deleteUser, setAllUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUsers = (): UserContextType | null => {
    const context = useContext(UserContext)
    if ((context === undefined))
        throw new Error("UserContext was used outside context provider!")
    return context
}
