import axios from 'axios';

export default axios.create({
  baseURL: 'https://cardio.fly.dev/',
  timeout: 5000,
});
