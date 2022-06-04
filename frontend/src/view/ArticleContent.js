import React, { useState, useEffect } from 'react'
import '../css/article.css'
import '../css/markdown.css'

// components
import { Drawer, Divider, Spin } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import BlogService from "../service/BlogService";
import {translateMarkdown2html} from "../utils/markdown";
import moment from "moment";

function Article(props) {
    // const [loading, withLoading] = useAjaxLoading()
    console.log(props)
    const articleid = props.match.params.articleId

    const [article, setArticle] = useState({
        id: '',
        username: '',
        title: '',
        description: '',
        content: '',
        created: '',
        status: 1
    })
    const [drawerVisible, setDrawerVisible] = useState(false)

    useEffect(() => {BlogService.getBlogById(articleid).then(
        res => {
            res.data.content = translateMarkdown2html(res.data.content)
            setArticle(res.data)
        })
        .catch(
            err => {
                console.log(err);
            })
    }, [])

    //TODO get blog from backend
    const viewCount = 10

    const isFoldNavigation = 0


    const { id, username, title, description, content, created, status } = article

    return (
        // <Spin tip='Loading...'>
            <article className='app-article' style={{ paddingRight: isFoldNavigation ? 0 : 275 }}>
                <div className='post-header'>
                    <h1 className='post-title'>{title}</h1>

                    <div className='article-desc'>
                        <span className='post-time'>
                            &nbsp; Posted on &nbsp;
                            <span>{moment(parseInt(created)).format("YYYY-MM-DD")}</span>
                        </span>
                        <Divider type='vertical' />
                        <span>{viewCount}</span>
                    </div>
                </div>
                <div className='article-detail' dangerouslySetInnerHTML={{ __html: content }} />
                {isFoldNavigation ? (
                        <>
                            <div className='drawer-btn' >
                                <MenuOutlined className='nav-phone-icon' />
                            </div>
                            <Drawer
                                title={title}
                                placement='right'
                                closable={false}
                                onClose={e => setDrawerVisible(false)}
                                visible={drawerVisible}
                                getContainer={() => document.querySelector('.app-article')}>
                                <div className='right-navigation'>
                                    {/*<Navigation content={content} />*/}
                                </div>
                            </Drawer>
                        </>
                    )
                    : (
                        <nav className='article-navigation'>
                            {/*<Navigation content={content} />*/}
                        </nav>
                    )}
            </article>
    )
}

export default Article
