import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Divider } from 'antd'
import moment from "moment";
// import SvgIcon from '@/components/SvgIcon'
// import ArticleTag from '@/components/ArticleTag'


function FollowersList(props) {
    const history = useHistory()
    const { followerList } = props
    console.log(followerList)

    function jumpTo(id) {
        console.log(props)
        history.push(`article/${id}`)
    }

    return (
        <ul className='app-home-list'>
            {followerList.map((name, index) => (
                <li key={index}>{name}</li>
              //   <div>
              //       <li key={item.id} className='app-home-list-item'>
              //           <Divider orientation='left'>
              // <span className='title' onClick={() => jumpTo(item.id)}>
              //   {item.title}
              // </span>
              //               <span className='posted-time'>{moment(parseInt(item.created)).format("YYYY-MM-DD HH:mm:ss")}</span>
              //           </Divider>
              //
              //           <div
              //               onClick={() => jumpTo(item.id)}
              //               className='article-detail content'
              //               dangerouslySetInnerHTML = {{__html: item.description}}>
              //           </div>
              //
              //           <div className='list-item-others'>
              //               {/*<SvgIcon type='iconcomment' />*/}
              //               {/*<span style={{ marginRight: 5 }}> {calcCommentsCount(item.comments)}</span>*/}
              //
              //               {/*<SvgIcon type='iconview' style={{ marginRight: 5 }} />*/}
              //               <span style={{ marginRight: 5 }}>{item.viewCount}</span>
              //
              //               {/*<ArticleTag tagList={item.tags} categoryList={item.categories} />*/}
              //           </div>
              //       </li>
              //   </div>
            ))}
        </ul>
    )
}

export default FollowersList
