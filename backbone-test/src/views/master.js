import {FilesModel, FilesCollection} from '../models/files.js';
import ItemView from './item.js';

const CurrentTemplate = `
    <div>
        <h3>Master</h3>
        <ul></ul>
    </div>
`;

const MasterView = Backbone.View.extend({
    template: _.template(CurrentTemplate),
    initialize: function() {
        this.$el.html(this.template());

        const filesCollection = new FilesCollection();
        filesCollection.on({
            'add': this.addOne.bind(this)
        });

        filesCollection.fetch();
    },
    addOne: function(model) {
        const view = new ItemView({
            model: model
        });
        this.$('ul').append(view.render().el);
    },
});

export default MasterView;