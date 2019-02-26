import React from 'react';
import { StyleSheet, View } from 'react-native';

import { HORIZONTAL_UNIT } from '../../types/lib/size';

import VSPTextInput from '../../components/vsp-textinput';
import VSPModal from '../../components/vsp-modal';

/**
 * AddFriendModal
 */
export default class AddFriendModal extends React.Component {
	public render() {
		const style = StyleSheet.create({
			resultView: {
				flex: 1,
				marginVertical: HORIZONTAL_UNIT(4),
			},
		});

		return (
			<VSPModal
				isVisible={false}
				heightMode='minimum'
				titleText='친구 추가'
				closeAction={() => {}}
				padding={HORIZONTAL_UNIT(4)}
				rightButtonText={'취소'}
			>
				<VSPTextInput
					placeholder='이메일을 입력하세요'
					rearIcon='search'
					textContentType='emailAddress'
				/>
				<View style={style.resultView} />
			</VSPModal>
		);
	}
}
