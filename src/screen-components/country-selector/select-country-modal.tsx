import React from 'react';
import { FlatList, View } from 'react-native';
import { Button, SearchBar, Text } from 'react-native-elements';

import { THEME_COLORS } from '../../types/lib/theme';
import { HORIZONTAL_UNIT, VSP_EDGE_PADDING } from '../../types/lib/size';
import { countryCodesBySearchword, Country } from '../../types/lib/country';

import VSPModal from '../../components/vsp-modal';
import VSPCheckbox from '../../components/vsp-checkbox';

interface ISelectCountryModalProps {
	/**
	 * The modal is visible if true
	 */
	isVisible: boolean;

	/**
	 * Close action callback
	 */
	closeAction: () => any;
}

/**
 * SelectPeriodModal
 *
 * @property
 * - ```isVisible```(required): The modal is visible if true
 * - ```closeAction```(required): Close action callback
 */
export default class SelectCountryModal extends React.Component<
	ISelectCountryModalProps
> {
	public state = {
		searchResults: null,
	};

	private _onSearchWordChange = (text: string) => {
		this.setState({
			...this.state,
			searchResults: text === '' ? null : countryCodesBySearchword(text),
		});
	};

	private _renderSearchResult() {
		if (this.state.searchResults !== null) {
			return (
				<FlatList
					data={this.state.searchResults}
					keyExtractor={item => item.alpha3Code}
					ListEmptyComponent={
						<View
							style={{
								alignItems: 'center',
								padding: HORIZONTAL_UNIT(2),
							}}
						>
							<Text h3>{'검색결과가 없습니다.'}</Text>
						</View>
					}
					renderItem={({ item }: { item: Country }) => (
						<VSPCheckbox
							marginVertical={HORIZONTAL_UNIT(2)}
							marginHorizontal={HORIZONTAL_UNIT()}
							buttonOnRight
						>
							<Text h3>{item.translations.ko}</Text>
						</VSPCheckbox>
					)}
					contentContainerStyle={{
						paddingHorizontal: VSP_EDGE_PADDING,
					}}
				/>
			);
		}
	}

	public render() {
		return (
			<VSPModal
				isVisible={this.props.isVisible}
				closeAction={this.props.closeAction}
				heightMode={'full'}
				titleText={'국가 검색'}
				headerRight={
					<Button
						title='완료'
						type='clear'
						titleStyle={{ color: THEME_COLORS.black }}
						onPress={this.props.closeAction}
					/>
				}
			>
				<SearchBar
					placeholder='국가를 검색하세요.'
					onChangeText={this._onSearchWordChange}
					containerStyle={{
						marginHorizontal: VSP_EDGE_PADDING,
						marginBottom: HORIZONTAL_UNIT(),
					}}
				/>
				{this._renderSearchResult()}
			</VSPModal>
		);
	}
}
