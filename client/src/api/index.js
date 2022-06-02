import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

// API.interceptors.request.use((req) => {
//     if(localStorage.getItem('profile')) {
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//     }

//     return req;
// })

// these first two api sign's in the admin and also creates the admin in the admin area
export const signInAdmin = (formData) => API.post('/admin/signin', formData);
export const signUpAdmin = (formData) => API.post('/admin/signup', formData);
// FOR THE ADMIN AREA TO GET ALL USERS AND DELETE THEM
export const fetchUsers = () => API.get('/admin');
export const deleteUser = (id) => API.delete(`/admin/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
// this api sign's up the user and also creates the user in the admin area
export const signUp = (formData) => API.post('/user/signup', formData);

