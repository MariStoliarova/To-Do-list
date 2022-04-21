
import React, { useState } from 'react';

function Tasks({ vl }) {

    const [valueTask, setValueTask] = useState(true);
    const [valueButton, setValueButton] = useState(true);
    let task;// задача 
    let buttonDel;// кнопка удаления задачи

    if (valueTask) {
        task = <ul>
            <li>
                <input value={vl} style={{ margin: "10px", color: "grey", opacity: "0.9", border: "white", borderBottom: "2px solid grey" }} />
            </li>
        </ul>
    }
    if (valueButton) {
        buttonDel = <button onClick={changesTask} style={{ width: "120px", height: "25px", borderRadius: "20px", opacity: "0.5", margin: "8px" }}>
            Удалить задачу
        </button>
    }

    function changesTask() {
        setValueTask(false);
        setValueButton(false);
    }

    return <div style={{ display: "flex" }}>
        {task}
        {buttonDel}
    </div>

}
export default Tasks;