import { NavigationScreenProp } from 'react-navigation';

export type IVSPScreenProps<T = {}> = T & {
	navigation: NavigationScreenProp<any>;
};
