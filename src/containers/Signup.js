import React from 'react';
import { Form, Input, Button } from 'antd';
import { NavLink } from "react-router-dom"
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { connect } from "react-redux"
import * as actions from '../store/actions/auth'


const Signup = (props) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        props.onAuth(values.username, values.email, values.password, values.confirm)
        props.history.push('/home/');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form

            form={form}
            name="register"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}

        ><Form.Item
            name="username"
            rules={[
                {
                    required: true,
                    message: 'Please input your Username!',
                },
            ]}
        >
                <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="email"

                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input prefix={<MailOutlined />} placeholder="Email" />
            </Form.Item>

            <Form.Item
                name="password"

                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password prefix={<LockOutlined />} placeholder="Password" />
            </Form.Item>

            <Form.Item
                name="confirm"

                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject('The two passwords that you entered do not match!');
                        },
                    }),
                ]}
            >
                <Input.Password prefix={<LockOutlined />} placeholder="Re-enter Password" />
            </Form.Item>



            <Form.Item>
                <Button style={{ marginRight: '5px' }} type="primary" htmlType="submit" className="login-form-button">
                    Sign Up
          </Button>
            or <NavLink to="/">Log In!</NavLink>
            </Form.Item>
        </Form>

    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const matchDispatchToProps = dispatch => {
    return {
        onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2))
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Signup);