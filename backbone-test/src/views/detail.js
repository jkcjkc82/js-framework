import {AuthModel} from '../models/auth.js';

const CurrentTemplate = `
    <h3>Detail</h3>

    <% if(access_token) { %>
    <a class="button" href="#">Logout</a>
    <% } else { %>
    <a class="button" href="#">Login</a>
    <% } %>
`;

const DetailView = Backbone.View.extend({
    template: _.template(CurrentTemplate),
    events: {
        'click .button:contains("Login")': 'login',
        'click .button:contains("Logout")': 'logout'
    },
    initialize: function() {
        this.authModel = new AuthModel();
    },
    login: function() {
        const para = {
            response_type: 'token',
            client_id: 'x2adb4mzqfp868e',
            redirect_uri: 'http://localhost:3000'
        };
        location.href =
            `https://www.dropbox.com/1/oauth2/authorize?${$.param(para)}`;
    },
    logout: function() {
        this.authModel.saveAccessToken('')
        location.reload();
    },
    render: function() {
        this.$el.html(this.template({
            access_token: this.authModel.loadAccessToken()
        }));
        return this;
    }
});

export default DetailView;