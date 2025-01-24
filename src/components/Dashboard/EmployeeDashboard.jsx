import React from 'react';
import Header from '../Other/Header';
import TaskListNumbers from '../Other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = ({ changeUser, data }) => {
  return (
    <div className='p-10'>
      <Header changeUser={changeUser} data={data} />
      <TaskListNumbers data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;