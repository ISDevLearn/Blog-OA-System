import React, {useEffect, useMemo, useState} from 'react'
// import './index.less'
import '../css/home.css'
// import { decodeQuery, translateMarkdown2html } from '@/utils'
// import { HOME_PAGESIZE } from '@/utils/config'

// components
// import QuickLink from './QuickLink'
import ArticleList from "../components/ArticleList";

import { Empty, Spin } from 'antd'
import BlogService from "../service/BlogService";
// import WebPagination from '@/components/Pagination'

// hooks
// import useFetchList from '@/hooks/useFetchList'
// import ContributionChart from './Contribution'

const HOME_PAGESIZE = 10

function Home(props) {
    // const { loading, pagination, dataList } = useFetchList({
    //     requestUrl: '/article/list',
    //     queryParams: { pageSize: HOME_PAGESIZE, type: true },
    //     fetchDependence: [props.location.search]
    // })

    // const list = useMemo(() => {
    //     return [...dataList].map(item => {
    //         const index = item.content.indexOf('<!--more-->')
    //         item.content = translateMarkdown2html(item.content.slice(0, index))
    //         return item
    //     })
    // }, [dataList])

    // const { keyword } = decodeQuery(props.location.search)

    //TODO
    // console.log(props)
    const username = props.match.params.loginUsername
    const [blogList, setBlogList] = useState([])

    useEffect(() => {BlogService.getBlogByUsername(username).then(
        res => {
            console.log(res)
            setBlogList(res.data)
        })
        .catch(
            err => {
        console.log(err);
        })
    }, [])


    // const list = [{top: 0, id: 1, title: "雪よ舞え", content: "ayakakaka", viewcount: 1, createdAt: "2022-5-18"},
    //     {top: 0, id: 1, title: "雪よ舞え", content: "ayakakaka", viewcount: 1, createdAt: "2022-5-18"},
    //     {top: 0, id: 1, title: "雪よ舞え", content: "ayakakaka", viewcount: 1, createdAt: "2022-5-18"}]

    return (
        // <Spin tip='Loading...' spinning="1">
            <div className='app-home'>
                {/* list  */}
                <ArticleList list={blogList} username={username}/>

                {/* quick link */}
                {/*<QuickLink list={list} />*/}

                {/*<ContributionChart userName='panyunyi97' />*/}

                {/* serach empty result */}
              {/*  {list.length === 0 && keyword && (*/}
              {/*      <div className='no-data'>*/}
              {/*          <Empty description={(*/}
              {/*              <span>*/}
              {/*  不存在标题/内容中含有 <span className='keyword'>{keyword}</span> 的文章！*/}
              {/*</span>*/}
              {/*          )} />*/}
              {/*      </div>*/}
              {/*  )}*/}

                {/*<WebPagination*/}
                {/*    {...pagination}*/}
                {/*    onChange={*/}
                {/*        (page, pageSize) => {*/}
                {/*            document.querySelector('.app-main').scrollTop = 0 // turn to the top*/}
                {/*            pagination.onChange(page, pageSize)*/}
                {/*        }*/}
                {/*    } />*/}
            </div>
        // </Spin>
    )
}

export default Home
