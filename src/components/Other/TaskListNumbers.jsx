import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const TaskListNumbers = ({ data }) => {
    const [userData] = useContext(AuthContext);

    return (
        <>
            {userData.map(element => {
                if (element.firstName === data.firstName) {
                    return (
                        <div id='task-list-numbers' className='flex flex-nowrap mt-10 justify-between gap-5 screen overflow-x-auto' key={element.id}>
                            <TaskCard color="bg-blue-400" count={element.taskCounts.newTask} label="New Task" />
                            <TaskCard color="bg-green-400" count={element.taskCounts.completed} label="Completed Task" />
                            <TaskCard color="bg-yellow-400" count={element.taskCounts.active} label="Accepted Task" />
                            <TaskCard color="bg-red-400" count={element.taskCounts.failed} label="Failed Task" />
                        </div>
                    );
                }
                return null;
            })}
        </>
    );
};

const TaskCard = ({ color, count, label }) => (
    <div className={`rounded-xl w-[45%] py-6 px-9 ${color}`}>
        <h2 className='text-3xl font-bold'>{count}</h2>
        <h3 className='text-xl md:text-lg sm:text-base mt-0.5 font-medium break-words'>{label}</h3>
    </div>
);

export default TaskListNumbers;