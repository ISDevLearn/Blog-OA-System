import React, {useEffect, useMemo, useState} from 'react'
import '../css/home.css'
import FollowersList from "../components/FollowersList";
import FollowService from "../service/FollowService";

function Followers(props) {
    const username = props.match.params.loginUsername
    const [followerList, setFollowerList] = useState([])

    useEffect(() => {FollowService.getFollowers(username).then(
        res => {
            console.log(res.data)
            setFollowerList(res.data)
        })},[])

    return (
            <div className='app-home'>
                <FollowersList followerList={followerList} username={username}/>
            </div>
    )
}

export default Followers
