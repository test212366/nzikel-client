import axios from "axios";

const path = 'http://localhost:5000/api'

const $api = axios.create({
	withCredentials: true,
	baseURL: path
})
$api.interceptors.request.use((config: any) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
	return config
})
export default $api