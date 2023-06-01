import React, { useState } from 'react';
import { TaskState } from '../context/TaskContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Task = ({task}) => {
    const { dispatch } = TaskState();

    const [newTask, setNewTask] = useState(task.task);

    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
        if(!edit) {
            setEdit(true);
        } else {
            dispatch({
                type: 'EDIT_TASK',
                payload: {
                    id: task.id,
                    newTask
                }
            });
            toast.success("Task edited successfully");
            setEdit(false);
        }
    }

    const toggleTaskStatus = () => {
        dispatch({
            type: "CHANGE_TASK_STATUS",
            payload: task.id
        })
        if(!task.completed)
            toast.success("Task marked completed");
        else
            toast.success("Task unmarked");
    }
    
    return (
        <div className={`task ${task.completed ? 'completedTask' : 'incompleteTask'}`}>
            <div>
                <button 
                    type="button" 
                    style={{color: task.completed === false && 'transparent'}}
                    className='checkBtn' 
                    onClick={toggleTaskStatus} 
                >
                    &#10004;
                </button>
                {
                    edit ?
                    <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} maxLength={45} /> :
                    <span>{task.task}</span>
                }
            </div>
            <div className='actionBtns'>
                <span
                    onClick={handleEdit}
                >
                    <FontAwesomeIcon icon={edit ? faUpload : faEdit} />
                </span>
                <span
                    onClick={() => {
                        dispatch({
                            type: 'REMOVE_TASK',
                            payload: task.id
                        });
                        toast.success("Task deleted successfully");
                    }}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </span>
            </div>
        </div>
    )
}

export default Task