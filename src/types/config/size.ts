import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Guideline sizes are based on IPhone X
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size: number) => width / guidelineBaseWidth * size;

const verticalScale = (size: number) => height / guidelineBaseHeight * size;

const moderateScale = (size: number, factor = 0.5) => size + ( horizontalScale(size) - size ) * factor;

export {horizontalScale, verticalScale, moderateScale};

const HORIZONTAL_UNIT = horizontalScale(5);
const VERTICAL_UNIT = verticalScale(5);

export { HORIZONTAL_UNIT, VERTICAL_UNIT };

const VSP_EDGE_PADDING = 4*HORIZONTAL_UNIT;
const VSP_HEADER_PADDING = 0.75*VSP_EDGE_PADDING;

export { VSP_EDGE_PADDING, VSP_HEADER_PADDING };