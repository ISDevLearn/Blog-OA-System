import axios from 'axios';
import authHeader from "./AuthHeader";

const API_URL = 'http://localhost:8080/user/';

class UserService {
    getUserInfo(username) {
        return axios.get(API_URL + username + '/', { headers: authHeader() });
    }

    getModeratorBoard() {
        return axios.get(API_URL + 'mod', { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(API_URL + 'admin', { headers: authHeader() });
    }
}

export default new UserService();
