import Ember from 'ember';

export default Ember.Service.extend({
    auth: Ember.inject.service(),
    getFolders() {
        const access_token = this.get('auth').getAccessToken();
        const url = 'https://api.dropboxapi.com/2/files/list_folder';

         return Ember.$.ajax({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            },
            url,
            method: 'POST',
            data: JSON.stringify({
                path: '/framework-test'
            })
         }).then((data) => {
            return data.entries;
         }).catch((err) => {
            console.log(err);
         });
    }
});
