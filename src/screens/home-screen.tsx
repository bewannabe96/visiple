import React from 'react';

import { IVSPScreenProps } from '../types/props/vsp-screen';

import VSPContainer from '../components/vsp-container';

import ProfileScreen from './profile-screen';

export default class HomeScreen extends React.Component<IVSPScreenProps> {
	public render() {
		return (
			<VSPContainer>
				<ProfileScreen />
			</VSPContainer>
		);
	}
}
