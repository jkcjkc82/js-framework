const CurrentTemplate = `
    <%= name  %>
`;

const ItemView = Backbone.View.extend({
    tagName: 'li',
    template: _.template(CurrentTemplate),
    initialize: function() {
        this.$el.html(this.template(this.model.attributes));
    },
    render: function() {
        return this;
    }
});

export default ItemView;
