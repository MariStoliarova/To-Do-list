import './App.css';
import React, { useState } from 'react';
import DataInput from './DataInput';

function App() {
    const [valueCurrently, setValueP] = useState(" ");
    const valueAction = "добавить задачу";

    function conclusion() {
        setValueP([<DataInput />, ...valueCurrently]);
    }

    return <>
        <h1>To Do List</h1>
        <div style={{ border: "1px solid grey", color: "#848482" }}>
            <div style={{ lineHeight: "2.5", margin: "5px" }}>
                Date {new Date().toLocaleDateString()}
            </div>

            <button onClick={conclusion} style={{ width: "70px", background: "#B2C3F0", opacity: "0.5", margin: "10px", borderRadius: "10px" }}>
                +
            </button>

            <span>
                {valueAction}
            </span>

            <ul style={{ listStyleType: "none" }}>
                {valueCurrently}
            </ul>

        </div>

    </>
}
export default App;


