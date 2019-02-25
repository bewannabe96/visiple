import React from 'react';
import { StyleSheet, View } from 'react-native';

import { HORIZONTAL_UNIT } from '../../types/lib/size';
import { THEME_COLORS } from '../../types/lib/theme';

import VSPTextInput from '../../components/vsp-textinput';
import VSPModal from '../../components/vsp-modal';

/**
 * AddFriendModal
 */
export default class AddFriendModal extends React.Component {
	public render() {
		const style = StyleSheet.create({
			container: {
				height: '50%',
				width: '90%',
				alignSelf: 'center',
			},

			bodyView: {
				flex: 1,
				padding: HORIZONTAL_UNIT(4),
				borderBottomLeftRadius: HORIZONTAL_UNIT(2),
				borderBottomRightRadius: HORIZONTAL_UNIT(2),
				backgroundColor: THEME_COLORS.white,
			},

			resultView: {
				flex: 1,
			},
		});

		return (
			<VSPModal
				isVisible={false}
				titleText='친구 추가'
				closeAction={() => {}}
			>
				<View style={style.container}>
					<View style={style.bodyView}>
						<VSPTextInput
							placeholder='이메일을 입력하세요'
							rearIcon='search'
							textContentType='emailAddress'
						/>
						<View style={style.resultView} />
					</View>
				</View>
			</VSPModal>
		);
	}
}
