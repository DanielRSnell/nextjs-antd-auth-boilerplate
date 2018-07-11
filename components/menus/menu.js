import React, { Component } from 'react'
import MenuIn from './menu_in'
import MenuOut from './menu_out'

class Menu extends Component {
    render() {
        const Situation = this.props.sit
        if (this.props.sit) {
            return <MenuIn />
        } else {
        return <MenuOut />
        }
    }
}

export default Menu;