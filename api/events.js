import axios from 'axios';

import baseUrl, { commonParams } from './constants';

export const fetchEvents = (page = 1) => {
  return axios.get(`${baseUrl}events.json?${commonParams}&sort=relevance,desc&page=${page}&size=10`);
};

export const searchEvents = (keyword) => {
  return axios.get(`${baseUrl}&keyword=${keyword}`);
};
