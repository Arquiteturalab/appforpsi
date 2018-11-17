import {compose, withState, withHandlers, setPropTypes} from 'recompose';
import {cloneDeep} from 'lodash';
import {connect} from 'react-redux';
import {string} from 'prop-types';

// Locals
import {FormData} from './FormData';
import {withRefs, getNavigatorContext} from '~/enhancers';
import {register, registerDoctors} from '~/actions';
import {navigatorStyle} from '~/config';

export const enhancer = compose(
  connect(
    null,
    {register, registerDoctors}
  ),
  getNavigatorContext,
  withRefs,
  setPropTypes({
    type: string.isRequired
  }),
  withState('forms', 'setForms', FormData),
  withState('isLoading', 'setLoading', false),
  withHandlers({
    handleSubmit: ({
      getRefs,
      forms,
      setForms,
      register,
      navigator,
      setLoading,
      registerDoctors,
      type
    }) => async () => {
      const refs = getRefs();
      const customersValue = refs.customersForm.getValue();
      let newForms = cloneDeep(forms);
      if (customersValue) {
        setLoading(true);
        if (
          customersValue.password === customersValue.repeatPassword &&
          customersValue.password.length > 3
        ) {
          if (type === 'client') {
            await register(customersValue);
          }else {
            await registerDoctors(customersValue);
          }
          navigator.resetTo({
            screen: 'MapsSearch',
            navigatorStyle
          });
        } else {
          newForms.customersForm.value = customersValue;
          newForms.customersForm.value = customersValue;
          newForms.customersForm.options.fields.password.hasError = true;
          newForms.customersForm.options.fields.repeatPassword.hasError = true;
          setForms(newForms);
        }
      }
      setLoading(false);
    }
  })
);
