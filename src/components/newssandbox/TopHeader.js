import React,{useState} from 'react';

import { Layout,Menu, Dropdown,Avatar } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { Header} = Layout;

export default function TopHeader() {
  const [collapsed, setCollapsed] = useState(false)
  const changeCollapsed = () => {
    setCollapsed(!collapsed)
  }
  
const menu = (
  <Menu>
    <Menu.Item key={"1"}>
      超级管理员
    </Menu.Item>
    <Menu.Item danger key={"4"}>退出</Menu.Item>
  </Menu>
);
  return (
    <Header className="site-layout-background" style={{ padding: '0 16px' }}>
        {
          collapsed ? <MenuUnfoldOutlined onClick={changeCollapsed}/> : <MenuFoldOutlined onClick={changeCollapsed}/>
        }
        <div style={{float:"right"}}>
          <span>欢迎admin回来</span>
          <Dropdown overlay={menu}>
            <span style={{marginLeft:"10px"}}>
              <Avatar size={"large"} icon={<UserOutlined />} />
            </span>
          </Dropdown>
        </div>
    </Header>
  );
}
