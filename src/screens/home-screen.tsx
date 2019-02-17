import React from 'react';
import { NavigationScreenProp } from 'react-navigation';

import { IVSPScreenProps } from '../types/props/vsp-screen';

import VSPContainer from '../components/vsp-container';
import VSPHeader from '../components/vsp-header';
import VSPTitleLogo from '../components/vsp-titlelogo';
import { VSPHeaderMenu } from '../components/vsp-header-button';

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
					headerTitle={
						<VSPTitleLogo fillDirection='Y' rescaleRatio='70%' />
					}
					headerLeft={VSPHeaderMenu(navigation)}
				/>
			),
		};
	};

	public render() {
		return (
			<VSPContainer>
				<ProfileScreen />
			</VSPContainer>
		);
	}
}
