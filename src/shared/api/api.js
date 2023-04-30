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
    const baseUrl = 'http://localhost:8000';

    this.baseUrl = {
      todos: baseUrl + '/todos',
      users: baseUrl + '/users',
    };
  }

  async getUsers() {
    const response = await client.get(this.baseUrl.users);
    return response;
  }

  async createUser(user) {
    const response = await client.post(this.baseUrl.users, user);
    return response;
  }

  async getTodos() {
    const response = await client.get(this.baseUrl.todos);
    return response;
  }

  async updateTodo(todo) {
    const response = await client.put(`${this.baseUrl.todos}/${todo.id}`, todo);
    return response;
  }
}

export const API = new Api_instance();

export default client;
