import React, {useState} from 'react'
//random array of hex codes
const randomColor = ["A", "B", "C", "D", "E", "F",
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
export default function ColorPicker(){
    //stateful component
    //function component
    //stateful functional component
    const [color, setColor] = useState('#FFFFFF')

    //function to get a random number
    function getRandomNumber() {
        return Math.floor(Math.random() * randomColor.length)
    }

    //function to get random hex codes
    function getRandomColor() {
        let hex = "#"
        for (let i = 0; i < 6; i++){
            hex += randomColor[getRandomNumber()]
        }
        return hex
    }

    //function to handle random color changes
    function randomColorChange(){
        setColor(getRandomColor()) //setter or mutator for our state
    }

    //function to handle color changes
    function handleColorChange(event){
        setColor(event.target.value)
    }

    //to randomly select colors for our component
    //onChange - nababago ang style ng component
    //onClick - pag naclick ang button, mababago ang color ng state
    //double curly braces cuz we are inherently changing the css of our element, read as JavaScript code, tapos magiging CSS code
    return(
        <>
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor:color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label > Select a color: </label>
            <input type="color" value = {color} onChange={handleColorChange} />
            <button className="randomize" onClick={randomColorChange}>Randomize</button>
        </div>
        </>
    )

}