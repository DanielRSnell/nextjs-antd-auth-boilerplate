import { graphql } from 'react-apollo'
import Link from 'next/link'
import gql from 'graphql-tag'
import { Row, Col } from 'antd'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

const FormStyles = {
	background: "#fff",
	padding: "2rem 1.5rem 2rem 1.5rem",
	borderRadius: "5px",
	boxShadow: "0 0 1px rgba(34, 25, 25, 0.4)",
	minWidth: "300px"
}

class NormalLoginForm extends React.Component {
	state = {
		email: null,
		password: null,
		error: null
	}

	onFormSubmit = (e) => {
		e.preventDefault()
		let { email, password } = this.state

		// Check non null email && password
		if (typeof email === 'string' && typeof password === 'string') {
			// trim fields
			email = email.trim()
			password = password.trim()

			// Check for email && password length
			if (email.length > 0 && password.length > 0) {
				this.props
					.mutate({
						variables: {
							email,
							password
						}
					})
					.then(() => {
						this.setState({ error: null })
						window.location = '/'
					})
					.catch(({ graphQLErrors: err }) =>
						this.setState({ error: err[0].message })
					)
			} else {
				this.props.form.validateFields((err, values) => {
					if (!err) {
					  console.log('Received values of form: ', values);
					}
				  });
			}
		} else {
			this.props.form.validateFields((err, values) => {
				if (!err) {
				  console.log('Received values of form: ', values);
				}
			  });
		}
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Row type="flex" align="center" style={{height: "50vh"}}>
			<Col style={{
	alignSelf: "flex-end"}}>
			<Form onSubmit={this.onFormSubmit}
			style={FormStyles}
			className="login-form">
			<FormItem style={{marginBottom: "1rem"}}>
			  {getFieldDecorator('userName', {
				rules: [{ required: true, message: 'Please input your username!' }],
			  })(
				<Input 
				onInput={e => this.setState({email: e.target.value})}
				prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="E-mail" />
			  )}
			</FormItem>
			<FormItem style={{marginBottom: "1rem"}}>
			  {getFieldDecorator('password', {
				rules: [{ required: true, message: 'Please input your Password!' }],
			  })(
				<Input 
				onInput={e => this.setState({password: e.target.value})}
				prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
			  )}
			</FormItem>
			<FormItem style={{marginBottom: "0px"}}>
			  {getFieldDecorator('remember', {
				valuePropName: 'checked',
				initialValue: true,
			  })(
				<Checkbox>Remember me</Checkbox>
			  )}
			  <Button type="primary" htmlType="submit"
			 	style={{width: "100%", marginTop: "1rem"}}  
			   className="login-form-button">
				Login
			  </Button>
			  <Link href="/signup">
			  <Button ghost 
			  type="primary" 
			  style={{width: "100%", marginTop: "1rem"}}>
			  Register
			  </Button>
			  </Link>
			</FormItem>
		  </Form>
		  </Col>
		  </Row>
		)
	}
}

const mutator = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			email
		}
	}
`
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default graphql(mutator)(WrappedNormalLoginForm);
