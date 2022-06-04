import axios from 'axios';
import authHeader from "./AuthHeader";

const API_URL = 'http://localhost:3000/user/';

class UserService {
    getUserInfo(username) {
        return axios.get(API_URL + username + '/', { headers: authHeader(), withCredentials: true});
    }

    getModeratorBoard() {
        return axios.get(API_URL + 'mod', { headers: authHeader() });
    }

    getUserInfoList(usernameList) {
        for (let i = 0; i < usernameList.length; i++) {
            return axios.get(API_URL + usernameList[i] + '/', { headers: authHeader(), withCredentials: true});
        }
    }
}

export default new UserService();
