import React from 'react';
import { View, StyleSheet } from 'react-native';

import { addShadowProperties } from '../types/lib/theme';
import { HORIZONTAL_UNIT } from '../types/lib/size';
import { IVSPScreenProps } from '../types/props/vsp-screen';

import VSPContainer from '../components/vsp-container';
import VSPTextInput from '../components/vsp-textinput';
import VSPTitleLogo from '../components/vsp-titlelogo';
import VSPColoredButton from '../components/vsp-colored-button';
import VSPTextButton from '../components/vsp-text-button';

export default class LoginScreen extends React.Component<IVSPScreenProps> {
	public render() {
		const style = StyleSheet.create({
			topView: {
				alignItems: 'center',
				paddingBottom: HORIZONTAL_UNIT(15),
				...addShadowProperties(),
			},
		});

		return (
			<VSPContainer
				justifyContent='flex-end'
				background='cottoncandy-blue'
				paddingX={HORIZONTAL_UNIT(9)}
				paddingY={HORIZONTAL_UNIT(6)}
			>
				<View style={style.topView}>
					<VSPTitleLogo fillDirection='X' rescaleRatio='90%' />
				</View>
				<VSPTextInput
					frontIcon='user'
					placeholder='이메일'
					textContentType='username'
					marginBottom={HORIZONTAL_UNIT(2)}
				/>
				<VSPTextInput
					frontIcon='padlock'
					placeholder='비밀번호'
					textContentType='password'
					marginY={HORIZONTAL_UNIT(2)}
				/>
				<VSPColoredButton
					text='로그인'
					fontSize={HORIZONTAL_UNIT(4)}
					marginY={HORIZONTAL_UNIT(2)}
					onPress={() => this.props.navigation.navigate('App')}
				/>
				<VSPColoredButton
					text='회원가입'
					fontSize={HORIZONTAL_UNIT(4)}
					theme='skyBlue'
					marginY={HORIZONTAL_UNIT(2)}
					onPress={() =>
						this.props.navigation.navigate('RegisterScreen')
					}
				/>
				<VSPTextButton
					text='비밀번호를 잊으셨나요?'
					marginY={HORIZONTAL_UNIT(2)}
				/>
			</VSPContainer>
		);
	}
}
