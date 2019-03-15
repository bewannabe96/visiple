import React from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import { HORIZONTAL_UNIT } from '../../types/lib/size';
import { THEME_COLORS } from '../../types/lib/theme';

import { countriesByName, Country, allCountries } from '../../data/country';

import VSPText from '../../components/vsp-text';
import VSPTextInput from '../../components/vsp-textinput';

interface ICountrySelectorProps {}

export default class CountrySelector extends React.Component<
	ICountrySelectorProps
> {
	public state = {
		matchingCountries: allCountries,
	};

	public render() {
		const style = StyleSheet.create({
			resultView: {
				height: HORIZONTAL_UNIT(40),
				borderWidth: 1,
				borderColor: THEME_COLORS.greyWhite,
			},

			resultItemView: {
				flexDirection: 'row',
				padding: HORIZONTAL_UNIT(2),
			},
		});

		return (
			<View>
				<VSPTextInput
					placeholder='국가명'
					disableBorderRadius={true}
					onChangeText={(text: string) => {
						this.setState({
							matchingCountries: countriesByName(text),
						});
					}}
				/>
				<ScrollView style={style.resultView}>
					{this.state.matchingCountries.length === 0 && (
						<View
							style={{
								alignItems: 'center',
								padding: HORIZONTAL_UNIT(2),
							}}
						>
							<VSPText>{'검색결과가 없습니다.'}</VSPText>
						</View>
					)}
					{this.state.matchingCountries.map((cntry: Country) => (
						<TouchableOpacity
							key={cntry.alpha3Code}
							style={style.resultItemView}
						>
							<VSPText key={cntry.alpha3Code}>
								{cntry.translations.ko}
							</VSPText>
						</TouchableOpacity>
					))}
				</ScrollView>
			</View>
		);
	}
}
