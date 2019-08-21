import { Api } from "@paraboly/axios-client";
import { BASE_URL, GET } from "./Api.constant";

// Mock Data http://www.mocky.io/v2/5d5d5e24330000a65a57b9c0

class ApiClass {
  constructor() {
    Api.setup({
      baseUrl: BASE_URL
    });
  }
}

export default new ApiClass();
