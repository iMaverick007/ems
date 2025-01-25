import React, { useContext } from 'react';
import Header from '../Other/Header';
import TaskListNumbers from '../Other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';
import Toggle from '../Other/Toggle';
import { ThemeContext } from '../../context/ThemeProvider';

const EmployeeDashboard = ({ changeUser, data }) => {

  const [theme] = useContext(ThemeContext)

  return (
    <div className='p-10 h-screen' style={{ backgroundColor: theme.backgroundColor }}>
      <Header changeUser={changeUser} data={data} color={theme.color} />
      <TaskListNumbers data={data} />
      <TaskList data={data} />
      <Toggle />
    </div>
  );
};

export default EmployeeDashboard;