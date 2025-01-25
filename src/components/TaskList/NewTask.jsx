import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { updateTaskStatus } from '../../utils/taskUtils';
import TaskCard from './TaskCard';

const NewTask = ({ data, loggedInUser }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const updateTaskStatusToAccept = (taskData) => {
    const updatedUserData = updateTaskStatus(
      userData,
      loggedInUser,
      taskData,
      {
        newTask: userData.find(u => u.firstName === loggedInUser).taskCounts.newTask - 1,
        active: userData.find(u => u.firstName === loggedInUser).taskCounts.active + 1,
      },
      { active: true, newTask: false }
    );

    setUserData(updatedUserData);
  };

  return (
    <TaskCard
      data={data}
      bgColor="bg-blue-400"
      primaryAction={{ label: "Accept Task", onClick: updateTaskStatusToAccept }}
    />
  );
};

export default NewTask;