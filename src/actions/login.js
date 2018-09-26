import {CALL_API} from 'redux-api-middleware-native';

import {apiUrl, apikey} from '~/config';
// import {fetchClient} from '~/utils';

export const register = user => {
    return {
        [CALL_API]: {
            endpoint: `${apiUrl}/user/v1/register`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: user,
            types: ['SUCCESS_USER', 'USER_FAILURE', 'USER_ERROR']
        }
    };
    // return async dispatch => {
    //     function onSuccess(success) {
    //         dispatch({
    //             type: 'SUCCESS_USER',
    //             payload: success
    //         });
    //         return success;
    //     }
    //     function onError(error) {
    //         dispatch({
    //             type: 'POST_USER_ERROR',
    //             error
    //         });
    //         return error;
    //     }
    //     try {
    //         const url = `${apiUrl}/user/v1/register`;
    //         const axios = fetchClient();

    //         const response = await axios.post(url, user);
    //         console.log(response);
    //         return onSuccess(response.data.data);
    //     } catch (e) {
    //         console.log(e);
    //         return onError(e.response.data);
    //     }
    // };
};

export const loginFacebook = token => {
    return {
        [CALL_API]: {
            endpoint: `${apiUrl}/user/v1/loginfacebook`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                access_token: token
            },
            types: ['SUCCESS_USER', 'SUCCESS_USER', 'SUCCESS_USER']
        }
    };
};

// export const loginFacebook = token => {
//     console.log(token);
//     return {
//         [CALL_API]: {
//             endpoint: `${apiUrl}/user/v1/loginfacebook`,
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'access_token': token
//             },
//             types: ['SUCCESS_USER', 'USER_FAILURE', 'USER_ERROR']
//         }
//     };

// return async dispatch => {
//     function onSuccess(success) {
//         dispatch({
//             type: 'SUCCESS_USER',
//             payload: success
//         });
//         return success;
//     }
//     function onError(error) {
//         dispatch({
//             type: 'ERROR_CARD',
//             error
//         });
//         return error;
//     }
//     try {
//         const url = `${apiUrl}/user/v1/loginfacebook`;
//         const axios = fetchClient();
//         console.log(axios);
//         const options = {
//             headers: {
//                 'Content-Type': 'application/json',
//                 access_token: token,
//                 apikey
//             }
//         };
//         const response = await axios.post(url, {}, options);
//         return onSuccess(response.data.data);
//     } catch (e) {
//         console.log(e);
//         return onError(e);
//     }
// };
// };

export const logout = () => {
    //
    return {
        [CALL_API]: {
            endpoint: `${apiUrl}/offline/v1/logout`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            types: ['LOGOUT_USER', 'LOGOUT_FAILURE', 'LOGOUT_ERROR']
        }
    };
};

export const login = user => {
    // return async dispatch => {
    //     function onSuccess(success) {
    //         dispatch({
    //             type: 'SUCCESS_USER',
    //             payload: success
    //         });
    //         return success;
    //     }
    //     function onError(error) {
    //         dispatch({
    //             type: 'SUCCESS_ERROR',
    //             error
    //         });
    //         return error;
    //     }
    //     try {
    //         const url = `${apiUrl}/user/v1/login`;
    //         const axios = fetchClient();
    //         const options = {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 apikey
    //             }
    //         };
    //         console.log(axios);
    //         const response = await axios.post(url, user, options);
    //         return onSuccess(response.data.data);
    //     } catch (e) {
    //         console.log(e.message);
    //         return onError(e.response.data);
    //     }
    // };
};