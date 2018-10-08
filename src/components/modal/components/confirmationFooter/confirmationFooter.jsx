import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'dumb';

class DefaultFooter extends Component {
	render() {
		const {
			onConfirmClick,
			onCancelClick,
			confirmButtonLabel,
			cancelButtonLabel,
			valid
		} = this.props;
		return (
			<div className="confirmation-footer">
				<ButtonGroup layout="fullWidth">
					<Button
						group
						layout="fullWidth"
						size="medium"
						onClick={onCancelClick}>
						<span>{cancelButtonLabel}</span>
					</Button>
					<Button
						group
						type="active"
						layout="fullWidth"
						size="medium"
						disabled={!valid}
						onClick={onConfirmClick}>
						<span>{confirmButtonLabel}</span>
					</Button>
				</ButtonGroup>
			</div>
		);
	}
}

DefaultFooter.defaultProps = {
	confirmButtonLabel: 'Save',
	cancelButtonLabel: 'Cancel'
};

DefaultFooter.propTypes = {
	onConfirmClick: PropTypes.func,
	onCancelClick: PropTypes.func,
	confirmButtonLabel: PropTypes.string,
	cancelButtonLabel: PropTypes.string,
	valid: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
};

export default DefaultFooter;
