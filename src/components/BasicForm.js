import React from 'react';
import {Field, reduxForm} from 'redux-form';
// import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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

	const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
		<TextField
			error={touched && error}
			{...input}
			{...custom}
		/>
	);

	return (
		<form onSubmit={handleSubmit}>
			<div className="field">
				<label htmlFor="firstName">First Name</label>
				<Field name="firstName" label="First Name" component={renderTextField} />
			</div>
			<div className="field">
				<label htmlFor="lastName">Last Name</label>
				<Field name="lastName" label="Last Name" component={renderTextField} />
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};

export default reduxForm({
	form: 'basic',
})(form);

