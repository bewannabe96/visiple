import { THEME_COLORS } from '../types/lib/theme';
import {
	THEME_FONTSIZE,
	HORIZONTAL_UNIT,
	THEME_HEADER_FONTSIZE,
	THEME_MINOR_FONTSIZE,
	THEME_TITLE_FONTSIZE,
} from '../types/lib/size';

const RNElementsTheme = {
	Icon: {
		size: THEME_FONTSIZE,
	},

	Image: {
		resizeMode: 'cover' as 'cover',
		style: {
			height: '100%',
			width: '100%',
		},
	},

	Button: {
		containerStyle: {
			padding: 0,
		},
		titleStyle: {
			fontSize: THEME_FONTSIZE,
		},
	},

	Text: {
		style: {
			color: THEME_COLORS.black,
			fontWeight: 'normal' as 'normal',
		},
		h1Style: {
			fontSize: THEME_TITLE_FONTSIZE,
		},
		h2Style: {
			fontSize: THEME_HEADER_FONTSIZE,
		},
		h3Style: {
			fontSize: THEME_FONTSIZE,
		},
		h4Style: {
			fontSize: THEME_MINOR_FONTSIZE,
		},
	},

	Avatar: {
		icon: { name: 'user', type: 'font-awesome' },
		rounded: true,
	},

	Input: {
		containerStyle: { paddingHorizontal: 0 },
		labelStyle: {
			fontSize: THEME_FONTSIZE,
			fontWeight: 'normal' as 'normal',
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

	SearchBar: {
		containerStyle: {
			padding: 0,
			backgroundColor: 'transparent',
			borderTopColor: 'transparent',
			borderBottomColor: 'transparent',
		},
		inputContainerStyle: {
			borderRadius: 0,
			backgroundColor: THEME_COLORS.greyWhite,
		},
		leftIconContainerStyle: {
			marginRight: 0,
		},
		inputStyle: {
			fontSize: THEME_FONTSIZE,
		},
		placeholderTextColor: THEME_COLORS.grey,
		searchIcon: {
			name: 'search',
			color: THEME_COLORS.grey,
		},
		clearIcon: {
			name: 'cancel',
			color: THEME_COLORS.grey,
		},
	},

	ListItem: {
		pad: HORIZONTAL_UNIT(3),
		containerStyle: {
			padding: 0,
		},
		titleStyle: {
			fontSize: THEME_FONTSIZE,
		},
		subtitleStyle: {
			fontSize: THEME_MINOR_FONTSIZE,
			color: THEME_COLORS.grey,
			marginTop: HORIZONTAL_UNIT(),
		},
	},

	Card: {
		containerStyle: { margin: 0 },
	},
};

export default RNElementsTheme;
