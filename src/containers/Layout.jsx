import '../index.css'
import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import { Layout, Menu, Breadcrumb } from 'antd';
import { connect } from "react-redux";
import * as actions from '../store/actions/auth';

const { Header, Content, Footer } = Layout;
class CustomLayout extends Component {
  render() {
    return (
      <>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" >

              <Menu.Item key="1">
                <Link to="/home/">Posts</Link>
              </Menu.Item>
              {this.props.isAuthenticated ?

                <Menu.Item key="2" > <a onClick={() => {
                  this.props.logout()
                  this.props.history.push("/")
                }}>Logout</a> </Menu.Item>
                : <Menu.Item key="2">

                  <Link to="/">Login</Link>

                </Menu.Item>}
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item><Link to="/home/">Home</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to="/article/">My Articles</Link></Breadcrumb.Item>
            </Breadcrumb>

            <div className="site-layout-content">{this.props.children}
              {/* {this.props.isAuthenticated ? <p></p>
                :
                <h1 className="login">You are Logged Out! Log In</h1>
              } */}
            </div>




          </Content>
          <Footer className="login" style={{ textAlign: 'center' }}>ArticlePoster  | &copy; copyright 2021</Footer>
        </Layout>,



      </>
    )
  }
}

const matchDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout()
    )


  }
}

export default withRouter(connect(null, matchDispatchToProps)(CustomLayout));

