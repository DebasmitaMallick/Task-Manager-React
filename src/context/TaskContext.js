import React, { createContext, useContext, useReducer } from 'react';
import { taskReducer } from './TaskReducer';

const Tasks = createContext(null);

const TaskContext = ({children}) => {

    const [state, dispatch] = useReducer(
        taskReducer,
        {
            tasks: []
        }
    )

    return (
        <Tasks.Provider value={{ state, dispatch }}>
            {children}
        </Tasks.Provider>
    )
}

export default TaskContext;

export const TaskState = () => useContext(Tasks);