import withData from '../lib/withData'
import SignupForm from '../components/forms/signup'
import Layout from '../components/layout'
export default withData(() => (
	<Layout title={"Register"}>
		<SignupForm />
	</Layout>
))
