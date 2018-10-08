import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'dumb';

class DefaultFooter extends Component {
	render() {
		const { buttonLabel, onClick, valid } = this.props;

		return (
			<div className="default-footer">
				<Button
					type="active"
					layout="fullWidth"
					size="medium"
					onClick={onClick}
					disabled={!valid}>
					{buttonLabel}
				</Button>
			</div>
		);
	}
}

DefaultFooter.defaultProps = {
	buttonLabel: 'Save'
};

DefaultFooter.propTypes = {
	onClick: PropTypes.func,
	buttonLabel: PropTypes.string,
	valid: PropTypes.bool
};

export default DefaultFooter;
