import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { NavigationScreenProp } from 'react-navigation';

import {
	VSP_EDGE_PADDING,
	HORIZONTAL_UNIT,
	THEME_HEADER_FONTSIZE,
} from '../../types/lib/size';
import { IVSPScreenProps } from '../../types/props/vsp-screen';

import VSPHeader from '../../components/vsp-header';
import VSPContainer from '../../components/vsp-container';
import VSPText from '../../components/vsp-text';
import { VSPHeaderBack } from '../../components/vsp-header-button';

import TicketColorPickerContainer from '../../containers/new-ticket-screen/ticket-color-picker';
import PeriodSelectorContainer from '../../containers/new-ticket-screen/period-selector';
import FriendsSelectorContainer from '../../containers/new-ticket-screen/friends-selector';

interface INewTicketScreenProps {
	/**
	 * Theme color of the ticket
	 */
	themeColor: string;
}

/**
 * NewTicketScreen
 *
 * @property
 * - ```themeColor```(required): Theme color of the ticket
 */
export default class NewTicketScreen extends React.Component<
	IVSPScreenProps<INewTicketScreenProps>
> {
	public static navigationOptions = ({
		navigation,
	}: {
		navigation: NavigationScreenProp<any>;
	}) => {
		return {
			header: (
				<VSPHeader
					headerTitle='새로운 티켓'
					headerLeft={<VSPHeaderBack navigation={navigation} />}
				/>
			),
		};
	};

	public render() {
		const style = StyleSheet.create({
			container: {
				flex: 1,
				paddingHorizontal: VSP_EDGE_PADDING,
			},

			categoryView: {
				marginTop: HORIZONTAL_UNIT(6),
			},

			titleView: {
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				marginBottom: HORIZONTAL_UNIT(),
			},

			titleText: {
				fontSize: THEME_HEADER_FONTSIZE,
				marginBottom: HORIZONTAL_UNIT(),
			},
		});

		return (
			<VSPContainer wrapSafeAreaView>
				<View style={style.container}>
					<Input placeholder='제목' />
					<View style={style.categoryView}>
						<VSPText style={style.titleText}>기간</VSPText>
						<PeriodSelectorContainer />
					</View>
					<View style={style.categoryView}>
						<VSPText style={style.titleText}>테마 색상</VSPText>
						<TicketColorPickerContainer />
					</View>
					<View style={style.categoryView}>
						<View style={style.titleView}>
							<VSPText style={style.titleText}>
								함께하는 친구
							</VSPText>
						</View>
						<FriendsSelectorContainer />
					</View>
				</View>
				<Button
					title='완료'
					buttonStyle={{
						borderRadius: 0,
						backgroundColor: this.props.themeColor,
					}}
					titleStyle={{ fontSize: THEME_HEADER_FONTSIZE }}
				/>
			</VSPContainer>
		);
	}
}
