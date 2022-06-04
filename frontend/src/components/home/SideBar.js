import React, { useEffect, useState } from 'react'
import {history} from "../../utils/history";
import { Divider, Tag , Card} from 'antd'
import { TeamOutlined } from '@ant-design/icons';
import UserService from "../../service/UserService";
import FollowService from "../../service/FollowService";


export const SIDEBAR = {
    avatar: require('../../assets/images/paimon.jpg'), // 侧边栏头像
    // 关注的信息
    friendslink: {
        GitHub: {
            link: 'https://github.com/ISDevLearn/Blog-OA-System/',
            img: 'https://avatars.githubusercontent.com/u/9919?s=280&v=4',
        },
        水源文档: {
            link: 'https://notes.sjtu.edu.cn/FgebUswgQf2iiUOKQYIhKQ?both',
            img: 'https://th.bing.com/th/id/OIP.TreYqTLCwcL6u_HNe7tIQAD6D6?w=176&h=180&c=7&r=0&o=5&pid=1.7'
        }
    }
}


function SideBar(props) {
    const username = props.match.params.loginUsername
    const [email, setEmail] = useState()
    const [avatar, setAvatar] = useState()
    const [followersNum, setFollowersNum] = useState()
    const [followingsNum, setFollowingsNum] = useState()
    useEffect(() => {UserService.getUserInfo(username).then(
        res => {
            // console.log(res)
            setEmail(res.data.email)
            setAvatar(res.data.avatar)
        }
        )}, [])

    useEffect(() => {FollowService.getFollowers(username).then(
        res => {
            setFollowersNum(res.data.length)
        })},[])

    useEffect(() => {FollowService.getFollowings(username).then(
        res => {
            setFollowingsNum(res.data.length)
        })},[])


    return (
        <aside className='app-sidebar'>
            {/*TODO:当用户没有上传头像时，需要给一个默认头像*/}
            {avatar ? <img src={`data:image/png;base64,${avatar}`} className='sider-avatar' alt=''/>:
                <img src={SIDEBAR.avatar} className='sider-avatar' alt='' />}
            <h2 className='title'>{username}</h2>
            <h5 className='sub-title'>{email}</h5>
            <ul className='home-pages'>
                <Card style={{ width: 300 }}>
                    {/* TODO: 点击followers跳转到关注者界面，点击followings跳转到被关注者界面，*/}
                    <li onClick={() => {history.push(`/${username}/followers/`)}}><TeamOutlined style={{ marginRight: 15 }} />{followersNum} followers</li>
                    <li onClick={() => {history.push(`/${username}/followings/`)}}><TeamOutlined style={{ marginRight: 15 }} />{followingsNum} following</li>
                </Card>
            </ul>

            <Divider orientation='left'>热门文章</Divider>
            <ul className='article-list'>
            </ul>

            <Divider orientation='left'>标签</Divider>
            <div className='tag-list'>
            </div>

            <Divider orientation='left'>友情连接</Divider>
            <ul className='tag-list'>
                {Object.entries(SIDEBAR.friendslink).map(([linkName, item]) => (
                    <li key={linkName}>
                        <img src={item.img} style={{height: '20px', width: '20px', marginRight: '10px'}} alt={'lizi'}/>
                        <a target='_blank' rel='noreferrer noopener'  href={item.link}>{linkName}</a>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default SideBar
