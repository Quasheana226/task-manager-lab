// Shows two dropdowns by status and priority  when changes

import React, { useState } from "react";

import type { TaskFilterProps, TaskStatus } from "../../types";

const TaskFilter: React.FC<TaskFilterProps> = ({ onFilterChange }) => {
    //LOCAL STATE
    // When you call setvalue react re renders component

    const [selectedStatus, setSelectedStatus] = useState<string>(""); // Tracks whish status filter is selected '' means no filter

    const [selectedPriority, setSelectedPriority] = useState<string>(""); // Tracks which status priority is selected '' means show all

    //EVENT HANDLER  When status dropdown changes

    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newStatus = e.target.value; //get the chosen value from drop down

        setSelectedStatus(newStatus); // Update local state show choice selected

        onFilterChange({
            status: newStatus ? (newStatus as TaskStatus) : undefined,
            priority: selectedPriority
                ? (selectedPriority as "low" | "medium" | "high")
                : undefined,
        });
    };

    //EVENT HANDLER When Priority dropdown changes

    const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newPriority = e.target.value;

        setSelectedPriority(newPriority); // Update local state with chosen priority

        //Tell parent what filter is active
        onFilterChange({
            status: selectedStatus ? (selectedStatus as TaskStatus) : undefined,
            priority: newPriority ? (newPriority as "low" | "medium" | "high") : undefined, // send priority to parent
        });
    };

    // JSX return

    return (
        <div style={styles.container}>
            <h3 style={styles.title}> Filter Tasks </h3>

            {/* status filter Dropdown */}
            <div style={styles.filterGroup}>
                {/* label describes the drop down */}
                <label style={styles.label} htmlFor="status-filter">
                    Filter by Status:
                </label>

                <select
                    id="status-filter"
                    value={selectedStatus} // value comes from state
                    onChange={handleStatusChange} // run this function whatever user picks
                    style={styles.select}
                >
                    {/* The first option no filter shows everything  */}
                    <option value="">ALL Priorities</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>

            {/* Priority filter dropdown */}
            <div style={styles.filterGroup}>
                {/* label describes the dropdown */}
                <label style={styles.label} htmlFor="priority-filter">
                    Filter by Priority:
                </label>

                <select
                    id="priority-filter"
                    value={selectedPriority} // value comes from state
                    onChange={handlePriorityChange} // run this function whenever user picks
                    style={styles.select}
                >
                    {/* The first option shows all tasks with no priority filter */}
                    <option value="">All Priorities</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>

        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {

    container: {
        backgroundColor: "#f9fafb",                                    // soft off-white background so it stands apart from the page
        borderRadius: "14px",                                          // rounded corners — nothing boxy
        padding: "20px 24px",                                          // generous inner spacing so nothing feels cramped
        marginBottom: "24px",                                          // space below before the task list starts
        border: "1px solid #e5e7eb",                                   // very subtle border for definition
        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",                      // barely-there shadow to lift it off the page
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",      // modern clean font stack
        display: "flex",                                               // lay title and filter groups in a row
        alignItems: "center",                                          // vertically center everything
        gap: "24px",                                                   // breathing room between each section
        flexWrap: "wrap",                                              // wrap to next line on smaller screens
    },

    title: {
        fontSize: "14px",       // small — this is a label not a headline
        fontWeight: "600",      // semi-bold so it reads clearly
        color: "#374151",       // dark grey — not pure black, feels softer
        margin: "0",            // remove default h3 margin
        letterSpacing: "0.3px", // slight spacing makes small text easier to read
        whiteSpace: "nowrap",   // prevent the title from wrapping onto two lines
    },

    filterGroup: {
        display: "flex",      // put label and dropdown side by side
        alignItems: "center", // vertically center label with dropdown
        gap: "10px",          // space between the label and the dropdown
    },

    label: {
        fontSize: "13px",     // slightly smaller than body — supporting text
        fontWeight: "500",    // medium weight — readable but not loud
        color: "#6b7280",     // muted grey so it does not compete with the dropdown value
        whiteSpace: "nowrap", // keep label on one line
    },

    select: {
        appearance: "none" as const,                                   // strip default browser chrome
        backgroundColor: "#ffffff",                                    // clean white background
        border: "1px solid #d1d5db",                                   // soft grey border
        borderRadius: "10px",                                          // rounded corners
        padding: "8px 36px 8px 14px",                                  // extra right padding for the custom arrow
        fontSize: "13px",
        color: "#111827",                                              // near-black text for the selected value
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
        cursor: "pointer",
        outline: "none",
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", // custom dropdown arrow
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 12px center",                      // position the arrow on the right side
        boxShadow: "0 1px 2px rgba(0,0,0,0.04)",                      // tiny shadow under the dropdown
        transition: "border-color 0.15s ease, box-shadow 0.15s ease", // smooth feel on focus
    },

};

export default TaskFilter;
