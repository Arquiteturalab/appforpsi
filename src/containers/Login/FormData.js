import {t, Email} from '~/components/shared';
import {theme} from '~/config';

export const FormData = {
  type: t.struct({
    email: Email,
    password: t.String
  }),
  options: {
    fields: {
      email: {
        returnKeyType: 'next',
        keyboardType: 'email-address',
        blurOnSubmit: false,
        onSubmitEditing: function() {
          const {password} = this.refs.input.refs;
          password.refs.input.focus();
        },
        placeholder: 'Seu e-mail',
        placeholderTextColor: theme.textSecondary,
        label: 'E-mail'
      },
      password: {
        returnKeyType: 'done',
        blurOnSubmit: true,
        onSubmitEditing: function() {
          this.props.onSubmit();
        },
        placeholder: 'Sua senha',
        placeholderTextColor: theme.textSecondary,
        label: 'Senha',
        secureTextEntry: true
      }
    }
  }
};
