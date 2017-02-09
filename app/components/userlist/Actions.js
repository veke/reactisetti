
import Dispatcher from '../../common/Dispatcher';

const Actions = {
    getUsers() {
        let users = [{
            id: '89',
        	name: 'John Doe',
        	type: 'Gold'
        },
        {
            id: '18912312',
            name: 'Irmeli Testaaja',
            type: 'Silver'
        },
        {
            id: '189123',
            name: 'Matias Kukkaro',
            type: 'Bronze'
        }];

        Dispatcher.dispatch({
            actionType: 'GET_USERS',
            data: {
                success: true,
                users: users
            }
        });
    },

    removeUser(id) {
        Dispatcher.dispatch({
            actionType: 'REMOVE_USER',
            data: {
                success: true,
                id: id
            }
        });
    },

    addUser(user) {
        Dispatcher.dispatch({
            actionType: 'ADD_USER',
            data: {
                success: true,
                user: user
            }
        });
    }

};

export default Actions;
