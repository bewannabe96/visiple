import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SearchBar, Button } from 'react-native-elements';

import { HORIZONTAL_UNIT, VSP_EDGE_PADDING } from '../../types/lib/size';
import { THEME_COLORS } from '../../types/lib/theme';

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
				headerRight={
					<Button
						title='닫기'
						type='clear'
						titleStyle={{ color: THEME_COLORS.black }}
					/>
				}
			>
				<SearchBar
					placeholder='이메일을 입력하세요'
					containerStyle={{
						marginHorizontal: VSP_EDGE_PADDING,
						marginBottom: HORIZONTAL_UNIT(3),
					}}
				/>
				<View style={style.resultView} />
			</VSPModal>
		);
	}
}
