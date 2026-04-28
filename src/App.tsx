// React is required to use JSX — always import it at the top
import React from 'react';

// TaskList is the main component that displays all our tasks
import TaskList from './components/TaskList/TaskList';

// Task is a TypeScript type — it tells us what shape each task object must have
import type { Task } from './types';


// SAMPLE TASKS
// This is our starter data — a list of 5 tasks to show when the app first loads
// Each task must follow the Task type blueprint from our types file

const sampleTasks: Task[] = [
  {
    id: 'task-1',                        // unique ID for this task
    title: 'Build the TaskItem component', // name of the task
    description: 'Create the card UI that displays a single task with title, badge, and buttons', // more detail about what needs to be done
    status: 'completed',                 // where this task is right now: pending | in-progress | completed
    priority: 'high',                    // how urgent this task is: low | medium | high
    dueDate: '2026-04-20',               // the date this task should be finished by
  },
  {
    id: 'task-2',
    title: 'Build the TaskFilter component',
    description: 'Add two dropdowns that let the user filter tasks by status and priority',
    status: 'completed',
    priority: 'medium',
    dueDate: '2026-04-22',
  },
  {
    id: 'task-3',
    title: 'Wire up filtering logic in TaskList',
    description: 'Use the filter state to show only tasks that match what the user selected',
    status: 'in-progress',
    priority: 'high',
    dueDate: '2026-04-27',
  },
  {
    id: 'task-4',
    title: 'Style all components',
    description: 'Add the styles object to TaskItem, TaskFilter, and TaskList using React.CSSProperties',
    status: 'in-progress',
    priority: 'medium',
    dueDate: '2026-04-28',
  },
  {
    id: 'task-5',
    title: 'Test the full app',
    description: 'Run the app and check that filtering, status changes, and deleting all work correctly',
    status: 'pending',
    priority: 'low',
    dueDate: '2026-04-30',
  },
];


// APP COMPONENT
// This is the root component — the very first thing React renders on the page
// It holds the sample data and passes it down to TaskList

const App: React.FC = () => {
  return (
    // Wrapper div — full page container with a soft background and some breathing room
    <div style={{
      minHeight: '100vh',           // stretch to fill the full screen height
      backgroundColor: '#f3f4f6',   // soft light grey so the white cards stand out
      paddingTop: '40px',           // space at the top so the heading is not flush with the edge
      paddingBottom: '60px',        // space at the bottom so the last card is not cut off
    }}>

      {/* TaskList receives our sample tasks and handles everything from here down */}
      <TaskList initialTasks={sampleTasks} />

    </div>
  );
};

export default App;
