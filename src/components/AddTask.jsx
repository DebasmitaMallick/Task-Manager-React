import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TaskState } from '../context/TaskContext';
import uuid from 'uuid-random';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTask = () => {
    const [newTask, setNewTask] = useState("");

    const { dispatch } = TaskState();

    const handleAddTask = () => {
        if(newTask.trim() === "") {
            alert("Please enter a task!");
            return;
        }
        dispatch({
            type: "ADD_TASK",
            payload: {
                id: uuid(),
                task: newTask,
                completed: false
            }
        });
        toast.success("Task added successfully");
        setNewTask("");
    }

    const handleText = (e) => {
        const text = e.target.value;
        if(text.length > 45) {
            alert('You have reached maximum limit');
            return;
        }
        setNewTask(text);
    }

    return (
        <section className='newTaskSection'>
            <input 
                type="text" 
                name="newTask" 
                id="newTask" 
                value={newTask} 
                placeholder='Enter new task...'
                onChange={handleText}
            />
            <button 
                className='addBtn'
                onClick={handleAddTask}
            >
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </section>
    )
}

export default AddTask