
import React from 'react';
import Button from '../button/Button';
import UserList from '../userlist/UserList';

export default class Main extends React.Component {

	state = {
		showList: false
	}

	_toggleList = () => {
		this.setState({
			showList: !this.state.showList
		});
	}

	render() {

		return (
			<div className='grid'>
				<div className='row'>
					<div className='col-12'>
						<div className='text-center'>
							<h1>Hello World</h1>
							<Button onClick={this._toggleList.bind(this)}>
							{this.state.showList ? 'Hide list' : 'Show List'  }
							</Button>
						</div>
						<UserList visibility={this.state.showList} />
					</div>
				</div>
			</div>

		);
	}

}
