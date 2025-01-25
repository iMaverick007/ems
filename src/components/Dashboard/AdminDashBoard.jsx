import React, { useContext } from 'react';
import Header from '../Other/Header';
import CreateTask from '../Other/CreateTask';
import AllTask from '../Other/AllTask';
import Toggle from '../Other/Toggle';
import { ThemeContext } from '../../context/ThemeProvider';

const AdminDashboard = ({ changeUser, data }) => {
    
    const [theme] = useContext(ThemeContext)

    return (
        <div className='w-full p-7' style={{ backgroundColor: theme.backgroundColor }}>
            <Header changeUser={changeUser} data={data} color={theme.color} />
            <CreateTask />
            <AllTask />
            <Toggle />
        </div>
    );
};

export default AdminDashboard;