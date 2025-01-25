import React from 'react';
import TaskCard from './TaskCard';

const CompleteTask = ({ data }) => {
  return <TaskCard data={data} bgColor="bg-green-400" />;
};

export default CompleteTask;