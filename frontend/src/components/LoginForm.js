import {Form, Input, Button, Checkbox, message} from 'antd';
import React from 'react';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {history} from "../utils/history";
import 'antd/dist/antd.css';
import '../css/login.css'
import AuthService from "../service/AuthService";


// 登录组件
const LoginForm = () => {
    // 用户点击登录后的回调
    // TODO: 登录的处理函数
    const onFinish = (values) => {
        AuthService.login(values.username, values.password).then(
            () => {
                message.success("登录成功！", 1)
                console.log('login success!')
                history.push(`/${values.username}/home`)
                window.location.reload()
            },
            error => {
                const resMessage = (error.response && error.response.data && error.response.data.message)
                    || error.message || error.toString();
                message.error(resMessage, 1)
                console.log(resMessage)
            })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleGoRegister = () => {
        history.push('/register');
    }

    return (
        <Form
            name="normal_login"
            className="login-form"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            initialValues={{
                username: '',
                password: '',
            }}
        >
            <Form.Item
                label="用户名"
                name="username"
                rules={[
                    {
                        required: true,
                        message: '请输入用户名！',
                    },
                    () => ({
                        validator(_, value) {
                            // 用户名长度小于12位
                            if (!value || value.length <= 12) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('用户名过长！'));
                        }
                    }),
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="用户名"
                />
            </Form.Item>

            <Form.Item
                label="密码"
                name="password"
                rules={[
                    {
                        required: true,
                        message: '请输入密码!',
                    },
                    () => ({
                        validator(_, value) {
                            // 密码在6至18位之间
                            if (!value || (value.length >= 6 && value.length <= 18)) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('密码不合法！'));
                        },
                    }),
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="密码"
                />
            </Form.Item>

            <Form.Item>
                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    noStyle
                >
                    <Checkbox>记住密码</Checkbox>
                </Form.Item>

                {/*TODO: 这里后面要加上跳转到忘记密码页面的路由*/}
                {/*<a className="login-form-forgot" onClick={history.push('/')}>*/}
                <a>
                    忘记密码
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    登录
                </Button>&nbsp;
                {/*TODO: 这里后面要加上跳转到注册页面的路由*/}
                没有账号？&nbsp;<Button onClick={handleGoRegister.bind(this)} type="link">去注册</Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
