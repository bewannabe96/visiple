import * as Config from '../../config/theme.json';

/**
 * Theme Font
 */
export const THEME_FONT = Config.fontFamily;

/**
 * Raw Color Type
 */
export type RawColor = string;

/**
 * Theme Color Type
 */
export type ThemeColor =
	| 'none'
	| 'white'
	| 'grey'
	| 'black'
	| 'greyWhite'
	| 'oceanBlue'
	| 'skyBlue'
	| 'cottoncandyBlue'
	| 'beige'
	| 'brown';

/**
 * Theme Colors
 */
export const THEME_COLORS: { [key in ThemeColor]: string } = {
	none: 'transparent',
	white: '#FFFFFF',
	grey: '#707070',
	black: '#000000',
	greyWhite: '#FCFCFC',
	oceanBlue: '#728CA3',
	skyBlue: '#73C0F4',
	cottoncandyBlue: '#E6EFF3',
	beige: '#F3E4C6',
	brown: '#8F4F06',
};

/**
 * Add shadow style properties
 */
export const addShadowProperties = (
	offset?: number,
	opacity?: number,
	color?: RawColor,
) => ({
	shadowColor: color ? color : THEME_COLORS.black,
	shadowOffset: { width: 0, height: offset ? offset : 2 },
	shadowOpacity: opacity ? opacity : 0.3,
	elevation: offset ? offset * 1.5 : 3,
	zIndex: 1,
});
