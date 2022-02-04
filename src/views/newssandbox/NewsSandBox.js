import React from 'react';
import './NewsSandBox.css';

import {
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'

import SideMenu from '../../components/newssandbox/SideMenu'
import TopHeader from '../../components/newssandbox/TopHeader'
import NoPermission from '../../components/nopremission/NoPremission'

import Home from './home/Home'
import UserList from './userlist/UserList'
import RoleList from './rolelist/RoleList'
import RightList from './rightlist/RightList'

import {
  Layout,
} from 'antd'
const { Content } = Layout;

export default function NewsSandBox() {

  return ( 
    <Layout >
      <SideMenu></SideMenu> 
      <Layout className="site-layout">
        <TopHeader></TopHeader>

        <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path = "/home" element = {<Home></Home>}></Route >
              <Route path = "/user-manage/list" element = {<UserList></UserList>}></Route >
              <Route path = "/right-manage/role/list" element = {<RoleList></RoleList>}></Route >
              <Route path = "/right-manage/right/list" element = {<RightList></RightList>}></Route > 
              {  /* 默认显示home组件 */ } 
              <Route path = "/" element = {< Navigate to = "/home"></Navigate>}></Route >
              <Route path = "*" element = {< NoPermission></NoPermission>}></Route >
            </Routes> 
        </Content>
      </Layout> 
    </Layout>
  );
}