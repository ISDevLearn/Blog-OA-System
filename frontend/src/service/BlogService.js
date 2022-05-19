import axios from "axios";
import authHeader from "./AuthHeader";

const API_URL = 'http://localhost:3000/blog';

class BlogService {
    getBlogByUsername(username) {
        return axios.
        get(API_URL + '/username/' + username,{
            headers: authHeader(),
            params: {
                'username': username
            }
        })
    }
}

export default new BlogService();