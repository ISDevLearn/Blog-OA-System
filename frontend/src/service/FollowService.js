import axios from "axios";
import authHeader from "./AuthHeader";

const API_URL = 'http://localhost:3000/follower';

class FollowService {
    setFollowing(follower, following) {
        return axios
            .get(API_URL, {
                headers: authHeader(),
                params: {
                    'follower': follower,
                    'following': following
                }
            })
            .then(res => {
                console.log(res.data)
            });
    }

    getFollowers(username) {
        return axios.
            get(API_URL + '/followers/',{
                headers: authHeader(),
                params: {
                    'username': username
                }
            })
    }

    getFollowings(username) {
        return axios.
        get(API_URL + '/followings/',{
            headers: authHeader(),
            params: {
                'username': username
            }
            })
    }
}

export default new FollowService();