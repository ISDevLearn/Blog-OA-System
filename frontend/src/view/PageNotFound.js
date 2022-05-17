import React from 'react'

import { Result, Button } from 'antd'

function PageNotFound(props) {
    return (
        <Result
            status='404'
            title='404'
            subTitle='抱歉，您访问的页面不存在。'
            extra={
                <Button
                    type='primary'
                    onClick={() => {
                        props.history.push('/')
                    }}>
                    返回首页
                </Button>
            }
        />
    )
}

export default PageNotFound