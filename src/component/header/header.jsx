import React, { useState } from 'react';
import './header.css'
import { AppstoreOutlined, MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined, SettingOutlined } from '@ant-design/icons';

import Link from 'next/link';
import { Button, Layout, Menu, theme } from 'antd';

const { Header, Sider, Content } = Layout;

// Sidebar Menu'

const sidebarMenuItems = [
  {
    key: 'sub1',
    icon: <MailOutlined />,
    label: (
      <Link href="/table">
        Table
      </Link>
    ),
  },
  {
    key: 'sub2',
    icon: <AppstoreOutlined />,
    label: (
      <Link href="/navigation-two">
        Navigation Two
      </Link>
    ),
  },
  {
    type: 'divider',
  },
  {
    key: 'sub4',
    icon: <SettingOutlined />,
    label: 'Navigation Three',
    children: [
      {
        key: '9',
        label: (
          <Link href="/option-9">
            Option 9
          </Link>
        ),
      },
      {
        key: '10',
        label: (
          <Link href="/option-10">
            Option 10
          </Link>
        ),
      },
      {
        key: '11',
        label: (
          <Link href="/option-11">
            Option 11
          </Link>
        ),
      },
      {
        key: '12',
        label: (
          <Link href="/option-12">
            Option 12
          </Link>
        ),
      },
    ],
  },
];


const HeaderMain = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Header
           style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0 16px',
            height: '64px', 
            lineHeight: '64px', 
          }}

        >
          <Link className="header-logo" href='/'>
            Dashboard
          </Link>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
              color: "#fff",
            }}
          />
        </Header>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              items={sidebarMenuItems}
            />
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