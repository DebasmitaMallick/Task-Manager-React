import React from 'react'
import AddTask from './AddTask'
import { TaskState } from '../context/TaskContext';
import Task from './Task';
import Stats from './Stats';

const Home = () => {
  const {state: {tasks}} = TaskState();
  
  return (
    <div className='mainContainer'>
      <div>
        <AddTask />
        <section>
          {
            tasks.length === 0 ? 

            <span style={{fontSize: 18}}>No tasks left</span> :

            tasks.map((task) => (
              <Task key={task.id} task={task} />
            ))
          }
        </section>
      </div>
      <Stats />
    </div>
  )
}

export default Home