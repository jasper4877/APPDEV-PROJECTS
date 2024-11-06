import React, {useState} from "react";
import Login from "./Login";

export default function Shop(props){
    let ShopItems = props.items //these are arrays of objects being passed to ShopItems
    const [cart, setCart] = useState([])

    function AddItem(item){
        setCart(c => [...c, item])//state for our cart
    }
    //function to render 
    function renderItems(){
        return(
            ShopItems.map((item) => {
                return(
                    <>
                        <li key = {item.id}>{item.name}</li>
                        <p>Price per piece: ${item.price}</p>
                        <button onClick = {() => AddItem(item)}>Add to Cart! </button>
                    </>
                )
            })
        )
    }//funcion to render the items for the cart
    const renderCart=()=>{
        return(
            cart.map((item) =>{
                return(
                    <>
                        <li key = {item.id}>{item.name}</li>
                        <p>Price per piece: ${item.price}</p>
                    </>
                )
            })
        )
    }
    if(props.isLoggedIn === false){
        return <Login />
    }
    else{
    return(
        <>
            <h4>This is the shop: </h4>
            <ul>{renderItems()}</ul>
            <h4>Cart Items: </h4>
            <ul>{(cart.length > 0 ?(<ul>{renderCart()}</ul>) : <p>There are no items in the cart!</p>)}</ul>
        </>
    )
    }
}