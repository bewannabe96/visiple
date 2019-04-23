import { Dimensions } from 'react-native';

import {
	bottomTab,
	sizeOffset,
	padding,
	fontSize,
} from '../../config/theme.json';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

// Guideline sizes are based on IPhone X
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

/**
 * Device size
 */
export const DEVICE_HEIGHT = height;
export const DEVICE_WIDTH = width;

/**
 * Size Constants
 */
export const HORIZONTAL_UNIT = (size: number = 1) =>
	(width / guidelineBaseWidth) * sizeOffset * size;
export const VERTICAL_UNIT = (size: number = 1) =>
	(height / guidelineBaseHeight) * sizeOffset * size;

/**
 * Bottom Tab
 */
export const VSP_BOTTOM_TAB = HORIZONTAL_UNIT(bottomTab.height);
export const VSP_BOTTOM_TAB_BUTTON = HORIZONTAL_UNIT(bottomTab.button);

/**
 * Screen Edge Padding
 */
export const VSP_EDGE_PADDING = HORIZONTAL_UNIT(padding.edge);

/**
 * Font Sizes
 */
export const THEME_FONTSIZE = HORIZONTAL_UNIT(fontSize.regular);
export const THEME_TITLE_FONTSIZE = HORIZONTAL_UNIT(fontSize.title);
export const THEME_HEADER_FONTSIZE = HORIZONTAL_UNIT(fontSize.header);
export const THEME_MINOR_FONTSIZE = HORIZONTAL_UNIT(fontSize.minor);
