import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({classNames, header, type, children}) => (
    <div key="key" className={classNames}>
        <div className="modal__header">
            <span>{header}</span>
            {/* <button className="modal__header__close icon icon--clear" onClick={() => onClose()} /> */}
        </div>
        <div className="modal__content">{children}</div>
        {type !== 'custom' && (
            <div className="modal__action">{this.renderFooter()}</div>
        )}
    </div>
);

Modal.propTypes = {
	children: PropTypes.object,
	classNames: PropTypes.string,
	header: PropTypes.string,
	type: PropTypes.string
};

export default Modal;