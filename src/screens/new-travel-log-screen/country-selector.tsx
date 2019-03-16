import React from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import {
	HORIZONTAL_UNIT,
	THEME_FONTSIZE,
	THEME_MINOR_FONTSIZE,
} from '../../types/lib/size';
import { THEME_COLORS } from '../../types/lib/theme';

import {
	countriesByName,
	Country,
	allCountries,
	countryByCode,
	countriesByCodes,
} from '../../data/country';

import VSPText from '../../components/vsp-text';
import VSPTextInput from '../../components/vsp-textinput';
import VSPTextButton from '../../components/vsp-text-button';
import VSPCheckbox from '../../components/vsp-checkbox';

type SelectType = 'domestic' | 'overseas';

interface ICountrySelectorProps {}

export default class CountrySelector extends React.Component<
	ICountrySelectorProps
> {
	public state = {
		selectType: 'domestic',
		countryCodes: ['USA', 'KOR'],
		matchingCountries: allCountries,
	};

	private _renderTypeButton(sType: SelectType, displayName: string) {
		return (
			<TouchableOpacity
				style={{
					flex: 1,
					padding: HORIZONTAL_UNIT(3),
					alignItems: 'center',
					backgroundColor:
						this.state.selectType === sType
							? THEME_COLORS.oceanBlue
							: THEME_COLORS.none,
					borderColor: THEME_COLORS.oceanBlue,
					borderWidth: this.state.selectType !== sType ? 1 : 0,
				}}
				onPress={() => {
					this.setState({ ...this.state, selectType: sType });
				}}
				disabled={this.state.selectType === sType}
			>
				<VSPText
					theme={
						this.state.selectType === sType ? 'white' : 'oceanBlue'
					}
				>
					{displayName}
				</VSPText>
			</TouchableOpacity>
		);
	}

	private _renderCountry(ctnry: Country, index?: number) {
		return (
			<View
				key={index}
				style={{
					flexDirection: 'row',
					marginVertical: HORIZONTAL_UNIT(2),
					marginHorizontal: HORIZONTAL_UNIT(),
					paddingVertical: HORIZONTAL_UNIT(),
					paddingHorizontal: HORIZONTAL_UNIT(2),
					borderColor: THEME_COLORS.oceanBlue,
					borderWidth: 1,
					borderRadius: THEME_FONTSIZE,
				}}
			>
				<VSPText theme='oceanBlue'>{ctnry.translations.ko}</VSPText>
				<VSPTextButton
					icon='cancel'
					fontSize={THEME_MINOR_FONTSIZE}
					marginLeft={HORIZONTAL_UNIT()}
				/>
			</View>
		);
	}

	private _renderCountries() {
		if (this.state.countryCodes.length === 1) {
			let cntry = countryByCode(this.state.countryCodes[0]);
			if (cntry !== null) {
				return this._renderCountry(cntry);
			}
		} else {
			let cntrys = countriesByCodes(this.state.countryCodes);
			return cntrys.map((cntry: Country, index: number) => {
				return this._renderCountry(cntry, index);
			});
		}
	}

	public render() {
		const style = StyleSheet.create({
			typeSelectView: {
				flexDirection: 'row',
			},

			countriesViewContainer: {
				borderWidth: 1,
				borderColor: THEME_COLORS.greyWhite,
			},

			countriesView: {
				flexDirection: 'row',
			},

			resultView: {
				height: HORIZONTAL_UNIT(40),
				borderWidth: 1,
				borderColor: THEME_COLORS.greyWhite,
			},

			noResultView: {
				alignItems: 'center',
				padding: HORIZONTAL_UNIT(2),
			},

			resultItemView: {
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				padding: HORIZONTAL_UNIT(2),
				paddingHorizontal: HORIZONTAL_UNIT(3),
			},
		});

		return (
			<View>
				<View style={style.typeSelectView}>
					{this._renderTypeButton('domestic', '국내여행')}
					{this._renderTypeButton('overseas', '해외여행')}
				</View>
				<ScrollView
					style={style.countriesViewContainer}
					contentContainerStyle={style.countriesView}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
				>
					{this._renderCountries()}
				</ScrollView>
				<VSPTextInput
					placeholder='국가를 검색하세요.'
					disableBorderRadius={true}
					onChangeText={(text: string) => {
						this.setState({
							matchingCountries: countriesByName(text),
						});
					}}
				/>
				<ScrollView style={style.resultView}>
					{this.state.matchingCountries.length === 0 && (
						<View style={style.noResultView}>
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
							<VSPCheckbox />
						</TouchableOpacity>
					))}
				</ScrollView>
			</View>
		);
	}
}
