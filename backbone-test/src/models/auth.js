import {loadData, saveData} from '../utils/localstorage.js';

const AuthModel = Backbone.Model.extend({
    saveAccessToken: function(access_token) {
        saveData('access_token', access_token);
    },
    loadAccessToken: function() {
        return loadData('access_token');
    },
});

export {
    AuthModel
};