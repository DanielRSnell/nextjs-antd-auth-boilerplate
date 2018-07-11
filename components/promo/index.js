import React, { Component } from 'react'
import { Row, Col, Button, Icon } from 'antd'

class Promo extends Component {
    render() {
        console.log(this.props);
        return (
            <Row type="flex" align="center">
                <Col>
                    <h1>NEXT.JS + APOLLO</h1>
                    {this.props.email ? 
                    <Button 
                    style={{
                        background: "#000",
                        color: "#fff",
                        fontSize: "1rem",
                        fontWeight: "bold"
                    }}
                    >
                    <Icon type="github" /> Github
                    </Button> 
                    : "You are not logged in"}
                </Col>
            </Row>
        )
    }
}

export default Promo;