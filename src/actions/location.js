import {regionFrom} from '~/utils';
export const getGeolocation = () => {
  return dispatch => {
    navigator.geolocation.getCurrentPosition(position => {
      const {latitude, longitude} = position.coords;
      dispatch({
        type: 'GET_GEOLOCATION',
        payload: {
          latitude,
          longitude
        }
      });
    });
  };
};
 
