import {apiUrl} from '~/config';
import axios from 'axios';

export const getCard = () => {
    return async dispatch => {
        function onSuccess(success) {
            dispatch({
                type: 'SUCCESS_CARD',
                payload: success
            });
            return success;
        }
        function onError(error) {
            dispatch({
                type: 'SUCCESS_CARD',
                error
            });
            return error;
        }
        try {
            const url = `${apiUrl}/cards?pageSize=10`;
            const response = await axios.get(url);
            return onSuccess(response.data.cards);
        } catch (e) {
            return onError(e);
        }
    };
};
