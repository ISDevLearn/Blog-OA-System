import axios from "axios";
import Qs from 'qs'

const API_URL = "http://localhost:3000";

class AuthService {
    login(username, password) {
        return axios
            .post(API_URL + "/login/",
                Qs.stringify({'username': username, 'password': password})
            )
            .then(response => {
                if (response.data) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        axios.get(API_URL + "/logout/")
            .then(res => {localStorage.removeItem('user');})
    }

    register(username, email, password) {
        return axios.post(API_URL + "/user/", Qs.stringify({
            'username': username,
            'email': email,
            'password': password})
        );
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();