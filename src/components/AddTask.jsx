import React, {useState} from "react";
import "./Task.css";
import Button from "./Button";

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState("");

    const handleInputChange = (e) => {
        console.log(e.target.value);
        setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputData("");
    }

    return (
        <div className = "add-task-container">

            <input onChange = {handleInputChange} value = {inputData} className = "add-task-input" type = "text"/>
            <span className = "span"></span>
            <Button onClick={handleAddTaskClick}>Adicionar</Button>

        </div>

    );
}

export default AddTask;