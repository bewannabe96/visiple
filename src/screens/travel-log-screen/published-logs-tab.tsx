import React from 'react';
import {
	View,
	ScrollView,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
} from 'react-native';
import { TabProps } from 'react-native-scrollable-tab-view';

import { TravelLog } from '../../types/data/travel-log';
import { THEME_HEADER_FONTSIZE, HORIZONTAL_UNIT } from '../../types/lib/size';
import { THEME_COLORS, addShadowProperties } from '../../types/lib/theme';

import VSPText from '../../components/vsp-text';
import VSPImage from '../../components/vsp-image';

interface IPublishedLogsTabProps {
	/**
	 * Travel logs
	 */
	travelLogs: TravelLog[];
}

/**
 * PublishedLogsTab
 *
 * @property
 * - ```travelLogs```(required): Travel logs
 */
export default class PublishedLogsTab extends React.Component<
	TabProps<IPublishedLogsTabProps>
> {
	private _renderItems() {
		const style = StyleSheet.create({
			container: {
				padding: HORIZONTAL_UNIT(3),
				alignItems: 'stretch',
				...addShadowProperties(),
			},

			imageView: {
				height: Dimensions.get('window').width * 0.6,
			},

			titleView: {
				padding: HORIZONTAL_UNIT(2),
				backgroundColor: THEME_COLORS.white,
			},
		});

		return this.props.travelLogs.map((travelLog: TravelLog) => (
			<TouchableOpacity
				key={travelLog.id}
				style={style.container}
				activeOpacity={0.6}
			>
				<View style={style.imageView}>
					<VSPImage
						source={require('../../dev-sample-image/landscape_1.jpeg')}
					/>
				</View>
				<View style={style.titleView}>
					<VSPText fontSize={THEME_HEADER_FONTSIZE}>
						{travelLog.title}
					</VSPText>
				</View>
			</TouchableOpacity>
		));
	}

	public render() {
		return <ScrollView>{this._renderItems()}</ScrollView>;
	}
}
