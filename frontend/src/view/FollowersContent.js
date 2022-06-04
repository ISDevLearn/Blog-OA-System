import React, {useEffect, useMemo, useState} from 'react'
import '../css/home.css'
import FollowersList from "../components/FollowersList";
import FollowService from "../service/FollowService";
import UserService from "../service/UserService";

function Followers(props) {
    const username = props.match.params.loginUsername
    const [followerList, setFollowerList] = useState({})

    useEffect(() => {FollowService.getFollowers(username).then(
        res => {
            let tmp = [];
            for (let i = 0; i < res.data.length; i++) {
                UserService.getUserInfo(res.data[i]).then(
                    resres => {
                        tmp.push(resres.data)
                    })
            }
            setFollowerList(tmp)
        })},[])

    return (
            <div className='app-home'>
                <FollowersList followerList={followerList} username={username}/>
            </div>
    )
}

export default Followers
