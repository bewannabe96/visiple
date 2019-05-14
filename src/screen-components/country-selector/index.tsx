import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon, Text } from 'react-native-elements';

import { HORIZONTAL_UNIT, THEME_FONTSIZE } from '../../types/lib/size';
import { THEME_COLORS } from '../../types/lib/theme';

import {
	Country,
	countryByCode,
	countriesByCodes,
} from '../../types/lib/country';

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
				style={[
					style.renderTypeButton,
					{
						backgroundColor:
							this.state.selectType === sType
								? THEME_COLORS.oceanBlue
								: THEME_COLORS.none,
					},
				]}
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

	private _renderCountries(countries: Country[]) {
		return countries.map((country: Country) => (
			<View key={country.alpha3Code} style={style.countryItemContainer}>
				<View style={style.countryItem}>
					<Text h3 style={{ color: THEME_COLORS.oceanBlue }}>
						{country.translations.ko}
					</Text>
				</View>
				<Icon
					name='cancel'
					type='vspicon'
					color={THEME_COLORS.oceanBlue}
					containerStyle={{
						marginLeft: HORIZONTAL_UNIT(),
					}}
					onPress={() => {}}
				/>
			</View>
		));
	}

	public render() {
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
						{this._renderCountries(selectedCountries)}
						<TouchableOpacity
							style={style.addButton}
							onPress={this._openModal}
						>
							<Icon
								name='plus'
								type='vspicon'
								color={THEME_COLORS.white}
								containerStyle={{
									marginRight: HORIZONTAL_UNIT(2),
								}}
							/>
							<Text h3 style={{ color: THEME_COLORS.white }}>
								추가
							</Text>
						</TouchableOpacity>
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

const style = StyleSheet.create({
	typeSelectView: {
		flexDirection: 'row',
	},

	countriesViewContainer: {
		alignItems: 'stretch',
		borderWidth: 1,
		borderColor: THEME_COLORS.greyWhite,
		paddingVertical: HORIZONTAL_UNIT(1.2),
		paddingHorizontal: HORIZONTAL_UNIT(2.5),
	},

	renderTypeButton: {
		flex: 1,
		margin: 0,
		padding: HORIZONTAL_UNIT(3),
		alignItems: 'center',
		borderColor: THEME_COLORS.oceanBlue,
		borderWidth: 1,
	},

	countryItemContainer: {
		flexDirection: 'row',
		marginVertical: HORIZONTAL_UNIT(1.2),
		alignItems: 'center',
	},

	countryItem: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: HORIZONTAL_UNIT(1.5),
		paddingHorizontal: HORIZONTAL_UNIT(4),
		marginRight: HORIZONTAL_UNIT(),
		borderColor: THEME_COLORS.oceanBlue,
		borderWidth: 1,
		borderRadius: THEME_FONTSIZE * 2,
	},

	addButton: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		marginVertical: HORIZONTAL_UNIT(1.2),
		paddingVertical: HORIZONTAL_UNIT(1.5),
		paddingHorizontal: HORIZONTAL_UNIT(4),
		backgroundColor: THEME_COLORS.oceanBlue,
		borderRadius: THEME_FONTSIZE * 2,
	},
});
