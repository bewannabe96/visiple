import { NativeModules, Platform } from 'react-native';

export const SYSTEM_LOCALE =
	Platform.OS == 'ios'
		? // iOS:
		  NativeModules.SettingsManager.settings.AppleLocale
		: // Android:
		  NativeModules.I18nManager.localeIdentifier;
