
import Dispatcher from '../../common/Dispatcher';
import { EventEmitter } from 'events';
import _ from 'lodash';

let users = [];

const Store = Object.assign({}, EventEmitter.prototype, {
    getUsers() {
        return users;
    },
    emitChange() {
        this.emit('change');
    },
    addChangeListener(callback) {
        this.on('change', callback);
    },
    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }
});

Dispatcher.register(action => {
    switch (action.actionType) {
        case 'GET_USERS':
            if(action.data.success) {
                users = action.data.users;
                Store.emitChange();
            }
            break;
        case 'REMOVE_USER':
            if(action.data.success) {
                _.remove(users, function(obj) {
                    return obj.id === action.data.id;
                });  
                Store.emitChange();
            }
            break;
        case 'ADD_USER':
            if(action.data.success) {
                users.push(action.data.user);
                Store.emitChange();
            }
            break;
        default:
    }
});

export default Store;
