import { createIconSetFromIcoMoon } from 'react-native-vector-icons';

import icoMoonConfig from '../../config/icons.json';

const VSPIconSet = createIconSetFromIcoMoon(
	icoMoonConfig,
	'vspicon',
	'vspicon.ttf',
);

export default VSPIconSet;
