import {compose, withState, withHandlers} from 'recompose';
import {cloneDeep} from 'lodash';
import {connect} from 'react-redux';
// Locals
import {FormData} from './FormData';
import {withRefs, getNavigatorContext} from '~/enhancers';
import {register} from '~/actions';
import {navigatorStyle} from '~/config';

export const enhancer = compose(
  connect(
    null,
    {register}
  ),
  getNavigatorContext,
  withRefs,
  withState('forms', 'setForms', FormData),
  withState('isLoading', 'setLoading', false),
  withHandlers({
    handleSubmit: ({
      getRefs,
      forms,
      setForms,
      register,
      navigator,
      setLoading
    }) => async () => {
      const refs = getRefs();
      const customersValue = refs.customersForm.getValue();
      console.log(customersValue);
      let newForms = cloneDeep(forms);
      if (customersValue) {
        setLoading(true);
        if (
          customersValue.password === customersValue.repeatPassword &&
          customersValue.password.length > 3
        ) {
          await register(customersValue);
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
