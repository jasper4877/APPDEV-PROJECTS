import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import Footer from './Footer'
import ListOfFruits from './ListOfFruits'

function App() {
  const fruits = [
    {id: 1, name: "apple", color: "red"},
    {id: 2, name: "banana", color: "yellow"},
    {id: 3, name: "orange", color: "orange"},
    {id: 4, name: "grape", color: "purple"},
    {id: 5, name: "kiwi", color: "green"},
  ]
  const desserts = [
    {id: 1, name: "Cake", color: "red"},
    {id: 2, name: "ice cream", color: "blue"},
    {id: 3, name: "pie", color: "green"},
  ]
  return (
    <>
    <Header/>
    {fruits.length > 0 && <ListOfFruits items= {fruits} category = "My Favorite Fruits"/>}
    {desserts.length > 0 && <ListOfFruits items = {desserts} category = "My Favorite Desserts"/>}
    <Footer/>
    </>
  )
}

export default App
