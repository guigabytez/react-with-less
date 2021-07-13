import React from 'react'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';
  
  import '../../styles/sidebar.css'
  
  const { Sider } = Layout;

const Sidebar = (props) => {
    return (
        <div>
            <Sider trigger={null} collapsible collapsed={props.isCollapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="dashboard" icon={<UserOutlined />}>
                        <Link to="/dashboard">Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key="post" icon={<VideoCameraOutlined />}>
                        <Link to="/post">Post</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        <Link to="/user">User</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        </div>
    )
}

export default Sidebar
