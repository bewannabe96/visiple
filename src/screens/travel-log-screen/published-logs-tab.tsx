import React from 'react';
import {
	View,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	Image,
} from 'react-native';
import { withNavigation, FlatList } from 'react-navigation';
import { TabProps } from 'react-native-scrollable-tab-view';

import { TravelLog } from '../../types/data/travel-log';
import { THEME_HEADER_FONTSIZE, HORIZONTAL_UNIT } from '../../types/lib/size';
import { THEME_COLORS } from '../../types/lib/theme';
import { IVSPScreenProps } from '../../types/props/vsp-screen';

import VSPText from '../../components/vsp-text';

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
class PublishedLogsTab extends React.Component<
	IVSPScreenProps<TabProps<IPublishedLogsTabProps>>
> {
	public render() {
		const style = StyleSheet.create({
			container: {
				marginVertical: HORIZONTAL_UNIT(2),
				marginHorizontal: HORIZONTAL_UNIT(3),
				backgroundColor: THEME_COLORS.black,
				borderRadius: HORIZONTAL_UNIT(2),
			},

			imageView: {
				opacity: 0.7,
				width: '100%',
				height: Dimensions.get('window').width * 0.6,
				borderRadius: HORIZONTAL_UNIT(2),
			},

			titleView: {
				position: 'absolute',
				bottom: 0,
				width: '100%',
				padding: HORIZONTAL_UNIT(3),
			},
		});

		return (
			<FlatList
				data={this.props.travelLogs}
				keyExtractor={item => item.id.toString()}
				renderItem={({ item }) => (
					<TouchableOpacity
						key={item.id}
						style={style.container}
						activeOpacity={0.6}
						onPress={() => {
							this.props.navigation.navigate(
								'NewTravelLogScreen',
							);
						}}
					>
						<Image
							style={style.imageView}
							source={require('../../dev-sample-image/landscape_1.jpeg')}
						/>
						<View style={style.titleView}>
							<VSPText
								fontSize={THEME_HEADER_FONTSIZE}
								color={THEME_COLORS.white}
							>
								{item.title}
							</VSPText>
						</View>
					</TouchableOpacity>
				)}
			/>
		);
	}
}

export default withNavigation(PublishedLogsTab);
