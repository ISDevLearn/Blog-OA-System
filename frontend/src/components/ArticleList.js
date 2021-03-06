import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { Divider} from 'antd'
import moment from "moment";
import {StarOutlined} from "@ant-design/icons";


function ArticleList(props) {
    const history = useHistory()
    const { list } = props

    // TODO
    function jumpTo(id) {
        history.push(`article/${id}`)
    }

    return (
        <ul className='app-home-list'>
            {list.map(item => (
                <div>
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
                            <StarOutlined style={{ marginRight: 5 }} />
                            <span style={{ marginRight: 5 }}> {item.star}</span>

                        </div>
                    </li>
                </div>
            ))}
        </ul>
    )
}

export default ArticleList
