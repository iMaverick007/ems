import React from 'react';

const TaskCard = ({ data, bgColor, primaryAction, secondaryAction }) => {
  const getButtonColor = (label) => {
    switch (label) {
      case "Mark as Completed":
        return "bg-green-500";
      case "Accept Task":
        return "bg-yellow-500";
      case "Mark as Failed":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className={`flex-shrink-0 h-full w-[300px] p-5 ${bgColor} rounded-xl`}>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
      <p className='text-sm mt-2'>{data.taskDescription}</p>
      <div className='flex justify-between mt-6'>
        {primaryAction && (
          <button
            className={`${getButtonColor(primaryAction.label)} rounded font-medium py-1 px-2 text-xs`}
            onClick={() => primaryAction.onClick(data)}
          >
            {primaryAction.label}
          </button>
        )}
        {secondaryAction && (
          <button
            className={`${getButtonColor(secondaryAction.label)} rounded font-medium py-1 px-2 text-xs`}
            onClick={() => secondaryAction.onClick(data)}
          >
            {secondaryAction.label}
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;