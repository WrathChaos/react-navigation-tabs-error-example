import { TASK_LIST } from "../../actions/types/task-action-types";

const initialState = {
  taskList: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TASK_LIST:
      return { ...state, taskList: action.payload };
    default:
      return state;
  }
}
