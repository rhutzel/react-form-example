import React from 'react';
import {Field, reduxForm} from 'redux-form';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';

/*
class TextFormField extends React.Component {
	render() {
		const { input: {value, onChange} } = this.props;

		return (
			<TextField value={this.input.value} onChange={this.input.onChange} />
		);
	}
}
*/

const form = props => {
	const {handleSubmit} = props;

	/*
	const renderField = (field) => (
		<div className="input-row">
			<input {...field.input} type="text"/>
			{field.meta.touched && field.meta.error &&
			<span className="error">{field.meta.error}</span>}
		</div>
	);
	*/

	return (
		<form onSubmit={handleSubmit}>
			<div className="field">
				<label htmlFor="firstName">First Name</label>
				<Field name="firstName" component="input" type="text" placeholder="First Name" />
			</div>
			<div className="field">
				<label htmlFor="lastName">Last Name</label>
				<Field name="lastName" component="input" type="text" placeholder="Last Name" />
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};

export default reduxForm({
	form: 'basic',
})(form);
