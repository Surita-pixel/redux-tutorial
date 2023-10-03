

import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "./redux/userSlice"
import {Header} from "./components/Header"
import {Email} from "./components/Email"
import './App.css'

function App() {
 const dispatch = useDispatch()
 useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users/2")
  .then((response)=>response.json())
  .then((data)=> dispatch(addUser(data)))
  .catch((e)=>console.log(e));
 },[])
  return (
    <>
      <Header/>
      <Email />
    </>
  )
}

export default App
