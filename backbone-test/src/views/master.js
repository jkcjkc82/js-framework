import {FilesCollection} from '../models/files.js';
import {AuthModel} from '../models/auth.js';
import ItemView from './item.js';

const CurrentTemplate = `
    <h3>Master</h3>

    <ul></ul>
`;

const MasterView = Backbone.View.extend({
    template: _.template(CurrentTemplate),
    initialize: function() {
        this.$el.html(this.template());

        const authModel = new AuthModel();
        const filesCollection = new FilesCollection();

        filesCollection.on({
            'add': this.addOne.bind(this)
        });

        if(authModel.loadAccessToken()) {
            filesCollection.fetch();
        }
    },
    addOne: function(model) {
        const view = new ItemView({
            model: model
        });
        this.$('ul').append(view.render().el);
    },
});

export default MasterView;
