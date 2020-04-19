import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import cities from "../mocks/cities";
import events from "../mocks/events";

const getApiData = (url: string) => {
  const json = url === "events" ? events : cities;

  const mock = new MockAdapter(axios, { delayResponse: 1000 });
  mock.onGet(url).reply(200, json);

  return axios.get(url);
};

export default getApiData;
