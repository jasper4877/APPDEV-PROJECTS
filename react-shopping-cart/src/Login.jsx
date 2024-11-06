import React, {useState} from "react"
import Shop from "./Shop";
import AdminPanel from "./AdminPanel";
export default function Login(){
    let items = [
        {id: 1, name: "Item 1", price: 10},
        {id: 2, name: "Item 2", price: 15},
        {id: 3, name: "Item 3", price: 20},
      ]//list of objects to be imported as props
    let accounts = [
        {id:1, username: "customer", password: "customer", role: "customer"},
        {id:2, username: "admin", password: "admin", role: "admin"}
    ]
    //boolean state for loggin in
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState("")
    const [enteredUsernames, setEnteredUsernames] = useState("")
    const [enteredPasswords, setEnteredPasswords] = useState("")

    function getUsernames(event){
        setEnteredUsernames(event.target.value)
    }
    function getPasswords(event){
        setEnteredPasswords(event.target.value)
    }
    function handleLogin(){
         accounts.map((account) => {
            if(account.username === enteredUsernames && account.password === enteredPasswords){
                setIsLoggedIn(true)
                setRole(account.role)
            }
        })
    }
    const renderLogin = () =>{
        return(
            <div>
                <h1>Login: </h1>
                Username: <input type = "text" placeholder="Username" id ="username" onChange={getUsernames}/>
                Password: <input type = "text" placeholder="Password" id ="password" onChange={getPasswords}/>
                <button onClick = {handleLogin}>Login</button>
            </div>
        )
    }
    //component for rendering the shop
    const renderShop =() => {
        return(
            <Shop isLoggedIn = {isLoggedIn}items = {items}/>
        )
    }
    const renderAdmin = () => {
        return(
            <AdminPanel isLoggedIn = {isLoggedIn} accounts = {accounts}/>
        )
    }
    if(isLoggedIn === false){
        return renderLogin()
    }else{
        if(role==='admin'){
            return renderAdmin()
        }else{
        return renderShop()
        }
    }
}