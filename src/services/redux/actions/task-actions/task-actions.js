import Api from "../../../api";
import { GET } from "../../../api/Api.constant";
import { TASK_LIST } from "../types/task-action-types";

export default function fetchTaskList() {
  return dispatch => {
    console.log("WHAAAT");
    Api.get(GET.TASK_LIST)
      .then(res => {
        console.log(res);
        dispatch({
          type: TASK_LIST,
          payload: res
        });
      })
      .catch(err => console.log("Error: ", err));
  };
}
