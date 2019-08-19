import { GET_TASK_LIST } from './types/task-action-types';

export const getTaskList = (data) => ({
  type: GET_TASK_LIST,
  payload: data,
});

export default {};
