import React from 'react';
import { View } from 'react-native';
import { TabProps } from 'react-native-scrollable-tab-view';

interface IDayLogProps {}

/**
 * DayLog
 *
 * @property
 */
export default class DayLog extends React.Component<TabProps<IDayLogProps>> {
	public render() {
		return (
			<View
				style={{
					height: 2000,
					alignItems: 'center',
				}}
			/>
		);
	}
}
