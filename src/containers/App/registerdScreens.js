import {Navigation} from 'react-native-navigation';

import {MapsSearch} from '~/containers/MapsSearch';
import {Filter} from '~/containers/Filter';
import {Register} from '~/containers/Register';
import {Information} from '~/containers/Information';
import {Login} from '~/containers/Login';
import {Doctor} from '~/containers/Doctor';
import {Menu} from '~/containers/Menu';
import {History} from '~/containers/History';
import {NotificationModal} from '~/components/shared';
import {HistoryDetails} from '~/containers/HistoryDetails';
import {withNavigatorContext} from '~/enhancers';

export const registeredScreens = [];
export const registerdScreens = (store, Provider) => {
  registerComponent('MapsSearch', MapsSearch);
  registerComponent('Filter', Filter);
  registerComponent('Filter', Filter);
  registerComponent('Register', Register);
  registerComponent('Information', Information);
  registerComponent('Login', Login);
  registerComponent('NotificationModal', NotificationModal);
  registerComponent('Menu', Menu);
  registerComponent('Doctor', Doctor);
  registerComponent('History', History);
  registerComponent('HistoryDetails', HistoryDetails);

  function registerComponent(name, screen) {
    Navigation.registerComponent(
      name,
      () => withNavigatorContext(screen),
      store,
      Provider
    );

    registeredScreens.push(name);
  }
};
