export const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                tasks: [...state.tasks, {...action.payload}]
            };

        case 'REMOVE_TASK':
            return {
                tasks: state.tasks.filter((task) => task.id !== action.payload)
            };

        case 'CHANGE_TASK_STATUS':
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if(task.id === action.payload) {
                        return {
                            ...task,
                            completed: !task.completed
                        };
                    }
                    return task;
                })
            };

        case 'EDIT_TASK':
            return {
                tasks: state.tasks.map(task => {
                    if(task.id === action.payload.id) {
                        return {
                            ...task,
                            task: action.payload.newTask
                        };
                    }
                    return task;
                })
            }

        default:
            return state;
    }
}