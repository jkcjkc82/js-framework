import Ember from 'ember';
import qs from 'npm:qs';

export default Ember.Controller.extend({
    auth: Ember.inject.service(),
    init: function() {
        const {access_token} = qs.parse(location.hash.replace(/^\#/, ""));

        if(access_token) {
            this.get('auth').saveAccessToken(access_token);
            location.href = '/';
        }
    }
});
