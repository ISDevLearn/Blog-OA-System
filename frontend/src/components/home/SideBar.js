import React, { useEffect, useState } from 'react'
// import { SIDEBAR } from '@/config'

// import { useSelector } from 'react-redux'

// components
import { Link } from 'react-router-dom'
// import Href from '@/components/Href'
import { Divider, Tag } from 'antd'

import { Alert } from 'antd'
// import { ANNOUNCEMENT } from '@/config'

// import useFetchList from '@/hooks/useFetchList'

export const SIDEBAR = {
    avatar: require('../../assets/images/avatar.jpg'), // 侧边栏头像
    title: '种菜的小朋友', // 标题
    subTitle: 'Carpe diem', // 子标题
    // 个人主页
    homepages: {
        github: {
            link: 'https://test',
            // icon: <GithubFill className='homepage-icon' />
        },
        juejin: {
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

    return (
        <aside className='app-sidebar'>
            <img src={SIDEBAR.avatar} className='sider-avatar' alt='' />
            <h2 className='title'>{SIDEBAR.title}</h2>
            <h5 className='sub-title'>{SIDEBAR.subTitle}</h5>
            <ul className='home-pages'>
                {Object.entries(SIDEBAR.homepages).map(([linkName, item]) => (
                    <li key={linkName}>
                        {item.icon}
                        {/*<Href href={item.link}>{linkName}</Href>*/}
                    </li>
                ))}
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
