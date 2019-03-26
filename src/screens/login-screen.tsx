import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';

import { HORIZONTAL_UNIT, THEME_HEADER_FONTSIZE } from '../types/lib/size';
import { IVSPScreenProps } from '../types/props/vsp-screen';
import { THEME_COLORS } from '../types/lib/theme';

import VSPContainer from '../components/vsp-container';
import VSPTitleLogo from '../components/vsp-titlelogo';

export default class LoginScreen extends React.Component<IVSPScreenProps> {
	public render() {
		const style = StyleSheet.create({
			topView: {
				alignItems: 'center',
				paddingBottom: HORIZONTAL_UNIT(15),
			},
		});

		return (
			<VSPContainer wrapSafeAreaView justifyContent='flex-end'>
				<View style={style.topView}>
					<VSPTitleLogo fillDirection='X' rescaleRatio='90%' />
				</View>
				<Input
					leftIcon={{
						name: 'user',
						type: 'font-awesome',
						color: THEME_COLORS.grey,
					}}
					placeholder='이메일'
					textContentType='username'
					containerStyle={{ marginBottom: HORIZONTAL_UNIT(2) }}
				/>
				<Input
					leftIcon={{ name: 'lock', color: THEME_COLORS.grey }}
					placeholder='비밀번호'
					textContentType='password'
					containerStyle={{ marginBottom: HORIZONTAL_UNIT(2) }}
				/>
				<Button
					title='로그인'
					titleStyle={{ fontSize: THEME_HEADER_FONTSIZE }}
					containerStyle={{
						marginVertical: HORIZONTAL_UNIT(2),
					}}
					buttonStyle={{
						backgroundColor: THEME_COLORS.oceanBlue,
					}}
					onPress={() => this.props.navigation.navigate('App')}
				/>
				<Button
					title='회원가입'
					titleStyle={{ fontSize: THEME_HEADER_FONTSIZE }}
					containerStyle={{
						marginVertical: HORIZONTAL_UNIT(2),
					}}
					buttonStyle={{
						backgroundColor: THEME_COLORS.skyBlue,
					}}
					onPress={() =>
						this.props.navigation.navigate('RegisterScreen')
					}
				/>
				<Button
					title='비밀번호를 잊으셨나요?'
					type='clear'
					containerStyle={{
						marginVertical: HORIZONTAL_UNIT(2),
					}}
					onPress={() =>
						this.props.navigation.navigate('RegisterScreen')
					}
				/>
			</VSPContainer>
		);
	}
}
