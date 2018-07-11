import React, { Component } from 'react'
import Link from 'next/link'
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const MenuStyle = {float: "right"}

class MenuIn extends Component {
    state = {
        current: 'logout',
      }
    
    render() {
        
        return (
        <Menu
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item 
        className="menu-hover"
        style={MenuStyle} key="logout">
          <a href="/logout">Logout</a>
        </Menu.Item>
        </Menu>
        )
    }
}

export default MenuIn