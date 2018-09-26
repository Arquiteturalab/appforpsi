import {compose, withHandlers} from 'recompose';
import {connect} from 'react-redux';
import {getCard} from '~/actions';

export const enhancer = compose(
  withHandlers({
    loginFacebook: () => () => {
      console.log('teste');
      LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
        function(result) {
          console.log(result);
          if (result.isCancelled) {
            console.log('Login cancelled');
          } else {
            AccessToken.getCurrentAccessToken().then((data, e) => {
              console.log(data);
            });
            // console.log(result);
            // console.log(
            //   'Login success with permissions: ' +
            //     result.grantedPermissions.toString()
            // );
          }
        },
        function(error) {
          console.log('Login fail with error: ' + error);
        }
      );
    }
  })
);
