import React from 'react'
import { Layout } from 'antd'
import '../../styles/contents.css'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../../pages/Dashboard'
import Post from '../../pages/Post'
import User from '../../pages/User'

const { Content } = Layout

const Contents = () => {
    return (
        <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 'auto',
            }}
          >
            <Switch>
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/post" exact component={Post}/>
                <Route path="/user" exact component={User}/>
                <Route />
            </Switch>
          </Content>
    )
}

export default Contents
