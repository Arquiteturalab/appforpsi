import {compose, withHandlers, withState} from 'recompose';
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager
} from 'react-native-fbsdk';
import {connect} from 'react-redux';
import {cloneDeep} from 'lodash';
// Locals
import {loginFacebook, login} from '~/actions';
import {FormData} from './FormData';
import {withRefs, withNotifications, getNavigatorContext} from '~/enhancers';
import {navigatorStyle} from '~/config';
console.log(FormData);
export const enhancer = compose(
  withRefs,
  withNotifications,
  getNavigatorContext,
  connect(
    ({user}) => ({user}),
    {loginFacebook, login}
  ),
  withState('form', 'setForm', FormData),
  withHandlers({
    handlerLoginFacebook: ({loginFacebook, navigator}) => () => {
      LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
        function(result) {
          console.log(result);
          if (result.isCancelled) {
            console.log('Login cancelled');
          } else {
            AccessToken.getCurrentAccessToken().then(async (data, e) => {
              await loginFacebook(data.accessToken);
              navigator.resetTo({
                screen: 'MapsSearch',
                navigatorStyle
              });
            });
          }
        },
        function(error) {
          console.log('Login fail with error: ' + error);
        }
      );
    },
    handleSubmit: ({
      form,
      getRefs,
      login,
      setForm,
      navigator,
      showErrorNotification
    }) => async () => {
      const newForm = cloneDeep(form);
      const data = getRefs().formElement.getValue();
      if (data) {
        const {error} = await login(data);
        newForm.options.fields['email'].hasError = error;
        newForm.options.fields['password'].hasError = error;
        newForm.value = error ? undefined : data;
        setForm(newForm);
        if (!error) {
          navigator.resetTo({
            screen: 'MapsSearch',
            navigatorStyle
          });
        } else {
          showErrorNotification('Usuário ou senha está incorreto.');
        }
      }
    }
  })
);
