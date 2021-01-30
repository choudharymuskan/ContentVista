import React from 'react'
import { NavLink } from "react-router-dom"
import { Form, Input, Button, } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { connect } from "react-redux";
import * as actions from '../store/actions/auth'
import '../index.css'


const Login = (props) => {


    const onFinish = (values) => {
        props.onAuth(values.username, values.password)
        props.history.push('/home/');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (<div >

        {
            props.loading ?
                <Spin />
                :

                <Form
                    name="normal_login"
                    className="login-form loginform"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <h1>Login</h1>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button style={{ marginRight: '5px' }} type="primary" htmlType="submit" className="login-form-button">
                            Log in
          </Button>
            or <NavLink to="/signupform/">register now!</NavLink>
                    </Form.Item>
                </Form>
        }
    </div>

    )
};



const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const matchDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);