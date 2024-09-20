import React, { Context, createContext, useContext, useReducer, useState } from 'react'
import UserModel from './UserModel'


const initialState = {
    data: [
        {
            id: 0,
            name: "",
            username: "",
            email: "",
        }
    ]
}

type ActionsType =
    { type: "SET_USER", payload: UserModel[] } |
    { type: "DELETE_USER", payload: number } |
    { type: "ADD_USER", payload: UserModel | null }

type UserReducerType = {
    state: typeof initialState | any,
    dispatch: ({ type, payload }: ActionsType) => void
}



const userReducer = (state: typeof initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET_USER":
            return {
                data: action.payload
            }
        case "DELETE_USER": {
            let temp = state.data.filter(item => item.id !== action.payload)
            return {
                data: temp
            }
        }
        case "ADD_USER": {
            if(action.payload)
                state.data.push(action.payload)
            action.payload = null // because in develop mod this function run 2 times
            return {data: state.data}
        }
        default:
            return state

    }
}

type ContainerProps = {
    children: React.ReactNode
}

const UserContext = createContext<UserReducerType | null>(null)

export const UserContextProvider = ({ children }: ContainerProps) => {

    const [state, dispatch] = useReducer<any>(userReducer, initialState)

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    )

}

export const useUsers = (): UserReducerType | null => {
    const context = useContext(UserContext)
    if ((context === undefined))
        throw new Error("UserContext was used outside context provider!")
    return context
}
