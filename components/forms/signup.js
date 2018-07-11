import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Link from 'next/link'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

const FormStyles = {
	background: "#fff",
	padding: "2rem 1.5rem 2rem 1.5rem",
	borderRadius: "5px",
	boxShadow: "0 0 1px rgba(34, 25, 25, 0.4)",
	minWidth: "300px"
}

class RegistrationForm extends React.Component {
	state = {
		email: null,
		fullname: null,
		password: null,
		error: null,
		confirmDirty: false,
    	autoCompleteResult: []
	}

	onFormSubmit = e => {
		e.preventDefault()
		let { email, fullname, password } = this.state

		// Check non null email && password
		if (typeof email === 'string' && typeof password === 'string') {
			// trim fields
			email = email.trim()
			fullname = fullname.trim()
			password = password.trim()

			// Check for email && password length
			if (email.length > 0 && password.length > 0) {
				this.props
					.mutate({
						variables: {
							email,
							fullname,
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
				this.props.form.validateFieldsAndScroll((err, values) => {
					if (!err) {
					  console.log('Received values of form: ', values);
					}
				  });
			}
		} else {
			this.props.form.validateFieldsAndScroll((err, values) => {
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
				<Col style={{alignSelf: "flex-end"}}>
					<Form onSubmit={this.onFormSubmit} style={FormStyles}
					className="login-form">
					<FormItem>
					{getFieldDecorator('nickname', {
					rules: [{ required: true, message: 'Please input your Full Name!', whitespace: true }],
						})(
						<Input 
						onInput={e => this.setState({fullname: e.target.value})}
						prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Name"
						/>
					)}
					</FormItem>
					<FormItem>
					{getFieldDecorator('email', {
						rules: [{
						type: 'email', message: 'The input is not valid E-mail!',
						}, {
						required: true, message: 'Please input your E-mail!',
						}],
					})(
						<Input 
						onInput={e => this.setState({email: e.target.value})}
						prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="E-mail" 
						/>
					)}
					</FormItem>
					<FormItem>
					{getFieldDecorator('password', {
						rules: [{
						required: true, message: 'Please input your Password!',
						}, {
						validator: this.validateToNextPassword,
						}],
					})(
						<Input
						onInput={e => this.setState({password: e.target.value})}
						prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"
						/>
					)}
					</FormItem>
					<FormItem>
					<Button type="primary" htmlType="submit"
					style={{width: "100%"}}>Register</Button>
					 <Link href="/login">
						<Button ghost 
						type="primary" 
						style={{width: "100%", marginTop: "1rem"}}>
						Login
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
	mutation createUser($email: String!, $fullname: String, $password: String!) {
		createUser(email: $email, fullname: $fullname, password: $password) {
			email
		}
	}
`
const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default graphql(mutator)(WrappedRegistrationForm)
