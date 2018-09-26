// import t from 'tcomb-form-native/lib';
import t from 'tcomb-form-native';
import i18n from 'tcomb-form-native/lib/i18n/en';
import transform from 'tcomb-json-schema';
import struct from 'tcomb-form-native/lib/templates/bootstrap/struct';
import stylesheet from 'tcomb-form-native/lib/stylesheets/bootstrap';
import {forEach} from 'lodash';

// locals
import {Textbox} from './Textbox';
// import {stylesheet} from '~/config';
// import {Select} from './Select';
import {theme} from '~/config';

const templates = {
  textbox: Textbox,
  struct: struct,
  checkbox: () => {},
  datepicker: () => {},
  list: () => {}
};
console.log(stylesheet);

t.form.Form.stylesheet = stylesheet;
t.form.Form.templates = templates;
t.form.Form.i18n = i18n;
t.form.Form.stylesheet.textbox.normal.color = theme.text;
t.form.Form.stylesheet.textbox.error.color = theme.text;
t.form.Form.stylesheet.controlLabel.normal.color = theme.text;
t.form.Form.stylesheet.controlLabel.error.color = theme.danger;
t.form.Form.stylesheet.textbox.normal.borderColor = theme.textSecondary;
t.form.Form.stylesheet.textbox.normal.borderColor = theme.textSecondary;
t.form.Form.stylesheet.textbox.normal.borderRadius = theme.borderRadius;
t.form.Form.stylesheet.textbox.error.borderRadius = theme.borderRadius;

const TForm = t.form.Form;
let self;

class Form extends TForm {
  constructor(props) {
    super(props);
    self = this;
    forEach(props.options.fields, field => {
      forEach(field, (value, key) => {
        if (typeof value === 'function') {
          field[key] = () => {
            value.apply(self);
          };
        }
      });
    });
  }
}

// Transform formats
transform.registerFormat('email', x => /(.)+@(.)+/.test(x));

export {transform, Form, t};
