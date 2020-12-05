import axios from 'axios';
import * as actionTypes from './actionTypes';

import * as API_PATHS from '../../api_path.js'
const API_PATH = API_PATHS.API_PATH

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userid');
    localStorage.removeItem('username');

    return {
        type: actionTypes.AUTH_LOGOUT
    };
     window.location.reload(false)
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post(`${API_PATH}rest-auth/login/`, {
            username: username,
            email:"",
            password: password
        })

        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('username',username)
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
            console.log(token)

            axios.get(`${API_PATH}api/Tokens/${token}/`)
              .then(result =>{
                const userid = result.data.user
                localStorage.setItem('userid', userid);
              })
        })
        .catch(err => {
            dispatch(authFail(err))

        })
    }
}

export const authSignup = (username, email, password1, password2) => {
    return dispatch => {

        axios.post(`${API_PATH}rest-auth/registration/`, {
            username: username,
            email: email,
            password1: password1,
            password2: password2,
        })


        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if ( expirationDate <= new Date() ) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000) );
            }
        }
    }
}
