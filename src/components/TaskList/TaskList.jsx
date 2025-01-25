import React, { useContext } from 'react';
import TaskCard from './TaskCard';
import { AuthContext } from '../../context/AuthProvider';
import { updateTaskStatus } from '../../utils/taskUtils';

const TaskList = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const handleUpdateTaskStatus = (taskData, taskCountsUpdate, taskUpdate) => {
    const updatedUserData = updateTaskStatus(
      userData,
      data.firstName,
      taskData,
      taskCountsUpdate,
      taskUpdate
    );

    setUserData(updatedUserData);
  };

  const renderTask = (task, idx) => {
    const user = userData.find(user => user.firstName === data.firstName);
    const taskCounts = user ? user.taskCounts : {};

    if (task.active) {
      return (
        <TaskCard
          key={idx}
          data={task}
          bgColor="bg-yellow-400"
          primaryAction={{ label: "Mark as Completed", onClick: (taskData) => handleUpdateTaskStatus(taskData, { active: taskCounts.active - 1, completed: taskCounts.completed + 1 }, { active: false, completed: true }) }}
          secondaryAction={{ label: "Mark as Failed", onClick: (taskData) => handleUpdateTaskStatus(taskData, { active: taskCounts.active - 1, failed: taskCounts.failed + 1 }, { active: false, failed: true }) }}
        />
      );
    }
    if (task.newTask) {
      return (
        <TaskCard
          key={idx}
          data={task}
          bgColor="bg-blue-400"
          primaryAction={{ label: "Accept Task", onClick: (taskData) => handleUpdateTaskStatus(taskData, { newTask: taskCounts.newTask - 1, active: taskCounts.active + 1 }, { active: true, newTask: false }) }}
        />
      );
    }
    if (task.completed) {
      return <TaskCard key={idx} data={task} bgColor="bg-green-400" />;
    }
    if (task.failed) {
      return <TaskCard key={idx} data={task} bgColor="bg-red-400" />;
    }
    return null;
  };

  return (
    <>
      {userData.filter(user => user.firstName === data.firstName)
        .map(user => (
          <div id='task-list' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16' key={user.id}>
            {user.tasks.map(renderTask)}
          </div>
        ))
      }
    </>
  );
};

export default TaskList;