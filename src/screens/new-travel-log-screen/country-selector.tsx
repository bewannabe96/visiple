import React from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import {
	HORIZONTAL_UNIT,
	THEME_FONTSIZE,
	THEME_MINOR_FONTSIZE,
} from '../../types/lib/size';
import { THEME_COLORS } from '../../types/lib/theme';

import {
	Country,
	allCountries,
	countryByCode,
	countriesByCodes,
	countryCodesByName,
} from '../../data/country';
import { CountryCode } from '../../types/data/country';

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
		serachWord: '',
	};

	private _searchResultItems: {
		[key: string]: Element;
	} = allCountries.reduce(
		(accum: { [key: string]: Element }, cntry: Country) => {
			accum[cntry.alpha3Code] = (
				<TouchableOpacity
					key={cntry.alpha3Code}
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						padding: HORIZONTAL_UNIT(2),
						paddingHorizontal: HORIZONTAL_UNIT(3),
					}}
				>
					<VSPText>{cntry.translations.ko}</VSPText>
					<VSPCheckbox />
				</TouchableOpacity>
			);
			return accum;
		},
		{},
	);

	private _renderSearchResult() {
		if (this.state.serachWord !== '') {
			let resultCodes = countryCodesByName(this.state.serachWord);
			return (
				<ScrollView
					style={{
						height: HORIZONTAL_UNIT(30),
						borderWidth: 1,
						borderColor: THEME_COLORS.greyWhite,
					}}
				>
					{resultCodes.length === 0 && (
						<View
							style={{
								alignItems: 'center',
								padding: HORIZONTAL_UNIT(2),
							}}
						>
							<VSPText>{'검색결과가 없습니다.'}</VSPText>
						</View>
					)}
					{resultCodes.map(
						(code: CountryCode) => this._searchResultItems[code],
					)}
				</ScrollView>
			);
		}
	}

	private _renderTypeButton(sType: SelectType, displayName: string) {
		return (
			<TouchableOpacity
				style={{
					flex: 1,
					margin: 0,
					padding: HORIZONTAL_UNIT(3),
					alignItems: 'center',
					backgroundColor:
						this.state.selectType === sType
							? THEME_COLORS.oceanBlue
							: THEME_COLORS.none,
					borderColor: THEME_COLORS.oceanBlue,
					borderWidth: 1,
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
					borderRadius: THEME_FONTSIZE * 2,
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

	private _onSearchWordChange = (text: string) => {
		this.setState({
			...this.state,
			serachWord: text,
		});
	};

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
		});

		return (
			<View>
				<View style={style.typeSelectView}>
					{this._renderTypeButton('domestic', '국내여행')}
					{this._renderTypeButton('overseas', '해외여행')}
				</View>
				{this.state.selectType === 'overseas' && (
					<View>
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
							rearIcon='search'
							onChangeText={this._onSearchWordChange}
						/>
						{this._renderSearchResult()}
					</View>
				)}
			</View>
		);
	}
}
