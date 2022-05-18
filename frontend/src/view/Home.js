import React from 'react'
// import '@/styles/app.less'
// import '../css/home.css'
import '../css/header.css'
// import '../css/index.less'
import { Layout, Row, Col, BackTop } from 'antd'

import Header from '../components/home/header'
import SideBar from '../components/home/SideBar'
import AppMain from '../components/home/AppMain'

// import 'antd/dist/antd.css';
// import ReactCanvasNest from 'react-canvas-nest'
// 响应式
const siderLayout = { xxl: 4, xl: 5, lg: 5, sm: 0, xs: 0 }
const contentLayout = { xxl: 20, xl: 19, lg: 19, sm: 24, xs: 24 }

function HomeLayout(props) {
    // 获取登录的用户名
    console.log(props.match.params.loginUsername, '利用loginUsername去后端拿数据')
    return (
        <Layout className='app-container'>
            {/*<ReactCanvasNest className='canvasNest' config={{ pointColor: '255,255,255' }} style={{ zIndex: 1 }} />*/}
            <Header />
            <Row className='app-wrapper'>
                <Col {...siderLayout}>
                    <SideBar {...props}/>
                </Col>
                <Col {...contentLayout}>
                    <AppMain {...props} />
                </Col>
            </Row>
            <BackTop target={() => document.querySelector('.app-main')} />
        </Layout>
    )
}

export default HomeLayout
