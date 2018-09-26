import {t, Email} from '~/components/shared';
import {theme} from '~/config';

export const FormData = props => {
  const REGISTER = 'register';
  let passwordFields = {};

  if (props.testID.toLowerCase() === REGISTER && !props.isSocialRegister) {
    passwordFields = {
      password: t.String,
      repeatPassword: t.String
    };
  }

  const type = t.struct({
    name: t.String,
    email: Email,
    telephone: t.String,
    ...passwordFields
  });

  return {
    loginForm: {
      type: {
        properties: {
          password: {
            type: 'string'
          },
          repeatPassword: {
            type: 'string'
          }
        }
      }
    },
    customersForm: {
      type: type,
      options: {
        order: [
          'test',
          'name',
          'email',
          'telephone',
          'password',
          'repeatPassword'
        ],
        fields: {
          test: {
            label: 'test',
            maxLength: 14
          },
          email: {
            placeholder: 'seuemail@exemplo.com',
            keyboardType: 'email-address',
            returnKeyType: 'next',
            blurOnSubmit: false,
            onSubmitEditing: function() {
              const {telephone} = this.refs.input.refs;
              telephone.refs.input.focus();
            },
            placeholderTextColor: theme.textSecondary,
            label: 'E-mail'
          },
          name: {
            placeholder: 'Seu nome completo',
            returnKeyType: 'next',
            blurOnSubmit: false,
            onSubmitEditing: function() {
              const {email} = this.refs.input.refs;
              email.refs.input.focus();
            },
            placeholderTextColor: theme.textSecondary,
            label: 'Nome'
          },
          telephone: {
            returnKeyType: 'next',
            blurOnSubmit: false,
            onSubmitEditing: function() {
              const {password} = this.refs.input.refs;

              if (password) {
                password.refs.input.focus();
              } else {
                this.props.onSubmit();
              }
            },
            keyboardType: 'numeric',
            config: {mask: 'cel-phone'},
            placeholder: '(99) 9999-9999',
            minLength: 8,
            placeholderTextColor: theme.textSecondary,
            label: 'Telefone'
          },
          password: {
            returnKeyType: 'next',
            blurOnSubmit: false,
            onSubmitEditing: function() {
              const {repeatPassword} = this.refs.input.refs;
              repeatPassword.refs.input.focus();
            },
            placeholder: 'Sua senha',
            label: 'Senha',
            maxLength: 20,
            minLength: 4,
            placeholderTextColor: theme.textSecondary,
            secureTextEntry: true
          },
          repeatPassword: {
            returnKeyType: 'done',
            blurOnSubmit: true,
            onSubmitEditing: function() {
              this.props.onSubmit();
            },
            placeholder: 'Repita a senha',
            maxLength: 20,
            minLength: 4,
            placeholderTextColor: theme.textSecondary,
            label: 'Repita sua senha',
            secureTextEntry: true
          }
        }
      }
    }
  };
};
