import React from 'react'
import Link from 'next/link'
import withData from '../lib/withData'
import checkLoggedIn from '../lib/checkLoggedIn'
// import { checkLoggedIn } from ~'../lib'
import Layout from '../components/layout'
import Promo from '../components/promo'

class Index extends React.Component {
	static async getInitialProps(context, apolloClient) {
		const { loggedInUser } = await checkLoggedIn(context, apolloClient)

		return {
			user: loggedInUser.profile
		}
	}

	render() {
		const { user } = this.props

		if (user) {
	
			return (
				<Layout title={"Home Page"} sit={"true"}>
					<Promo email={user.email} />
				</Layout>
			)
		}

		return (
			<Layout title={"Home"}>
				<Promo />
			</Layout>
		)
	}
}

export default withData(Index)
