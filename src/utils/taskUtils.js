export const updateTaskStatus = (userData, loggedInUser, data, taskCountsUpdate, taskUpdate) => {
  return userData.map((elem) => {
    if (elem.firstName === loggedInUser) {
      return {
        ...elem,
        taskCounts: {
          ...elem.taskCounts,
          ...taskCountsUpdate,
        },
        tasks: elem.tasks.map(task => {
          if (task.category === data.category) {
            return { ...task, ...taskUpdate };
          }
          return task;
        }),
      };
    }
    return elem;
  });
};