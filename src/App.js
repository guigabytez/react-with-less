import React, { useState } from 'react'
import { Layout } from 'antd'
import Navbar from './components/navigation/Navbar'
import Sidebar from './components/navigation/Sidebar'
import Contents from './components/navigation/Contents'
import Footr from './components/navigation/Footr'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Post from './pages/Post'
import User from './pages/User'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const callBackToggle = (toggleData) => {
    setIsCollapsed(toggleData)
  }

  return (
    
    <Layout style={{minHeight:"100vh"}}>
      <Sidebar isCollapsed={isCollapsed} />
      <Layout>
        <Navbar isCollapsed={isCollapsed} onCallBackToggle={callBackToggle} />
        <Contents> 
          <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/posts" exact component={Post}/>
              <Route path="/user" exact component={User}/>
              <Route path="*" component={NotFoundPage}/>
          </Switch>
        </Contents>
        <Footr />
      </Layout>
    </Layout>
   
  );
}

export default App
