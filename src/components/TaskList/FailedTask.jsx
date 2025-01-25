import React from 'react';
import TaskCard from './TaskCard';

const FailedTask = ({ data }) => {
  return <TaskCard data={data} bgColor="bg-red-400" />;
};

export default FailedTask;