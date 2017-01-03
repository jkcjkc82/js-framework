import {loadData, saveData} from '../utils/localstorage.js';

const RECEIVE_DROPBOX_FOLDERS = 'RECEIVE_DROPBOX_FOLDERS';
const RECEIVE_ACCESSTOKEN = 'RECEIVE_ACCESSTOKEN';

function saveAccessToken(access_token, cb) {
    return dispatch => {
        saveData('access_token', access_token);
        dispatch(getAccessToken());

        if(cb) {
            cb();
        }
    }
}

function getAccessToken() {
    return dispatch => {
        dispatch({
            type: RECEIVE_ACCESSTOKEN,
            access_token: loadData('access_token')
        });
    }
}

function getFolders() {
    return dispatch => {
        const url = 'https://api.dropboxapi.com/2/files/list_folder';

        window.fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + loadData('access_token')
            },
            body: JSON.stringify({
                path: '/framework-test'
            })
        })
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            } else {
                var error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
        })
        .then((data) => {
            dispatch({
                type: RECEIVE_DROPBOX_FOLDERS,
                folders: data.entries
            })
        })
        .catch((error) => {
            console.log('error', error);
        });
    }
}

export {
    saveAccessToken, getAccessToken, getFolders,
    RECEIVE_DROPBOX_FOLDERS, RECEIVE_ACCESSTOKEN
};
