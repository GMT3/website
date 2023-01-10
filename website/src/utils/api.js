import axios from 'axios';

const BASE_URL = 'https://gmt3-tech.onrender.com'; // 'http://localhost:5000';

export default axios.create({
  baseURL: BASE_URL,
});
