import axios from "axios";
import authHeader from "./AuthHeader";

const API_URL = 'http://localhost:3000/star/';

class StarService {
    setStar(id, username) {
        return axios
            .get(API_URL, {
                headers: authHeader(),
                params: {
                    'id': id,
                    'username': username
                }
            })
            .then(res => {
                console.log(res.data)
            });
    }

    getStarsOfaBlog(id) {
        return axios.
        get(API_URL + 'blogNums',{
            headers: authHeader(),
            params: {
                'id': id
            }
        })
    }

    getStarsOfaUser(username) {
        return axios.
        get(API_URL + 'userNums',{
            headers: authHeader(),
            params: {
                'username': username
            }
        })
    }
}

export default new StarService();