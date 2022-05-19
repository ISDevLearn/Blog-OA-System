import React, { useState, useEffect } from 'react'
// import './index.less'
import '../css/article.css'

// import { useMediaQuery } from 'react-responsive'
// methods
// import axios from '@/utils/axios'
// import { translateMarkdown, translateMarkdown2html, calcCommentsCount } from '@/utils'
// import useAjaxLoading from '@/hooks/useAjaxLoading'

// components
import { Drawer, Divider, Spin } from 'antd'
// import ArticleTag from '@/components/ArticleTag'
// import SvgIcon from '@/components/SvgIcon'
// import Navigation from './Navigation'
// import Discuss from '@/components/Discuss'
import { MenuOutlined } from '@ant-design/icons'
function Article(props) {
    // const [loading, withLoading] = useAjaxLoading()

    const [article, setArticle] = useState({
        title: '',
        content: '',
        tags: [],
        categories: [],
        comments: [],
        createdAt: '',
        viewCount: 0
    })
    const [drawerVisible, setDrawerVisible] = useState(false)

    // useEffect(() => {
    //     setTimeout(() => {
    //         const hash = decodeURI(props.location.hash)
    //         const ele = document.querySelector(`a[href="${hash}"]`)
    //         ele && hash && ele.click() // 挂载时路由跳转到指定位置
    //     }, 800)
    // }, [])

    // useEffect(() => {
    //     if (props.match.params.id !== undefined) {
    //         withLoading(axios.get(`/article/${props.match.params.id}`))
    //             .then(res => {
    //                 res.content = translateMarkdown2html(res.content)
    //                 setArticle(res)
    //             })
    //             .catch(e => {
    //                 props.history.push('/404')
    //             })
    //     } else if (props.match.params.uuid !== undefined) {
    //         withLoading(axios.get(`/article/share/${props.match.params.uuid}`))
    //             .then(res => {
    //                 res.content = translateMarkdown2html(res.content)
    //                 setArticle(res)
    //             }).catch(e => {
    //             props.history.push('/404')
    //         })
    //     }
    // }, [props.match.params.id])

    //TODO get blog from backend
    const title = 'test'
    const content = 'testaaaaaaaaaaaaaaaaaaaaa'
    const createdAt = '2022-5-19'
    const viewCount = 10

    const isFoldNavigation = 0

    // function setCommentList(list) {
    //     setArticle({ ...article, comments: list })
    // }

    // const { title, content, tags, categories, comments, createdAt, viewCount } = article

    // const articleId = parseInt(props.match.params.article_id)
    // console.log(articleId)
    // const isFoldNavigation = useMediaQuery({ query: '(max-width: 1300px)' })
    return (
        // <Spin tip='Loading...'>
            <article className='app-article' style={{ paddingRight: isFoldNavigation ? 0 : 275 }}>
                <div className='post-header'>
                    <h1 className='post-title'>{title}</h1>

                    <div className='article-desc'>
                        <span className='post-time'>
                            {/*<SvgIcon type='iconpost' />*/}
                            &nbsp; Posted on &nbsp;
                            <span>{createdAt}</span>
                        </span>
                        {/*<ArticleTag tagList={tags} categoryList={categories} />*/}
                        <Divider type='vertical' />
                        {/*<a className='comment-count' href='#discuss' style={{ color: 'inherit' }}>*/}
                            {/*<SvgIcon type='iconcomment' />*/}
                            {/*<span style={{ marginRight: 5 }}> {calcCommentsCount(comments)}</span>*/}
                        {/*</a>*/}
                        {/*<SvgIcon type='iconview' style={{ marginRight: 2 }} />*/}
                        <span>{viewCount}</span>
                    </div>
                </div>
                <div className='article-detail' dangerouslySetInnerHTML={{ __html: content }} />
                {isFoldNavigation ? (
                        <>
                            <div className='drawer-btn' > {/*onClick={e => setDrawerVisible(true)}*/}
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
                {/*<Discuss articleId={articleId} commentList={comments} setCommentList={setCommentList} />*/}
            </article>
        // </Spin>
    )
}

export default Article
