import React, { useState } from 'react'
import { Layout } from 'antd'

import Navbar from './components/navigation/Navbar'
import Sidebar from './components/navigation/Sidebar'
import Contents from './components/navigation/Contents'



const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const callBackToggle = (toggleData) => {
    setIsCollapsed(toggleData)
  }

  return (
    <Layout>
      <Sidebar isCollapsed={isCollapsed} />
      <Layout>
        <Navbar isCollapsed={isCollapsed} onCallBackToggle={callBackToggle} />
        <Contents />
      </Layout>
    </Layout>
  );
}

export default App
