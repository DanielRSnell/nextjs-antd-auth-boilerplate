import React, { Component } from 'react';
import Layout from '../../../components/layout'

class Github extends Component {
    render() {
        console.log(this.props);
        return (
            <Layout title={"Github Login"}>
                <h1>Thank you for logging in!</h1>
            </Layout>
        )
    }
}

export default Github;