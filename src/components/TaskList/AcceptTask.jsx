import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { updateTaskStatus } from '../../utils/taskUtils';
import TaskCard from './TaskCard';

const AcceptTask = ({ data, loggedInUser }) => {

  const [userData, setUserData] = useContext(AuthContext);

  const updateTaskStatusToComplete = (taskData) => {
    const updatedUserData = updateTaskStatus(
      userData,
      loggedInUser,
      taskData,
      {
        active: userData.find(u => u.firstName === loggedInUser).taskCounts.active - 1,
        completed: userData.find(u => u.firstName === loggedInUser).taskCounts.completed + 1,
      },
      { active: false, completed: true }
    );

    setUserData(updatedUserData);
  };

  const updateTaskStatusToFailed = (taskData) => {
    const updatedUserData = updateTaskStatus(
      userData,
      loggedInUser,
      taskData,
      {
        active: userData.find(u => u.firstName === loggedInUser).taskCounts.active - 1,
        failed: userData.find(u => u.firstName === loggedInUser).taskCounts.failed + 1,
      },
      { active: false, failed: true }
    );

    setUserData(updatedUserData);
  };

  return (
    <TaskCard
      data={data}
      bgColor="bg-yellow-400"
      primaryAction={{ label: "Mark as Completed", onClick: updateTaskStatusToComplete }}
      secondaryAction={{ label: "Mark as Failed", onClick: updateTaskStatusToFailed }}
    />
  );
};

export default AcceptTask;