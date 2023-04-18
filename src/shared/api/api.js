import axios from 'axios';

const client = axios.create({
  timeout: 5000,
});

client.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

class Api_instance {
  constructor() {
    const baseUl = 'http://localhost:8000';

    this.baseUl = {
      todos: baseUl + '/todos',
      users: baseUl + '/users',
    };
  }
}

export const API = new Api_instance();

export default client;
