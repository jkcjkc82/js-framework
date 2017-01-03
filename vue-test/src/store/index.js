import Vue from 'vue'
import Vuex from 'vuex'
import {saveData} from '../utils/localstorage'

Vue.use(Vuex)

const RECEIVE_FOLDERS = 'RECEIVE_FOLDERS'

const state = {
    access_token: '',
    folders: []
}

const getters = {
    getAccessToken: state => state.access_token,
    getFolders: state => state.folders
}

const actions = {
    saveAccessToken ({commit, state}, access_token) {
        saveData('access_token', access_token);
        state.access_token = access_token;
    },
    fetchFolders({commit, state}) {
        const url = 'https://api.dropboxapi.com/2/files/list_folder';

        window.fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + state.access_token
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
            commit(RECEIVE_FOLDERS, { data })
        })
        .catch((error) => {
            console.log('error', error);
        });
    }
}

const mutations = {
    [RECEIVE_FOLDERS] (state, {data}) {
        state.folders = data.entries;
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})
