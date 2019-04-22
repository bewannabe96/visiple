import React from 'react';
import { NavigationScreenProp } from 'react-navigation';

import { IVSPScreenProps } from '../types/props/vsp-screen';

import VSPContainer from '../components/vsp-container';
import VSPHeader from '../components/vsp-header';
import VSPHeaderButton from '../components/vsp-header-button';

import ProfileScreen from './profile-screen';

export default class HomeScreen extends React.Component<IVSPScreenProps> {
	public static navigationOptions = ({
		navigation,
	}: {
		navigation: NavigationScreenProp<any>;
	}) => {
		return {
			header: (
				<VSPHeader
					headerRight={
						<VSPHeaderButton
							iconName='inbox'
							onPress={() => {
								navigation.navigate('EditableTravelLogsScreen');
							}}
						/>
					}
				/>
			),
		};
	};

	public render() {
		return (
			<VSPContainer wrapSafeAreaView>
				<ProfileScreen navigation={this.props.navigation} />
			</VSPContainer>
		);
	}
}
