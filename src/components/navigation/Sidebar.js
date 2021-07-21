import React from 'react'
import { Layout, Menu, Avatar, Divider } from 'antd';
import { Link } from 'react-router-dom';
import {
    DashboardFilled,
    FilePptFilled,
    UserOutlined,
   
  } from '@ant-design/icons';
  
  import '../../styles/sidebar.css'
  
  const { Sider } = Layout;

const Sidebar = (props) => {
    return (
      
        <Sider trigger={null} collapsible collapsed={props.isCollapsed}>
           <div className="logo" >
            <center>
                <Avatar primary size="large" icon={<UserOutlined />} style={{marginTop:'14px',background:'#245a80'}}/> 
                <h3 style={{padding:'10px'}}>Albert Guigayoma</h3>
               
                <h5>Software Engineer</h5>
                <Divider/>
            </center>   
            </div>
            <Menu theme="light"  className="menu" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="dashboard" icon={<DashboardFilled />}>
                    <Link to="/">Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="post" icon={<FilePptFilled />}>
                    <Link to="/posts">Post</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<UserOutlined />}>
                    <Link to="/user">Testing Area</Link>
                </Menu.Item>
            </Menu>
        </Sider>
      
    )
}

export default Sidebar
