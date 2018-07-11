import React, { Component } from 'react';
import withData from '../lib/withData'
import checkLoggedIn from '../lib/checkLoggedIn'

class Logout extends Component {
    
    static async getInitialProps(context, apolloClient) {
		const { loggedInUser } = await checkLoggedIn(context, apolloClient)

		return {
			user: loggedInUser.profile
		}
    }
    
    render() {

        console.log(this.props);
        
        return (
            <div>This is the logout page.</div>
        )
    }
}

export default withData(Logout);
