// Display one task as a card and shows title description priority  due date and status
import React from "react";
import { TaskItemProps, TaskStatus } from "../../types/index.ts";

//React.Fc means React function component  also destructure  the props

const TaskItem: React.FC<TaskItemProps> = ({
    task,
    onStatusChange,
    onDelete,
}) => {
    //If/else picks backgound color then task.status and assigncolot to cardBackgroundColor
    let cardBackgroundColor: string; // Declareing the variable first

    if (task.status === "completed") {
        cardBackgroundColor = "#d3f8d6"; // task is done
    } else if (task.status === "in-progress") {
        cardBackgroundColor = "#bde1fa"; //task is being worked on
    } else {
        cardBackgroundColor = "#ffffff"; //task have not started
    }


    // If/else oick the priorty badge text color and back ground
    let priorityColor: string;  // The text color of badge 
    let priorityBackgroundColor: string; // background color of the badge 

    if (task.priority === "high") {
        priorityColor = "#ba4040" // red text 
        priorityBackgroundColor = "rgb(247, 159, 159)" // Light red background 

    } else if (task.priority === "medium") {
        priorityColor = "rgb(255, 138, 42)" // Orange text 
        priorityBackgroundColor = "rgb(243, 168, 134)" // Light orange background
    } else {
        priorityColor = "rgb(43, 102, 21)" // Green text 
        priorityBackgroundColor = "#94e689" // light green background 
    }
    //EVENT HANDLER SATUS DROPDOWN
    // This function runs when user picks a new status from drop down menu 
    // When  call onStatusChange which is passed in from the TaskList and tell this has a new status 

    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {

        onStatusChange(task.id, e.target.value as TaskStatus);
    };












};
