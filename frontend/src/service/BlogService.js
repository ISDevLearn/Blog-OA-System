import axios from "axios";
import authHeader from "./AuthHeader";
import Qs from "qs";

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

    getBlogById(id) {
        return axios.
        get(API_URL + '/id/' + id,{
            headers: authHeader(),
            params: {
                'id': id
            }
        })
    }

    postEdit(username, title, description, content) {
        return axios
            .post(API_URL + "/",
                Qs.stringify({'username': username, 'title': title, 'description': description, 'content': content})
                    ,{
                    headers: authHeader(),
                })
            .then(response => {
                if (response.data) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }
}

export default new BlogService();