import React, { useState } from "react";

//include images into your bundle



//create your first component
const ToDoListComponent = () => {
    const [toDoList, setToDoList] = useState([["Make the Bed", false], ["Wash my hands", false], ["Eat", false], ["Walk the dog", false]]);
    const [input, setInput] = useState("");

    function inputEnter(event) {
        if (event.key === "Enter") {
            setToDoList((oldToDoList) => [...oldToDoList, [event.target.value, false]])
            setInput("");
        }
    }

    function deleteItem(target) {
        setToDoList((oldToDoList) => {
            let updatedList = oldToDoList.filter((element, index) => index !== target);
            return updatedList
        })
    }

    function toggleFinished(target) {
        setToDoList((oldToDoList) => {
            let toggledList = oldToDoList.map((element, index) => (target === index) ? [element[0], !element[1]] : element);
            return toggledList
        });
    }

    let mappedToDoList = toDoList.map((listItem, index) => {
        let classes = (listItem[1]) ? "list-group-item fs-3 d-flex justify-content-between bg-success" : "list-group-item fs-3 d-flex justify-content-between";

        return (
            <li className={classes} key={index} onClick={() => toggleFinished(index)}>{listItem[0]} <button type="button" className="btn delete-btn text-danger p-0" onClick={() => deleteItem(index)}><i className="bi bi-x-lg p-2 bg-danger-subtle"></i></button></li>
        )
    });

    return (
        <ul className="list-group rounded-0">
            <li className="list-group-item p-0">
                <input type="text" className="form-control w-100 fs-3" placeholder="What needs to be done?" value={input} onKeyDown={inputEnter} onChange={(e) => setInput(e.target.value)} />
            </li>
            {mappedToDoList}
            <li className="list-group-item fs-3"><span className="fs-5 text-secondary">{toDoList.length} {(toDoList.length === 1) ? "item" : "items"} left</span></li>
            <div>

            </div>
        </ul>
    );
};

export default ToDoListComponent;