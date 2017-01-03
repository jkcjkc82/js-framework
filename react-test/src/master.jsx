import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import qs from 'qs';
import {
    saveAccessToken,
    getAccessToken,
    getFolders
} from './store/action.js';

class Master extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func,
        dropbox: PropTypes.array
    };
    componentDidMount() {
        const {access_token} = qs.parse(
            window.location.hash.replace(/^#/, ''));

        if(access_token) {
            this.props.dispatch(
                saveAccessToken(access_token, () => {
                    location.href = '/';
                }));
        } else {
            this.props.dispatch(getAccessToken());
            this.props.dispatch(getFolders());
        }
    }
    _renderItem() {
        const {dropbox} = this.props;

        return dropbox.map((v, i) => {
            return (<li key={i}>{v.name}</li>);
        });
    }
    render() {
        return (
            <div className="column">
                <h3>Master</h3>
                <ul>
                    {this._renderItem()}
                </ul>
            </div>
        );
    }
}

export default connect(state => state)(Master);
