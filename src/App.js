import './App.css';
import 'antd/dist/antd.css';
import { connect } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import * as actions from './store/actions/auth'
import BaseRouter from './routes';

import React, { Component } from 'react'
import CustomLayout from './containers/Layout';


class App extends Component {

   componentDidMount() {
      this.props.onTryAutoSignup();
   }
   render() {
      return (<div>
         <BrowserRouter>
            <CustomLayout {...this.props} >
               <BaseRouter />
            </CustomLayout>

         </BrowserRouter>
      </div>

      );
   }
}

const mapStateToProps = state => {
   return {
      isAuthenticated: state.token !== null
   }
}
const mapDispatchToProps = dispatch => {
   return {
      onTryAutoSignup: () => dispatch(actions.authCheckState())
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
