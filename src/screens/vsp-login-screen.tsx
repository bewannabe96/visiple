import React from 'react';
import { View, StyleProp, StyleSheet } from 'react-native';

import { addShadowProperties } from '../types/config/theme';
import { HORIZONTAL_UNIT, VERTICAL_UNIT } from '../types/config/size';
import { VSPScreenProps } from '../types/props/vsp-screen';

import VSPContainer from '../components/vsp-container';
import VSPTextInput from '../components/vsp-textinput';
import VSPTitleLogo from '../components/vsp-titlelogo';
import VSPColoredButton from '../components/vsp-colored-button';
import VSPTextButton from '../components/vsp-text-button';

export default class VSPLoginScreen extends React.Component<VSPScreenProps> {
	private _fixed_style: StyleProp<any>;

	constructor(props: VSPScreenProps) {
		super(props);

		this._fixed_style = StyleSheet.create({
			topView: {
				alignItems: 'center',
				paddingBottom: 15 * VERTICAL_UNIT,
				...addShadowProperties(),
			},
		});
	}

	render() {
		return (
			<VSPContainer
				justifyContent='flex-end'
				background='cottoncandy-blue'
				paddingX={9 * HORIZONTAL_UNIT}
				paddingY={6 * VERTICAL_UNIT}
			>
				<View style={this._fixed_style.topView}>
					<VSPTitleLogo fillDirection='X' rescaleRatio='90%' />
				</View>
				<VSPTextInput
					frontIcon='user'
					placeholder='이메일'
					textContentType='username'
					marginBottom={2 * VERTICAL_UNIT}
				/>
				<VSPTextInput
					frontIcon='padlock'
					placeholder='비밀번호'
					textContentType='password'
					marginY={2 * VERTICAL_UNIT}
				/>
				<VSPColoredButton
					text='로그인'
					fontSize={4 * VERTICAL_UNIT}
					marginY={2 * VERTICAL_UNIT}
					onPress={() => this.props.navigation.navigate('App')}
				/>
				<VSPColoredButton
					text='회원가입'
					fontSize={4 * VERTICAL_UNIT}
					theme='sky-blue'
					marginY={2 * VERTICAL_UNIT}
					onPress={() =>
						this.props.navigation.navigate('RegisterScreen')
					}
				/>
				<VSPTextButton
					text='비밀번호를 잊으셨나요?'
					marginY={VERTICAL_UNIT * 2}
				/>
			</VSPContainer>
		);
	}
}
