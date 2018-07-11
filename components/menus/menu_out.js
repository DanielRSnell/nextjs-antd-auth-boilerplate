import React, { Component } from 'react';
import Link from 'next/link'
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const MenuStyle = {
    float: "right"
}

class MenuOut extends Component {


    render() {
        
        return (
            <Menu
            mode="horizontal"
            theme="dark"
          >
            <Menu.Item className="menu-hover" key="github" style={MenuStyle}>
              <a href={"/auth/github"}>
              <Icon type="github" />
              </a>
            </Menu.Item>
            <Menu.Item className="menu-hover" key="login" style={MenuStyle}>
              <a href={"/login"}>
              Login
              </a>
            </Menu.Item>
            <Menu.Item className="menu-hover" key="register" style={MenuStyle}>
              <a href={"/signup"}>
              Register
              </a>            
            </Menu.Item>
            <Menu.Item className="menu-hover" style={MenuStyle} key="home">
              <a href={"/"}>
              Home
              </a>
            </Menu.Item>
            </Menu>
        )
    }
}

export default MenuOut;