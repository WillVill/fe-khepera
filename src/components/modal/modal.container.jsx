import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import onClickOutside from 'react-onclickoutside';
import { CSSTransitionGroup } from 'react-transition-group';

import DefaultFooter from './components/defaultFooter';
import ConfirmationFooter from './components/confirmationFooter';
import Modal from './modal.component';

import 'modal.css';

class ModalContainer extends Component {
	constructor(props) {
		super(props);
		this.node = document.createElement('div');
		document.body.appendChild(this.node);

		this.handleClickOutside = this.handleClickOutside.bind(this);
		this.escFunction = this.escFunction.bind(this);
	}

	handleClickOutside() {
		const { onClose, loading } = this.props;
		if (loading) onClose();
	}

	escFunction(event) {
		if (event.keyCode === 27 && !this.props.loading) this.props.onClose();
	}

	componentDidMount() {
		this.node.className = 'modal--wrapper';
		document.addEventListener('keydown', this.escFunction, false);
	}

	componentWillUnmount() {
		document.body.removeChild(this.node);
		document.removeEventListener('keydown', this.escFunction, false);
	}

	renderFooter() {
		const {
			type,
			onConfirmClick,
			onCancelClick,
			confirmButtonLabel,
			cancelButtonLabel,
			valid
		} = this.props;

		if (type === 'confirmation') {
			return (
				<ConfirmationFooter
					valid={valid}
					onConfirmClick={onConfirmClick}
					onCancelClick={onCancelClick}
					confirmButtonLabel={confirmButtonLabel}
					cancelButtonLabel={cancelButtonLabel}
				/>
			);
		}

		return (
			<DefaultFooter
				onClick={onConfirmClick}
				buttonLabel={confirmButtonLabel}
				valid={valid}
			/>
		);
	}

	render() {
		const { children, className, header, isOpen, type, loading } = this.props;

		const classNames = cx('modal', {
			'modal--loading': loading,
			[`${className}`]: className
		});

		return isOpen
			? ReactDOM.createPortal(
				<CSSTransitionGroup
					transitionName="modal__outer"
					transitionEnterTimeout={2000}
					transitionAppearTimeout={2000}
					transitionAppear
					transitionLeaveTimeout={5000}>
						<Modal children={children}
						header={header}
						type={type}
						classnames={classNames}/>
				</CSSTransitionGroup>,
				this.node
			)
			: null;
	}
}

ModalContainer.defaultProps = {
	loading: true,
	header: '',
	valid: true,
	type: '',
	isOpen: true,
	className: '',
	onClose: () => {
		console.info('"onClose" prop was not defined in Modal component.');
	},
	onConfirmClick: () => {
		console.info('"onConfirmClick" prop was not defined in Modal component.');
	},
	onCancelClick: () => {
		console.info('"onCancelClick" prop was not defined in Modal component.');
	}
};

ModalContainer.propTypes = {
	children: PropTypes.object,
	onClose: PropTypes.func,
	className: PropTypes.string,
	header: PropTypes.string,
	type: PropTypes.string,
	isOpen: PropTypes.bool,
	loading: PropTypes.bool,
	valid: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),

	// Footer Props
	confirmButtonLabel: PropTypes.string,
	cancelButtonLabel: PropTypes.string,
	onConfirmClick: PropTypes.func,
	onCancelClick: PropTypes.func
};

export default onClickOutside(ModalContainer);
