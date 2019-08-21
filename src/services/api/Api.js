import { Api } from "@paraboly/axios-client";
import { BASE_URL, GET } from "./Api.constant";

// Mock Data http://www.mocky.io/v2/5d5d511d330000078057b93d

class ApiClass {
  constructor() {
    Api.setup({
      baseUrl: BASE_URL
    });
  }

  getAllTasks() {
    Api.get(GET.ALL_TASKS)
      .then(res => {
        console.log(res);
        res.forEach(element => {
          console.log("element: ", element);
        });
      })
      .catch(err => console.log("Error: ", err));
  }
}

export default new ApiClass();
