import qs from 'qs';
import RootView from './views/root.js';
import {loadData, saveData} from './utils/localstorage.js';
import Global from './utils/global.js';

const {access_token} = qs.parse(location.hash.replace(/^\#/, ""));
if(access_token) {
    saveData('access_token', access_token);
    location.href = "/";
} else {
    Global.set('access_token', loadData('access_token'));

    $.ajaxSetup({
        headers: {
            'Content-Type': 'application/json',
            'Authorization' :'Bearer ' + Global.get('access_token')
        }
    });

    (new RootView({id: 'root'})).render();
}