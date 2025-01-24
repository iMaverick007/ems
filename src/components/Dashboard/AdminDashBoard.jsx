import React from 'react';
import Header from '../Other/Header';
import CreateTask from '../Other/CreateTask';
import AllTask from '../Other/AllTask';

const AdminDashboard = ({ changeUser, data }) => {
    return (
        <div className='w-full p-7'>
            <Header changeUser={changeUser} data={data} />
            <CreateTask />
            <AllTask />
        </div>
    );
};

export default AdminDashboard;