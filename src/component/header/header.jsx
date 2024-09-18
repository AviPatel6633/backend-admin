import React, { useState } from 'react';
import './header.css'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import Link from 'next/link';
import { Button, Layout, Menu, theme } from 'antd';
import SidebarMenu from './sidebar';
const { Header, Sider, Content } = Layout;

const HeaderMain = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Header className='header-main' >
          <div className='logo-box'>
            <Link className="header-logo" href='/'>
              Dashboard
            </Link>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              className='sidebar-btn'
            />
          </div>
        </Header>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <SidebarMenu/>
          </Sider>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              height: "100%",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {props.content}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default HeaderMain;