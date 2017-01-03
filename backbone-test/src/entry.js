import qs from 'qs';
import RootView from './views/root.js';
import {AuthModel} from './models/auth.js';

const {access_token} = qs.parse(location.hash.replace(/^\#/, ""));
const authModel = new AuthModel();

if(access_token) {
    authModel.saveAccessToken(access_token)
    location.href = "/";
} else {
    $.ajaxSetup({
        headers: {
            'Content-Type': 'application/json',
            'Authorization' :'Bearer ' + authModel.loadAccessToken()
        }
    });

    const rootView = new RootView({
        id: 'root'
    });

    rootView.render();
}
