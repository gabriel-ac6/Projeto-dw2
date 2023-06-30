import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick, handleTaskDelection }) => {

    return (
    <>
        {tasks.map((task) =>(
            <Task task={task} handleTaskClick={handleTaskClick} handleTaskDelection={handleTaskDelection} />
        ))}
    </>
    );
};

export default Tasks;