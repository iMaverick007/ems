import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { ThemeContext } from "../../context/ThemeProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);
  const [theme] = useContext(ThemeContext);

  return (
    <div
      className="bg-[#1c1c1c] p-5 rounded mt-5"
      style={{ backgroundColor: theme.backgroundColor }}
    >
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>
      <div>
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded"
          >
            <h2
              className="text-lg font-medium w-1/5"
              style={{ color: theme.color }}
            >
              {elem.firstName}
            </h2>
            <h3 className="text-lg font-medium w-1/5 text-blue-400">
              {elem.taskCounts.newTask}
            </h3>
            <h5 className="text-lg font-medium w-1/5 text-yellow-400">
              {elem.taskCounts.active}
            </h5>
            <h5 className="text-lg font-medium w-1/5 text-green-400">
              {elem.taskCounts.completed}
            </h5>
            <h5 className="text-lg font-medium w-1/5 text-red-600">
              {elem.taskCounts.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
