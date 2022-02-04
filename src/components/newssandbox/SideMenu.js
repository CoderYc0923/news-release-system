import React from 'react';
import {useNavigate} from 'react-router-dom';

import './index.css'

import {
  
} from '@ant-design/icons';

import { Layout, Menu } from 'antd';
const { Sider} = Layout;
const { SubMenu } = Menu;

function SideMenu(props) {
  
  const menuList = [
    {
      key:'/home',
      title:'首页'
    },
    {
      key:'/user-manage',
      title:'用户管理',
      children:[
        {
          key:'/user-manage/list',
          title:'用户列表'
        }
      ]
    },
    {
      key:'/right-manage',
      title:'权限管理',
      children:[
        {
          key:'/right-manage/role/list',
          title:'角色列表'
        },
        {
          key:'/right-manage/right/list',
          title:'权限列表'
        },
      ]
    },
  ]

  const navigate = useNavigate()

  const renderMenu = (menuList) => {
    return menuList.map(item => {
      if(item.children) {
        return <SubMenu key={item.key} title={item.title}>
          {renderMenu(item.children)}
        </SubMenu>
      }
      return <Menu.Item key={item.key} onClick={() => {
        navigate(item.key)
      }}>{item.title}</Menu.Item>
    })
  }

  return (
    <Sider trigger={null} collapsible >
          <div className="logo">全球新闻发布管理系统</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              {renderMenu(menuList)}
          </Menu>
        </Sider>
  );
}
export default SideMenu
