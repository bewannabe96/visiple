import React from 'react';
import { NavigationScreenProp } from 'react-navigation';

import { VSPScreenProps } from '../types/props/vsp-screen';

import VSPContainer from '../components/vsp-container';
import VSPHeader, { VSPHeaderMenu } from '../components/vsp-header';
import VSPTitleLogo from '../components/vsp-titlelogo';
import VSPProfileScreen from './vsp-profile-screen';

export default class VSPHomeScreen extends React.Component<VSPScreenProps> {
	static navigationOptions = ({
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

	render() {
		return (
			<VSPContainer>
				<VSPProfileScreen />
			</VSPContainer>
		);
	}
}
