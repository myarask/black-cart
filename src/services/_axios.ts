import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// May configure axios here with a baseURL, for example

// mock is for demo purposes only
const mock = new MockAdapter(axios);

export { axios, mock };
