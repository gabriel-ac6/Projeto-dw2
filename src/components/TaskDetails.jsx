import React from "react";
import Button from "./Button";
import "./Task.css";
import { useNavigate, useParams } from "react-router-dom";

const TaskDetails = () => {
    const params = useParams();

    console.log(params)

    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate(-1);
    };

    return( 
        <>
        <br></br>
        <br></br>
           
            <div className="task-details-container">
                <h2 className="Titulo">{params.taskTitle}</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. In minima illo similique magnam atque natus voluptates rerum, ea tempore amet libero explicabo quidem ratione nostrum nobis sed quis eligendi voluptate!]
                </p>
            </div>
            <br></br>
            <div className="back-button-container">
               <center><Button className="back" onClick={handleBackButtonClick}>Voltar</Button></center> 
            </div>
        </>
     );
}

export default TaskDetails;