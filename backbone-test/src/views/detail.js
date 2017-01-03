import Global from '../utils/global.js';
import {saveData} from '../utils/localstorage.js';

const CurrentTemplate = `
    <div>
        <% if(access_token) { %>
        <a class="button" href="#">Logout</a>
        <% } else { %>
        <a class="button" href="#">Login</a>
        <% } %>
    </div>
`;

const DetailView = Backbone.View.extend({
    template: _.template(CurrentTemplate),
    events: {
        'click .button:contains("Login")': 'login',
        'click .button:contains("Logout")': 'logout'
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
        saveData('access_token', '');
        location.reload();
    },
    render: function() {
        this.$el.html(this.template(Global.attributes));
        return this;
    }
});

export default DetailView;