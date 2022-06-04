import React from 'react'
// import { EditOutline, FolderOutline, HomeOutline, MessageOutline, UserOutline } from 'utils/antdIcon'
import {EditOutlined, FolderOutlined,HomeOutlined, MessageOutlined, UserOutlined} from "@ant-design/icons";

export default [
    {
        icon: <HomeOutlined style={{ marginRight: 15 }} />,
        title: '首页',
        link: 'home'
    },
    {
        icon: <EditOutlined style={{ marginRight: 15 }} />,
        title: '发表博客',
        link: 'post'
    },
    {
        icon: <FolderOutlined style={{ marginRight: 15 }} />,
        title: '分类',
        link: 'categories'
    },
    {
        icon: <UserOutlined style={{ marginRight: 15 }} />,
        title: '关于',
        link: 'about'
    },
    {
        icon: <MessageOutlined style={{ marginRight: 15 }} />,
        title: '碎🐡',
        link: 'fragment'
    }
]
