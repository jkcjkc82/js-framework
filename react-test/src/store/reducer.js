import {
    RECEIVE_DROPBOX_FOLDERS, RECEIVE_ACCESSTOKEN
} from './action.js'

function auth(state={access_token: ''}, action) {
    switch(action.type) {
    case RECEIVE_ACCESSTOKEN:
        return {
            access_token: action.access_token
        }
    default:
        return state;
    }
}

function dropbox(state=[], action) {
    switch(action.type) {
    case RECEIVE_DROPBOX_FOLDERS:
        return action.folders;
    default:
        return state;
    }
}

export {
    auth, dropbox
};
