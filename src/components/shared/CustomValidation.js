import {t} from '~/components/shared';
import {validateEmail} from '~/utils';

export const Email = t.refinement(t.String, email => validateEmail(email));
