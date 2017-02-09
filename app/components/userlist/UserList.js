
import React from 'react';
import classNames from 'classnames';
import Button from '../button/Button';
import Store from './Store';
import Actions from './Actions';

export default class Main extends React.Component {

	constructor(props) {
		super(props);
	}

	state = {
		userData: []
	}

	static propTypes = {
		visibility: React.PropTypes.bool
	}

	componentDidMount() {
		Store.addChangeListener(this._fetchUsers);
		Actions.getUsers();
	}

	componentWillUnmount() {
		Store.removeChangeListener(this._fetchUsers);
	}

	_fetchUsers = () => {
		let data = Store.getUsers();
		this.setState({
			userData: data
		});
	}

	_removeUser = (id, e) => {
		Actions.removeUser(id);
	}

	_addUser = () => {
		let user = {
			id: Math.floor(Date.now() * Math.random()),
            name: Math.random().toString(36).substr(7),
            type: 'Unverified'
        }
		Actions.addUser(user);
	}

	render() {

		let classes = classNames('user-list', {
			show: this.props.visibility
		});

		let users = this.state.userData.map((user, index) => {
			return (
				<tr key={index}>
					<td>{user.name}</td>
					<td>{user.type}<Button onClick={this._removeUser.bind(this, user.id)} className='btn-small btn-negative'>Delete</Button></td>
				</tr>
				);
		});

		return (
			<div className={classes}>
				<h2>UserList</h2>
				{users ?
				<div>
					<table className='table table-striped'>
						<tbody>{users}</tbody>
					</table>
					<Button onClick={this._addUser.bind(this)}>Create random dude</Button>
				</div>
				: null}
			</div>
		);
	}
}
