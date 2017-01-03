import React, {PropTypes} from 'react';
import {stringify} from 'qs';
import {connect} from 'react-redux';
import {saveAccessToken} from './store/action.js';

class Detail extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func,
        auth: PropTypes.object
    };
    _login() {
        const para = {
            response_type: 'token',
            client_id: 'x2adb4mzqfp868e',
            redirect_uri: 'http://localhost:8080'
        };
        window.location.href =
            `https://www.dropbox.com/1/oauth2/authorize?${stringify(para)}`;
    }
    _logout() {
        this.props.dispatch(saveAccessToken(''));
    }
    render() {
        const {access_token} = this.props.auth;

        return (
            <div>
                {access_token ?
                    (<a className="button" onClick={this._logout.bind(this)}>Logout</a> ) :
                    (<a className="button" onClick={this._login.bind(this)}>Login</a>)
                 }
            </div>
        );
    }
}

export default connect(state => state)(Detail);
