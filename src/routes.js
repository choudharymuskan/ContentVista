import React from 'react'
import { Route } from 'react-router-dom';
import ArticleHome from './containers/ArticleHomeView'

import ArticleList from './containers/ArticleListView'
import ArticleDetail from './containers/ArticleDetailView'
import Login from './containers/Login'
import Signup from './containers/Signup'


const BaseRouter = () => {
    return (
        <div>
            <Route exact path="/home/" component={ArticleHome} />
            <Route exact path="/article/" component={ArticleList} />
            <Route exact path="/article/:id/" component={ArticleDetail} />
            <Route exact path="/" component={Login} />
            <Route exact path="/signup/" component={Signup} />

        </div>)
}



export default BaseRouter;