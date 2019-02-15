export type IconName =
	| 'user'
	| 'menu'
	| 'padlock'
	| 'check'
	| 'settings'
	| 'previous'
	| 'next'
	| 'home'
	| 'cancel'
	| 'search'
	| 'plus'
	| 'calendar'
	| 'clock'
	| 'leftarrow'
	| 'rightarrow'
	| 'trash'
	| 'more'
	| 'planning'
	| 'backpack'
	| 'downarrow'
	| 'teamwork';

const ICON_SOURCE: { [name in IconName]: any } = {
	user: require('.../../assets/icons/user.png'),
	menu: require('../../assets/icons/menu.png'),
	padlock: require('../../assets/icons/padlock.png'),
	check: require('../../assets/icons/check.png'),
	settings: require('../../assets/icons/settings.png'),
	previous: require('../../assets/icons/previous.png'),
	next: require('../../assets/icons/next.png'),
	home: require('../../assets/icons/home.png'),
	cancel: require('../../assets/icons/cancel.png'),
	search: require('../../assets/icons/search.png'),
	plus: require('../../assets/icons/plus.png'),
	calendar: require('../../assets/icons/calendar.png'),
	clock: require('../../assets/icons/clock.png'),
	leftarrow: require('../../assets/icons/left-arrow.png'),
	rightarrow: require('../../assets/icons/right-arrow.png'),
	trash: require('../../assets/icons/trash.png'),
	more: require('../../assets/icons/more.png'),
	planning: require('../../assets/icons/planning.png'),
	backpack: require('../../assets/icons/backpack.png'),
	downarrow: require('../../assets/icons/down-arrow.png'),
	teamwork: require('../../assets/icons/teamwork.png'),
};

export default ICON_SOURCE;
