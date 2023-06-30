import React from "react";
import "./Task.css";
import {CgClose, CgInfo} from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

const Task = ({task,handleTaskClick,handleTaskDelection}) => {
    const navigate = useNavigate();

    const handleTaskDetailsClick = () => {
        navigate(`/${task.title}`);
    };

    return(
        
        <>
         <br></br>
        <div className="task-container"
         style={task.completed ? {borderLeft: "6px solid orange"}:{}}>
            
        <div className="task-title" onClick={() => handleTaskClick(task.id)}>
            {task.title}
        </div>
        <div className="buttons-container">
        <button className="see-task-details-button" onClick={handleTaskDetailsClick}><CgInfo /></button>
        <button className="remove-task-button" onClick={() => handleTaskDelection(task.id)}><CgClose /></button>
        </div>
        </div>
        </>
    );
    
    //return <div className="task-container">{task.title}</div>;
    
};

export default Task;