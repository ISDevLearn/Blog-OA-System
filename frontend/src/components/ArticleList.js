import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
// import { calcCommentsCount } from '@/utils'

// components
import { Divider } from 'antd'
import moment from "moment";
// import SvgIcon from '@/components/SvgIcon'
// import ArticleTag from '@/components/ArticleTag'


function ArticleList(props) {
    const history = useHistory()
    const { list } = props

    // TODO
    function jumpTo(id) {
        console.log(props)
        history.push(`article/${id}`)
    }

    return (
        <ul className='app-home-list'>
            {list.map(item => (
                <div>
                    {/*{item.top ? (*/}
                    {/*    <div className='button-content-right'>置顶</div>*/}
                    {/*) : (<div />)}*/}
                    <li key={item.id} className='app-home-list-item'>
                        <Divider orientation='left'>
              <span className='title' onClick={() => jumpTo(item.id)}>
                {item.title}
              </span>
                            <span className='posted-time'>{moment(parseInt(item.created)).format("YYYY-MM-DD HH:mm:ss")}</span>
                        </Divider>

                        <div
                            onClick={() => jumpTo(item.id)}
                            className='article-detail content'
                            dangerouslySetInnerHTML = {{__html: item.description}}>
                        </div>

                        <div className='list-item-others'>
                            {/*<SvgIcon type='iconcomment' />*/}
                            {/*<span style={{ marginRight: 5 }}> {calcCommentsCount(item.comments)}</span>*/}

                            {/*<SvgIcon type='iconview' style={{ marginRight: 5 }} />*/}
                            <span style={{ marginRight: 5 }}>{item.viewCount}</span>

                            {/*<ArticleTag tagList={item.tags} categoryList={item.categories} />*/}
                            {/* {item.top ? (<span style={{ marginLeft: 5, border: 'solid 3px #f90', background: '#FAD7A0'}}> {item.top ? '置顶' : ''}</span>) : <span />} */}
                        </div>
                    </li>
                </div>
            ))}
        </ul>
    )
}

export default ArticleList
