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



    //EVENT HANDLER DELETE BUTTON
    //This function runs when user clicks the delte button then also showing confrimation popup if they want to delte

    const handleDelete = () => {
        // show popup asking to confirm
        const confirmed = window.confirm("Hold Up Are You Sure You Want To Delete This Task?")

        //if/else only delete if user picked ok
        if (confirmed) {
            onDelete(task.id) // Tell tasklist to remove task
        } else {
            //user does nothing
        }
    }

    return (
        <div style={{ backgroundColor: cardBackgroundColor, border: "1px solid #ccc", borderRadius: "8px", padding: "16px", marginBottom: "12px" }}>

            {/* Task title — the name of the task shown at the top of the card */}
            <h3>{task.title}</h3>

            {/* Task description — extra details about what needs to be done */}
            <p>{task.description}</p>

            {/* Priority badge — colored box showing low / medium / high using our color variables */}
            <span style={{ color: priorityColor, backgroundColor: priorityBackgroundColor, padding: "4px 10px", borderRadius: "4px", fontWeight: "bold" }}>
                {task.priority}
            </span>

            {/* High priority warning — only appears when the task is marked high */}
            {task.priority === "high" && (
                <p style={{ color: "#ba4040", fontWeight: "bold" }}>Warning: This is a high priority task!</p>
            )}

            {/* Task status — shows the current status as plain text */}
            <p>Status: {task.status}</p>

            {/* Due date — shows when the task needs to be finished */}
            <p>Due: {task.dueDate}</p>

            {/* Not done yet message — only shows when the task has NOT been completed */}
            {task.status !== "completed" && (
                <p style={{ color: "#888" }}>This task is not done yet.</p>
            )}

            {/* Status dropdown — lets the user pick a new status, calls handleStatusChange */}
            <select value={task.status} onChange={handleStatusChange}>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>

            {/* Delete button — removes the task when clicked, calls handleDelete */}
            <button
                onClick={handleDelete}
                style={{ backgroundColor: "#e74c3c", color: "white", border: "none", padding: "8px 12px", borderRadius: "4px", cursor: "pointer", marginLeft: "8px" }}
            >
                Delete
            </button>

        </div>
    );
};

export default TaskItem;
