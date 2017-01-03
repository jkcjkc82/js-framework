import MasterView from './master.js';
import DetailView from './detail.js';

const CurrentTemplate = `
    <h1>Backbone App Test</h1>
    <div class="row">
        <div id="Master" class="column"></div>
        <div id="Detail" class="column"></div>
    </div>
`;

const RootView = Backbone.View.extend({
    el: 'div',
    template: _.template(CurrentTemplate),
    initialize: function() {
        this.$el.html(this.template());

        this.master = new MasterView({
            el: this.$('#Master')
        });
        this.detail = new DetailView({
            el: this.$('#Detail')
        });
    },
    render: function() {
        this.master.render();
        this.detail.render();

        return this;
    }
});

export default RootView;