import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Dropdown, Menu, Avatar } from 'antd'

function UserInfo(props) {
    const username = 'test'

    const MenuOverLay = (
        <Menu>
            <Menu.Item>
        <span className='user-logout'>
          退出登录
        </span>
            </Menu.Item>
        </Menu>
    )
    return (
        <div className='header-userInfo'>
            {username ? (
                    <Dropdown placement='bottom' overlay={MenuOverLay} trigger={['click', 'hover']}>
                        <div style={{ height: 55 }}>
                        </div>
                    </Dropdown>
                )
                : (
                    <>
                        <Button
                            ghost
                            type='primary'
                            size='small'
                            style={{ marginRight: 20 }}
                            >
                            登录
                        </Button>
                        <Button ghost type='danger' size='small'>
                            注册
                        </Button>
                    </>
                )}
        </div>
    )
}

export default withRouter(UserInfo)
