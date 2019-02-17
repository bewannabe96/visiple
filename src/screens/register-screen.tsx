import React from 'react';
import { View, StyleSheet } from 'react-native';

import { HORIZONTAL_UNIT } from '../types/lib/size';
import { IVSPScreenProps } from '../types/props/vsp-screen';
import { THEME_COLORS } from '../types/lib/theme';

import VSPContainer from '../components/vsp-container';
import VSPTitleLogo from '../components/vsp-titlelogo';
import VSPText from '../components/vsp-text';
import VSPTextInput from '../components/vsp-textinput';
import VSPCheckbox from '../components/vsp-checkbox';
import VSPTextButton from '../components/vsp-text-button';
import VSPColoredButton from '../components/vsp-colored-button';

export default class RegisterScreen extends React.Component<IVSPScreenProps> {
	public render() {
		const style = StyleSheet.create({
			headerView: {
				alignItems: 'center',
				height: HORIZONTAL_UNIT(14),
				marginBottom: HORIZONTAL_UNIT(2),
			},

			welcomeText: {
				alignSelf: 'center',
				fontWeight: 'bold',
				color: THEME_COLORS.skyBlue,
			},

			groupView: {
				marginVertical: HORIZONTAL_UNIT(4),
			},

			checkboxItem: {
				flexDirection: 'row',
				alignItems: 'center',
				marginTop: HORIZONTAL_UNIT(4),
			},

			checkboxIndentItem: {
				flexDirection: 'row',
				alignItems: 'center',
				marginTop: HORIZONTAL_UNIT(3),
				marginLeft: HORIZONTAL_UNIT(4),
			},
		});

		return (
			<VSPContainer
				background='cottoncandy-blue'
				justifyContent='space-between'
				paddingX={HORIZONTAL_UNIT(9)}
				paddingY={HORIZONTAL_UNIT(6)}
			>
				<View>
					<View style={style.headerView}>
						<VSPTitleLogo fillDirection='Y' />
					</View>
					<VSPText style={style.welcomeText}>
						Visiple 신규 가입을 환영합니다!
					</VSPText>
				</View>
				<View style={style.groupView}>
					<VSPText fontWeight='bold'>회원정보</VSPText>
					<VSPTextInput
						placeholder='이름(실명)'
						textContentType='name'
						marginTop={HORIZONTAL_UNIT(4)}
					/>
					<VSPTextInput
						placeholder='본인 이메일 주소 입력'
						textContentType='emailAddress'
						marginTop={HORIZONTAL_UNIT(4)}
					/>
					<VSPTextInput
						placeholder='비밀번호(알파벳 대소문자, 숫자 포함한 8-20 글자)'
						textContentType='password'
						marginTop={HORIZONTAL_UNIT(4)}
					/>
					<VSPTextInput
						placeholder='비밀번호 확인'
						textContentType='password'
						marginTop={HORIZONTAL_UNIT(4)}
					/>
				</View>
				<View style={style.groupView}>
					<VSPText fontWeight='bold'>이용약관</VSPText>
					<View style={style.checkboxItem}>
						<VSPCheckbox
							size={HORIZONTAL_UNIT(5)}
							theme='skyBlue'
						/>
						<VSPText>전체동의</VSPText>
					</View>
					<View style={style.checkboxIndentItem}>
						<VSPCheckbox
							size={HORIZONTAL_UNIT(5)}
							theme='skyBlue'
							marginLeft={HORIZONTAL_UNIT(5)}
						/>
						<VSPTextButton text='이용약관' theme='brown' />
						<VSPText>에 동의합니다.</VSPText>
					</View>
					<View style={style.checkboxIndentItem}>
						<VSPCheckbox
							size={HORIZONTAL_UNIT(5)}
							theme='skyBlue'
							marginLeft={HORIZONTAL_UNIT(5)}
						/>
						<VSPTextButton text='개인정보 취급방침' theme='brown' />
						<VSPText>에 동의합니다.</VSPText>
					</View>
				</View>
				<VSPColoredButton
					text='완료'
					fontSize={HORIZONTAL_UNIT(4)}
					marginTop={HORIZONTAL_UNIT(4)}
					onPress={() => {
						this.props.navigation.popToTop();
					}}
				/>
			</VSPContainer>
		);
	}
}
