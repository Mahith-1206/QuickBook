import axios from 'axios';
const apiService = axios.create({
  baseURL: "http://localhost:4000"
});


//Need to implement authorization middleware
// apiService.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers['Authorization'] = 'Bearer ' + token;
//     }
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

export default apiService;
