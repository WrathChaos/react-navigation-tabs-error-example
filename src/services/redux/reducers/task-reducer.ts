
import { GET_TASK_LIST } from '../actions/types/task-action-types';

const initialState = {
  placeName: '',
  places: []
};

const taskReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_TASK_LIST:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          value: action.payload
        })
      };
    default:
      return state;
  }
}

export default taskReducer;