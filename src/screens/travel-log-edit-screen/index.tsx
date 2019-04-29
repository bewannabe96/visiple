import {
	NavigationProp,
	createBottomTabNavigator,
	getActiveChildNavigationOptions,
} from 'react-navigation';

import _SummaryPage from './summary-page';
import _DayLogsPage from './day-logs-page';

const TravelLogEditScreen = createBottomTabNavigator(
	{
		SummaryPage: {
			screen: _SummaryPage,
		},
		DayLogsPage: {
			screen: _DayLogsPage,
		},
	},
	{
		initialRouteName: 'SummaryPage',
		navigationOptions: ({
			navigation,
		}: {
			navigation: NavigationProp<any>;
		}) => ({
			...getActiveChildNavigationOptions(navigation),
		}),
	},
);

export default TravelLogEditScreen;
