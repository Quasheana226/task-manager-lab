// Rule Book 


// TASK STATUS 
// export type  means textStatus will only be on of the three 


export type TaskStatus = 'pending' | 'in-progress' | 'completed';



//TASK INTERFACE 
// The blue print for each task

 
export interface Task {
  id: string;  //Unique ID for each task
  title: string; // Name of the task
  description: string; // details about the task 
  status: TaskStatus; // Must be 'pending' | 'in-progress' | 'completed'
  priority: 'low' | 'medium' | 'high'; // How urgent is the task 
  dueDate: string; // WHat date is due 
}
 

// TASKLIST PROPS

// Props should be the input  a component receives from there parent
// TaskList will recieve its initaltask so it knows what task to show 

 
export interface TaskListProps {
  tasks: Task[];
   onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void; //Array of task objects 
}

//TASKITEM PROPS
//Taskitem should recieve one task and two call back functions to tell the parent something happen

export interface TaskItemProps {
  task: Task;//Single task the card will display
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void; //OnstatusChange is called when the user picks new status dropdown
  onDelete: (taskId: string) => void; // onDelete called when the user clicks on button
}


//  TASKFILTER PROPS

// TaskFilter takes one call back  when the user changes filter 
export interface TaskFilterProps {
  onFilterChange: (filters: {
    status?: TaskStatus;    // Optional user may not filter by status
    priority?: 'low' | 'medium' | 'high'; // Optional user may not filter by priority
  }) => void;
}
