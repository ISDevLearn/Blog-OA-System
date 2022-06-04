import React, { useState } from 'react'
import { Input, Row } from 'antd'
import { useHistory, useLocation } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'

function SearchButton(props) {
    const history = useHistory()
    const [keyword, setKeyword] = useState('')


    const handleSubmit = () => {
        if (keyword) history.push(`/home?page=1&keyword=${keyword}`)
    }

    const handleChange = e => {
        setKeyword(e.target.value)
    }

    const handlePressEnter = e => {
        e.target.blur()
    }

    return (
        <div id='search-box'>
            <SearchOutlined className='search-icon' onClick={e => props.history.push(`/home?page=1&keyword=${keyword}`)} />
            <Input
                type='text'
                value={keyword}
                onChange={handleChange}
                onBlur={handleSubmit}
                onPressEnter={handlePressEnter}
                className='search-input'
                placeholder='搜索文章'
                style={{ width: 200 }}
            />
        </div>
    )
}

export default SearchButton
