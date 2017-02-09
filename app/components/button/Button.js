
import React from 'react';
import classNames from 'classnames';

export default class Button extends React.Component {

	render() {

		let buttonClasses = classNames('btn', this.props.className);

		return (
			<button {...this.props} className={buttonClasses}>{this.props.children}</button>
		);
		
	}

}
