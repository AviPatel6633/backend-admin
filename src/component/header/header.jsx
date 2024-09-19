import React, { useState } from 'react';
import './header.css'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { VscAccount } from "react-icons/vsc";

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
            <Link className="header-logo" href='/dashboard'>
              Dashboard
            </Link>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              className='sidebar-btn'
            />
          </div>
          <div className='header-user-detail w-100'>
            <div><h1>Welcome <span>User</span></h1></div>
            <div>
              <VscAccount />
            </div>
          </div>
        </Header>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed} className="main-sidebar">
            <SidebarMenu />
          </Sider>
          <Content
            style={{
              margin: '10px',
              padding: 24,
              height: "100%",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              border: "1px solid #0958d9",
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