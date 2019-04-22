import React from 'react';

import { IVSPScreenProps } from '../types/props/vsp-screen';

import VSPContainer from '../components/vsp-container';

import VSPHeader from '../components/vsp-header';

import ProfileScreen from './profile-screen';
import VSPHeaderButton from '../components/vsp-header-button';

export default class HomeScreen extends React.Component<IVSPScreenProps> {
	public static navigationOptions = {
		header: (
			<VSPHeader headerRight={<VSPHeaderButton iconName='inbox' />} />
		),
	};

	public render() {
		return (
			<VSPContainer wrapSafeAreaView>
				<ProfileScreen navigation={this.props.navigation} />
			</VSPContainer>
		);
	}
}
