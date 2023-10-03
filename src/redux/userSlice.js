import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    name:"",
    userName:"",
    email:"",
}

export const userSlice = createSlice(
    {
    name:"user",
    initialState,
    reducers:{
        addUser: (state, accion)=>{
            const {name, username, email}=accion.payload
            state.name = name;
            state.username = username
            state.email = email
        }
    },
    changeEmail: (state, accion)=>{
        const {email}=accion.payload
        state.email = email
    }
    })

export const {addUser, changeEmail} = userSlice.actions;
export default userSlice.reducer 