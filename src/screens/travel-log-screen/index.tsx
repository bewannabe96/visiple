import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { IVSPScreenProps } from '../../types/props/vsp-screen';
import { Ticket } from '../../types/data/ticket';

import VSPHeader from '../../components/vsp-header';
import VSPContainer from '../../components/vsp-container';
import VSPText from '../../components/vsp-text';

import { VSPHeaderMenu } from '../../components/vsp-header-button';

interface ITravelLogScreenProps {
	ticket: Ticket;
}

/**
 * TravelLogScreen
 */
export default class TravelLogScreen extends React.Component<
	IVSPScreenProps<ITravelLogScreenProps>
> {
	public static navigationOptions = ({
		navigation,
	}: {
		navigation: NavigationScreenProp<any>;
	}) => {
		return {
			header: <VSPHeader headerLeft={VSPHeaderMenu(navigation)} />,
		};
	};

	public render() {
		const style = StyleSheet.create({});

		return (
			<VSPContainer>
				<VSPText>Test</VSPText>
			</VSPContainer>
		);
	}
}
