import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Input } from 'react-native-elements';
import { NavigationScreenProp } from 'react-navigation';

import { IVSPScreenProps } from '../../types/props/vsp-screen';
import { HORIZONTAL_UNIT, VSP_EDGE_PADDING } from '../../types/lib/size';

import VSPHeader from '../../components/vsp-header';
import { VSPHeaderBack } from '../../components/vsp-header-button';
import VSPContainer from '../../components/vsp-container';

import CountrySelector from './country-selector';

interface INewTravelLogScreenProps {}

/**
 * NewTravelLogScreen
 */
export default class NewTravelLogScreen extends React.Component<
	IVSPScreenProps<INewTravelLogScreenProps>
> {
	public static navigationOptions = ({
		navigation,
	}: {
		navigation: NavigationScreenProp<any>;
	}) => {
		return {
			header: (
				<VSPHeader
					headerTitle='새로운 로그'
					headerLeft={VSPHeaderBack(navigation)}
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
				marginBottom: HORIZONTAL_UNIT(6),
			},
		});

		return (
			<VSPContainer>
				<ScrollView contentContainerStyle={style.container}>
					<View style={style.categoryView}>
						<Input placeholder='제목' />
					</View>
					<View style={style.categoryView}>
						<CountrySelector />
					</View>
				</ScrollView>
			</VSPContainer>
		);
	}
}
