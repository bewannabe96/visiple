import React from 'react';
import { View } from 'react-native';
import { TabProps } from 'react-native-scrollable-tab-view';
import { Text } from 'react-native-elements';

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
			>
				<Text h3>{this.props.tabLabel}</Text>
			</View>
		);
	}
}
