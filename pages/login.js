import withData from '../lib/withData'
import LoginForm from '../components/forms/login'
import Layout from '../components/layout'
export default withData(() => (
	<Layout title={"Login"}>
		<LoginForm />
	</Layout>
))
