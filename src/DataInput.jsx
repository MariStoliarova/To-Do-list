import React, { useState } from 'react';
import Tasks from './Tasks';


function DataInput() {
    const [valueCondition, setValueCondition] = useState("Задача");
    const [valueTextarea, setValueTexarea] = useState(" ");
    const [textareaVisible, setTexareaVisible] = useState(true);//видимость блока с полем ввода, кнопкой добавления, кнопкой отмены 
    let TextareaButtonDelButtonCancel;//блок с полем ввода, кнопкой добавления, кнопкой отмены  

    if (textareaVisible) {
        TextareaButtonDelButtonCancel = <li>
            <textarea value={valueTextarea} onChange={(event) => setValueTexarea(event.target.value)} style={{ borderRadius: "10px", border: " 1px solid grey", color: "grey" }} />

            <div style={{ marginBottom: "10px" }}>
                <button onClick={buttonClickAdd} style={{ marginRight: "10px", background: "green", opacity: "0.5", borderRadius: "10px" }}>
                    Добавить задачу
                </button>

                <button onClick={buttonClickDel} style={{ background: "red", opacity: "0.5", borderRadius: "10px" }}>
                    Отмена
                </button>
            </div>
        </li>
    }

    function buttonClickAdd() {
        setValueCondition(<Tasks vl={valueTextarea} />);
        setTexareaVisible(false);
    }
    function buttonClickDel() {
        setTexareaVisible(false);
        setValueCondition(" ");
    }

    return <div>
        <div>
            {valueCondition}
        </div>
        <div>
            {TextareaButtonDelButtonCancel}
        </div>
    </div>
}
export default DataInput;