import Ember from 'ember';
import qs from 'npm:qs';

export default Ember.Component.extend({
    auth: Ember.inject.service(),
    access_token: '',
    init: function() {
        this._super(...arguments);

        this.set('access_token', this.get('auth').getAccessToken());
    },
    actions: {
        logout: function() {
            this.get('auth').saveAccessToken('');
            location.reload();
        },
        login: function() {
            const para = {
                response_type: 'token',
                client_id: 'x2adb4mzqfp868e',
                redirect_uri: 'http://localhost:4200'
            };

            location.href =
                `https://www.dropbox.com/1/oauth2/authorize?${qs.stringify(para)}`;
        }
    }    
});
