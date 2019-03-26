import { THEME_COLORS } from '../types/lib/theme';
import { THEME_FONTSIZE, HORIZONTAL_UNIT } from '../types/lib/size';

const RNElementsTheme = {
	Icon: {
		size: THEME_FONTSIZE,
		iconStyle: { margin: 0 },
	},

	// Image: {
	// 	resizeMode: 'cover',
	// 	style: {
	// 		height: '100%',
	// 		width: '100%',
	// 	},
	// },
	Button: {
		containerStyle: {
			padding: 0,
		},
		titleStyle: {
			fontSize: THEME_FONTSIZE,
		},
	},
	// Text: {
	// 	h1Style: {
	// 		fontSize: THEME_HEADER_FONTSIZE,
	// 	},
	// 	h2Style: {
	// 		fontSize: THEME_HEADER_FONTSIZE,
	// 	},
	// 	h3Style: {
	// 		fontSize: THEME_FONTSIZE,
	// 	},
	// 	h4Style: {
	// 		fontSize: THEME_MINOR_FONTSIZE,
	// 	},
	// },
	// Avatar: {
	// 	icon: { name: 'user', type: 'font-awesome' },
	// 	rounded: true,
	// },

	Input: {
		containerStyle: { paddingHorizontal: 0 },
		labelStyle: {
			fontSize: THEME_FONTSIZE,
			fontWeight: 'normal',
			color: THEME_COLORS.black,
		},
		inputContainerStyle: {
			borderBottomColor: THEME_COLORS.black,
		},
		leftIconContainerStyle: {
			marginRight: HORIZONTAL_UNIT(2),
			marginLeft: 0,
		},
		inputStyle: {
			fontSize: THEME_FONTSIZE,
		},
	},
	// SearchBar: {
	// 	containerStyle: {
	// 		padding: 0,
	// 		backgroundColor: 'transparent',
	// 		borderTopColor: 'transparent',
	// 		borderBottomColor: 'transparent',
	// 	},
	// 	inputContainerStyle: {
	// 		borderRadius: 0,
	// 		backgroundColor: THEME_COLORS.greyWhite,
	// 	},
	// 	inputStyle: {
	// 		fontSize: THEME_FONTSIZE,
	// 	},
	// 	placeholderTextColor: THEME_COLORS.grey,
	// 	searchIcon: {
	// 		name: 'search',
	// 		type: 'font-awesome',
	// 		color: THEME_COLORS.grey,
	// 	},
	// 	clearIcon: {
	// 		name: 'times',
	// 		type: 'font-awesome',
	// 		color: THEME_COLORS.grey,
	// 	},
	// },
	// ListItem: {
	// 	pad: HORIZONTAL_UNIT(3),
	// 	containerStyle: {
	// 		padding: 0,
	// 		paddingVertical: HORIZONTAL_UNIT(3),
	// 	},
	// 	titleStyle: {
	// 		fontSize: THEME_FONTSIZE,
	// 	},
	// 	subtitleStyle: {
	// 		fontSize: THEME_MINOR_FONTSIZE,
	// 		color: THEME_COLORS.grey,
	// 		marginTop: HORIZONTAL_UNIT(),
	// 	},
	// },
};

export default RNElementsTheme;
