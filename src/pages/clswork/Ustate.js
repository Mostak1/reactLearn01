import React, { useState } from 'react'
import { ToggleButton } from 'react-bootstrap';
import ReactDOM from "react-dom/client";

export const Ustate = () => {
    const [a, b] = useState("Wrong");
    const [brand, setBrand] = useState("Toyota");
    const [model, setModel] = useState("Axio Hybrid");
    const [year, setYear] = useState("2018");
    const [color, setColor] = useState("BumbleB Yellow");
    const [car, setCar] = useState({
        brand:"Toyota",
        model:"Axio Hybrid",
        year:"2018",
        color:"BumbelB Yellow",
    });
    const changeClr = () => {
        if (a === 'Wrong') {
            b('Write');
        } else {
            b('Wrong');
        }

    }
    return (
        <div>
            <h1>useState</h1>
            <h3>My Argument is {a.toString()}</h3>
            <button type='button' onClick={changeClr}>{a ? 'Wrong' : 'Write'}</button>

            <div className='fs-3 text-green'>My Car Model is {model} - {year} and the brand is {brand} also the color is {color}</div>

            <h3>Create a single Hook that holds an object:</h3>
            <div className='fs-3 text-green'>My Car Model is {car.model} - {car.year} and the brand is {car.brand} also the color is {car.color}</div>
<button type='button' onClick={() => {
        setCar({ ...car, color: 'Blue' });
    }}>Color Change</button>
        </div>
    )
}
