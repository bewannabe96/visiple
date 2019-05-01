import * as RNLocalize from 'react-native-localize';

export const LOCALIZE_SYSTEM_LANGUAGE = RNLocalize.getLocales()[0].languageCode;

export const LOCALIZE_TIMEZONE = RNLocalize.getTimeZone();
