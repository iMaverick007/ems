import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { ThemeContext } from "../../context/ThemeProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [theme] = useContext(ThemeContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const updatedUserData = userData.map((elem) => {
      if (asignTo === elem.firstName) {
        return {
          ...elem,
          tasks: [
            ...elem.tasks,
            {
              taskTitle,
              taskDescription,
              taskDate,
              category,
              active: false,
              newTask: true,
              failed: false,
              completed: false,
            },
          ],
          taskCounts: {
            ...elem.taskCounts,
            newTask: elem.taskCounts.newTask + 1,
          },
        };
      }
      return elem;
    });

    setUserData(updatedUserData);
    setTaskTitle("");
    setCategory("");
    setAsignTo("");
    setTaskDate("");
    setTaskDescription("");
  };

  return (
    <div
      className="p-5 bg-[#1c1c1c] mt-5 rounded"
      style={{ backgroundColor: theme.backgroundColor }}
    >
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <InputField
            label="Task Title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            type="text"
            placeholder="Make a UI design"
            theme={theme}
          />
          <InputField
            label="Date"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            type="date"
            theme={theme}
          />
          <InputField
            label="Asign to"
            value={asignTo}
            onChange={(e) => setAsignTo(e.target.value)}
            type="text"
            placeholder="employee name"
            theme={theme}
          />
          <InputField
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            placeholder="design, dev, etc"
            theme={theme}
          />
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <label className="text-sm text-gray-400 mb-0.5">Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
            style={{ color: theme.color }}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
          />
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

const InputField = ({ label, type, value, onChange, placeholder, theme }) => (
  <div>
    <label className="text-sm mb-0.5 text-gray-400">{label}</label>
    <br />
    <input
      type={type}
      value={value}
      onChange={onChange}
      required
      className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
      placeholder={placeholder}
      style={{ color: theme.color }}
    />
  </div>
);

export default CreateTask;