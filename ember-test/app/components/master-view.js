import Ember from 'ember';

export default Ember.Component.extend({
    dropbox: Ember.inject.service(),
    init: function() {
        this._super(...arguments);
        this.get('dropbox').getFolders().then((data) => {
            this.set('folders', data)
        });
    }
});
