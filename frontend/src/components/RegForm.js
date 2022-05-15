import React, { useState } from 'react';
import {
    Form,
    Input,
    Row,
    Col,
    Button,
} from 'antd';
import 'antd/dist/antd.css';
import '../css/login.css'
import {Link} from "react-router-dom";

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const RegistrationForm = () => {
    const [form] = Form.useForm();
    const [timeOut, setTimeOut] = useState(60)
    const [sendCodeHidden, setSendCodeHidden] = useState(false)

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    
    const getCode = () => {

    }

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{

            }}
            scrollToFirstError
        >

            <Form.Item
                name="username"
                label="用户名"
                rules={[
                    {
                        required: true,
                        message: '请输入用户名!',
                        whitespace: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="email"
                label="邮箱"
                rules={[
                    {
                        type: 'email',
                        message: '邮箱不合法!',
                    },
                    {
                        required: true,
                        message: '请输入邮箱!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="密码"
                rules={[
                    {
                        required: true,
                        message: '请输入密码!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="确认密码"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: '请确认密码!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('两次输入的密码不一致!'));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item label="验证码">
                <Row gutter={8}>
                    <Col span={12}>
                        <Form.Item
                            name="captcha"
                            noStyle
                            rules={[
                                {
                                    required: true,
                                    message: '请输入验证码!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <div style={{position: "relative"}}>
                            {/*TODO: 点击发送验证码的函数getCode*/}
                            <Button disabled={sendCodeHidden} onClick={getCode}>获取验证码</Button>
                            {
                                sendCodeHidden ? <div style={{position: "absolute"}}>{timeOut}秒后重试</div> : ""
                            }
                        </div>
                    </Col>
                </Row>
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    注册
                </Button>&nbsp;
                已有账号？ &nbsp;<Link to={'/login'}>登录</Link>
            </Form.Item>
        </Form>
    );
};

export default RegistrationForm;