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
 * Theme Colors
 */
export const THEME_COLORS = Config.colors;

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
