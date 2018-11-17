import {Navigation} from 'react-native-navigation';

//local
import {registerdScreens} from './registerdScreens';
import {Provider} from './Provider';
import {configureStore} from '~/store/configureStore';
import {navigatorStyle} from '~/config';
import {onAppResume, fetchLogger} from '~/utils';

export class AppSrc {
    constructor() {
        this.store = configureStore(this.startApp);
        // this.store = store;
        registerdScreens(this.store, Provider);
        onAppResume(() => {
            this.handleResume();
        });
        // this.startApp();
        // fetchLogger();
    }
    async handleResume() {
        const {user} = this.store.getState();
        console.log(user);
    }

    startApp() {
        Navigation.startSingleScreenApp({
            screen: {
                screen: 'MapsSearch',
                navigatorStyle: navigatorStyle
            }
        });
    }
}
