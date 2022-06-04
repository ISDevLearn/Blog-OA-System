import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Divider } from 'antd'
import {SIDEBAR} from "./home/SideBar";
import UserService from "../service/UserService";
// import SvgIcon from '@/components/SvgIcon'
// import ArticleTag from '@/components/ArticleTag'


function FollowingsList(props) {
    const { followingList } = props
    const [avatar, setAvatar] = useState([])
    const username = ['kazuha']

    useEffect(() => {UserService.getUserInfoList(username).then(
        res => {
            console.log('1', res)
            setAvatar(res.data.avatar)
        }
    )}, [])

    return (
        <ul className='app-home-list'>
            <h1>Followings</h1>
            {followingList.map((name, index) => (
                <div>
                    <li key={index} className='app-home-list-item'>
                        <Divider orientation='left'>
              <span className='title'>
                {name}
              </span>
                        </Divider>

                        <div>
                            {avatar ? <img src={`data:image/png;base64,${avatar}`} className='sider-avatar' alt=''/>:
                                <img src={SIDEBAR.avatar} className='follow-avatar' alt='' />}
                        </div>
                    </li>
                </div>
            ))}
        </ul>
    )
}

export default FollowingsList
