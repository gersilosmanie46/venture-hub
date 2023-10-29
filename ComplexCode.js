/*
File Name: ComplexCode.js

This code is a complex implementation of a task management system. It includes various modules and functionalities to manage tasks, assign deadlines, track progress, and generate reports. It's meant to be used in large-scale software projects where task management is critical.

Notes:
- This code assumes the existence of external libraries or dependencies, which are not implemented here.
- Some function implementations are simplified for brevity and may not represent the full complexity of a real-world scenario.
- This code is provided as an example and may not provide a complete or error-free solution for real-world use cases.

*/

// Utility Module: Date Formatting
const dateFormatter = (() => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    // Formats a date object to "Month Day, Year" format
    function formatDate(date) {
        const month = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
        
        return `${month} ${day}, ${year}`;
    }
    
    return { formatDate };
})();

// Task Management Module
const TaskManager = (() => {
    // Task Class
    class Task {
        constructor(id, title, description, deadline) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.deadline = deadline;
            this.completed = false;
        }
    }
    
    let tasks = [];
    let taskId = 0;
    
    // Creates a new task and adds it to the task list
    function createTask(title, description, deadline) {
        const task = new Task(taskId++, title, description, deadline);
        tasks.push(task);
        
        return task;
    }
    
    // Gets all tasks
    function getAllTasks() {
        return tasks;
    }
    
    // Gets a task by ID
    function getTaskById(id) {
        return tasks.find((task) => task.id === id);
    }
    
    // Marks a task as completed
    function markTaskAsCompleted(id) {
        const task = getTaskById(id);
        
        if (task) {
            task.completed = true;
            return true;
        }
        
        return false;
    }
    
    // Deletes a task by ID
    function deleteTaskById(id) {
        const index = tasks.findIndex((task) => task.id === id);
        
        if (index > -1) {
            tasks.splice(index, 1);
            return true;
        }
        
        return false;
    }
    
    // Generates a report of completed tasks
    function generateReport() {
        const completedTasks = tasks.filter((task) => task.completed);
        const report = [];
        
        for (const task of completedTasks) {
            const formattedDeadline = dateFormatter.formatDate(task.deadline);
            report.push(`${task.title}: ${task.description} | Deadline: ${formattedDeadline}`);
        }
        
        return report.join('\n');
    }
    
    return {
        createTask,
        getAllTasks,
        markTaskAsCompleted,
        deleteTaskById,
        generateReport
    };
})();

// Usage Example

TaskManager.createTask('Implement login system', 'Implement user authentication and authorization', new Date(2023, 2, 15));
TaskManager.createTask('Refactor database layer', 'Optimize database queries and improve data retrieval', new Date(2023, 4, 1));
TaskManager.markTaskAsCompleted(0);

const tasks = TaskManager.getAllTasks();
console.log('All Tasks:');
console.log(tasks);

console.log('\nGenerated Report:');
console.log(TaskManager.generateReport());

TaskManager.deleteTaskById(1);
console.log('Tasks after deletion:');
console.log(TaskManager.getAllTasks());

/*
Output Example:
-----------------
All Tasks:
[
  Task {
    id: 0,
    title: 'Implement login system',
    description: 'Implement user authentication and authorization',
    deadline: 2023-03-15T00:00:00.000Z,
    completed: true
  },
  Task {
    id: 1,
    title: 'Refactor database layer',
    description: 'Optimize database queries and improve data retrieval',
    deadline: 2023-05-01T00:00:00.000Z,
    completed: false
  }
]

Generated Report:
Implement login system: Implement user authentication and authorization | Deadline: March 15, 2023

Tasks after deletion:
[
  Task {
    id: 0,
    title: 'Implement login system',
    description: 'Implement user authentication and authorization',
    deadline: 2023-03-15T00:00:00.000Z,
    completed: true
  }
]

*/