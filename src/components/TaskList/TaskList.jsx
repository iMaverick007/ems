import React, { useContext } from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';
import { AuthContext } from '../../context/AuthProvider';

const TaskList = ({ data }) => {
  const [userData] = useContext(AuthContext);

  const renderTask = (elem, idx) => {
    if (elem.active) return <AcceptTask key={idx} data={elem} />;
    if (elem.newTask) return <NewTask key={idx} data={elem} />;
    if (elem.completed) return <CompleteTask key={idx} data={elem} />;
    if (elem.failed) return <FailedTask key={idx} data={elem} />;
    return null;
  };

  return (
    <>
      {userData.filter(ele => ele.firstName === data.firstName)
        .map(ele => (
          <div id='task-list' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16' key={ele.id}>
            {ele.tasks.map(renderTask)}
          </div>
        ))
      }
    </>
  );
};

export default TaskList;