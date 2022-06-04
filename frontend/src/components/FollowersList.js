import React, { useState, useEffect } from 'react'
import { Divider } from 'antd'
import {SIDEBAR} from "./home/SideBar";


function FollowersList(props) {
    const { followerList } = props
    console.log(followerList)

    return (
        <ul className='app-home-list'>
            <h1>Followers</h1>
            {followerList.map(item => (
                <div>
                    <li key={item.id} className='app-home-list-item'>
                        <Divider orientation='left'>
              <span className='title'>
                {item.username}
              </span>
                        </Divider>

                        <div>
                            {item.avatar ? <img src={`data:image/png;base64,${item.avatar}`} className='sider-avatar' alt=''/>:
                                <img src={SIDEBAR.avatar} className='follow-avatar' alt='' />}
                        </div>
                    </li>
                </div>
            ))}
        </ul>
    )
}

export default FollowersList
