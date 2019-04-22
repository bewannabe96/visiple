import React from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';

import {
	HORIZONTAL_UNIT,
	THEME_FONTSIZE,
	THEME_MINOR_FONTSIZE,
} from '../../types/lib/size';
import { THEME_COLORS } from '../../types/lib/theme';
import { Country } from '../../types/data/country';

import { countryByCode, countriesByCodes } from '../../data/country';

import VSPText from '../../components/vsp-text';

import SelectCountryModal from './select-country-modal';

type SelectType = 'domestic' | 'overseas';

interface ICountrySelectorProps {}

export default class CountrySelector extends React.Component<
	ICountrySelectorProps
> {
	public state = {
		selectType: 'domestic',
		countryCodes: ['USA', 'KOR', 'TWN', 'HKG'],
		isModalVisible: false,
	};

	private _openModal = () => {
		this.setState({ ...this.state, isModalVisible: true });
	};

	private _closeModal = () => {
		this.setState({ ...this.state, isModalVisible: false });
	};

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
					color={
						this.state.selectType === sType
							? THEME_COLORS.white
							: THEME_COLORS.oceanBlue
					}
				>
					{displayName}
				</VSPText>
			</TouchableOpacity>
		);
	}

	private _renderCountry({ item }: { item: Country }) {
		return (
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					marginHorizontal: HORIZONTAL_UNIT(),
					paddingVertical: HORIZONTAL_UNIT(),
					paddingHorizontal: HORIZONTAL_UNIT(2),
					borderColor: THEME_COLORS.oceanBlue,
					borderWidth: 1,
					borderRadius: THEME_FONTSIZE * 2,
				}}
			>
				<VSPText color={THEME_COLORS.oceanBlue}>
					{item.translations.ko}
				</VSPText>
				<Icon
					name='cancel'
					type='vspicon'
					size={THEME_MINOR_FONTSIZE}
					color={THEME_COLORS.oceanBlue}
					containerStyle={{
						marginLeft: HORIZONTAL_UNIT(),
					}}
					onPress={() => {}}
				/>
			</View>
		);
	}

	public render() {
		const style = StyleSheet.create({
			typeSelectView: {
				flexDirection: 'row',
			},

			countriesViewContainer: {
				flexDirection: 'row',
				alignItems: 'center',
				borderWidth: 1,
				borderColor: THEME_COLORS.greyWhite,
			},

			countriesView: {
				alignItems: 'center',
				paddingHorizontal: HORIZONTAL_UNIT(),
			},
		});

		const selectedCountries =
			this.state.countryCodes.length === 1
				? [countryByCode(this.state.countryCodes[0])!]
				: countriesByCodes(this.state.countryCodes);

		return (
			<View>
				<View style={style.typeSelectView}>
					{this._renderTypeButton('domestic', '국내여행')}
					{this._renderTypeButton('overseas', '해외여행')}
				</View>
				{this.state.selectType === 'overseas' && (
					<View style={style.countriesViewContainer}>
						<FlatList
							data={selectedCountries}
							keyExtractor={item => item.alpha3Code}
							renderItem={this._renderCountry}
							contentContainerStyle={style.countriesView}
							horizontal
							showsHorizontalScrollIndicator={false}
						/>
						<Icon
							name='plus'
							type='vspicon'
							size={HORIZONTAL_UNIT(2.5)}
							color={THEME_COLORS.oceanBlue}
							reverse
							onPress={this._openModal}
						/>
					</View>
				)}
				<SelectCountryModal
					isVisible={this.state.isModalVisible}
					closeAction={this._closeModal}
				/>
			</View>
		);
	}
}
