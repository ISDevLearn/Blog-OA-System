import React, { useEffect, useState } from 'react'
import {history} from "../../utils/history";
// import { SIDEBAR } from '@/config'

// import { useSelector } from 'react-redux'

// components
import { Link } from 'react-router-dom'
// import Href from '@/components/Href'
import { Divider, Tag , Card} from 'antd'
import { TeamOutlined } from '@ant-design/icons';
import UserService from "../../service/UserService";
import FollowService from "../../service/FollowService";

import { Alert } from 'antd'
// import { ANNOUNCEMENT } from '@/config'

// import useFetchList from '@/hooks/useFetchList'

export const SIDEBAR = {
    avatar: require('../../assets/images/avatar.jpg'), // 侧边栏头像
    // 关注的信息
    follows: {
        follower: {
            link: 'https://test',
            // icon: <GithubFill className='homepage-icon' />
        },
        following: {
            link: 'https://test',
            // icon: <SvgIcon type='iconjuejin' className='homepage-icon' />
        }
    },
    friendslink: {
        lizi: {
            link: 'http://blog.liziyang.co/',
            img: 'http://blog.liziyang.co/images/pikachu.jpg',
        },
        wizchen: {
            link: 'http://blog.wizchen.com',
            img: 'https://cdn.jsdelivr.net/gh/wizcheu/content1@main/img/header.gif'
        }
    }
}


function SideBar(props) {
    // const tagList = useSelector(state => state.article.tagList || [])

    // const { dataList: articleList } = useFetchList({
    //     withLoading: false,
    //     requestUrl: '/article/list',
    //     queryParams: {
    //         order: 'viewCount DESC',
    //         page: 1,
    //         pageSize: 6,
    //         type: true
    //     }
    // })
    const username = props.match.params.loginUsername
    const [email, setEmail] = useState()
    const [avatar, setAvatar] = useState()
    const [followersNum, setFollowersNum] = useState()
    const [followingsNum, setFollowingsNum] = useState()
    useEffect(() => {UserService.getUserInfo(username).then(
        res => {
            console.log(res)
            setEmail(res.data.email)
            setAvatar(res.data.avatar)
        }
        )}, [])

    useEffect(() => {FollowService.getFollowers(username).then(
        res => {
            // console.log(res.data)
            setFollowersNum(res.data.length)
        })},[])

    useEffect(() => {FollowService.getFollowings(username).then(
        res => {
            // console.log(res.data)
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
                    <li onClick={() => {history.push('')}}><TeamOutlined style={{ marginRight: 15 }} />{followersNum} followers</li>
                    <li onClick={() => {history.push('')}}><TeamOutlined style={{ marginRight: 15 }} />{followingsNum} following</li>
                </Card>
            </ul>

            {/*{ANNOUNCEMENT.enable && <Alert message={ANNOUNCEMENT.content} type='info' />}*/}

            <Divider orientation='left'>热门文章</Divider>
            <ul className='article-list'>
                {/*{articleList.map(d => (*/}
                {/*    <li key={d.id}>*/}
                {/*        <Link to={`/article/${d.id}`}>{d.title}</Link>*/}
                {/*    </li>*/}
                {/*))}*/}
            </ul>

            <Divider orientation='left'>标签</Divider>
            <div className='tag-list'>
                {/*{tagList.map((tag, i) => (*/}
                {/*    <Tag key={i} color={tag.color}>*/}
                {/*        <Link to={`/tags/${tag.name}`}>{tag.name}</Link>*/}
                {/*    </Tag>*/}
                {/*))}*/}
            </div>

            <Divider orientation='left'>友情连接</Divider>
            <ul className='tag-list'>
                {Object.entries(SIDEBAR.friendslink).map(([linkName, item]) => (
                    <li key={linkName}>
                        <img src={item.img} style={{height: '20px', width: '20px', marginRight: '10px'}} alt={'lizi'}/>
                        {/*<Href href={item.link}>{linkName}</Href>*/}
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default SideBar
