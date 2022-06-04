import React, {useEffect, useMemo, useState} from 'react'
import '../css/home.css'
import FollowService from "../service/FollowService";
import FollowingsList from "../components/FollowingsList";

function Followings(props) {
    const username = props.match.params.loginUsername
    const [followingList, setFollowingList] = useState([])

    useEffect(() => {FollowService.getFollowings(username).then(
        res => {
            setFollowingList(res.data)
        })},[])

    return (
            <div className='app-home'>
                <FollowingsList followingList={followingList} username={username}/>
            </div>
    )
}

export default Followings
