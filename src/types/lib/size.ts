import { Dimensions } from 'react-native';

import { sizeOffset, padding, fontSize } from '../../config/theme.json';

const { width, height } = Dimensions.get('window');

// Guideline sizes are based on IPhone X
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

/**
 * Size Constants
 */
export const HORIZONTAL_UNIT = (size: number = 1) =>
	(width / guidelineBaseWidth) * sizeOffset * size;
export const VERTICAL_UNIT = (size: number = 1) =>
	(height / guidelineBaseHeight) * sizeOffset * size;

export const VSP_EDGE_PADDING = HORIZONTAL_UNIT(padding.edge);
export const VSP_TOP_PADDING = HORIZONTAL_UNIT(padding.top);

/**
 * Font Sizes
 */
export const THEME_FONTSIZE = HORIZONTAL_UNIT(fontSize.regular);
export const THEME_HEADER_FONTSIZE = HORIZONTAL_UNIT(fontSize.header);
export const THEME_MINOR_FONTSIZE = HORIZONTAL_UNIT(fontSize.minor);
