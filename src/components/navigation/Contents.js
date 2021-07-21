import React from 'react'
import { Layout } from 'antd'
import '../../styles/contents.css'


const { Content } = Layout

const Contents = ({children}) => {
    return (
        <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 'auto',
            }}
        >
            {children}
        </Content>
    )
}

export default Contents
