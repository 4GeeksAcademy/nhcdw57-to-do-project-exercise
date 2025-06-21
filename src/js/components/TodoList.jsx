import React, { useState } from "react";

//include images into your bundle



//create your first component
const ToDoListComponent = () => {
    const [toDoList, setToDoList] = useState(["Make the Bed", "Wash my hands", "Eat", "Walk the dog"]);
    const [input, setInput] = useState("");

    function inputEnter(event) {
        if (event.key === "Enter") {
            setToDoList((oldToDoList) => [...oldToDoList, event.target.value])
        }
    }

    function deleteItem(target) {
        setToDoList((oldToDoList)=>{
            let updatedList = oldToDoList.filter((element,index)=>index !== target);
            return updatedList
        })
    }

    let mappedToDoList = toDoList.map((listItem, index) => (
        <li className="list-group-item fs-3 d-flex justify-content-between" key={index}>{listItem} <button type="button" className="btn delete-btn text-danger p-0" onClick={()=>deleteItem(index)}><i className="bi bi-x-lg"></i></button></li>
    ));

    return (
        <ul className="list-group">
            <li className="list-group-item p-0">
                <input type="text" className="form-control w-100 fs-3" placeholder="What needs to be done?" value={input} onKeyDown={inputEnter} onChange={(e) => setInput(e.target.value)} />
            </li>
            {mappedToDoList}
            <li className="list-group-item fs-3"><span className="fs-5 text-secondary">{toDoList.length} {(toDoList.length === 1) ? "item" : "items"} left</span></li>
        </ul>
    );
};

export default ToDoListComponent;