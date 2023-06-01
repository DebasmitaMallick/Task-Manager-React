import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { TaskState } from '../context/TaskContext';

const Stats = () => {
    const {state: {tasks}} = TaskState();

    const completedTaskCount = () => {
        return tasks.reduce((acc, task) => task.completed ? acc+1 : acc, 0);
    }

    const getPercentage = () => {
        const percentage = (completedTaskCount() / tasks.length) * 100;
        if(isNaN(percentage)) {
            return 0;
        }
        return Math.round(percentage);
    };

    return (
        <div className='statistics'>
            <CircularProgressbar 
                value={ getPercentage()} 
                text={`${getPercentage()}%`} 
            />
            <div className='txt'>tasks completed</div>
            <div className='info'>
                <div>Tasks</div>
                <div>{`${completedTaskCount()}/${tasks.length}`}</div>
            </div>
        </div>
    )
}

export default Stats