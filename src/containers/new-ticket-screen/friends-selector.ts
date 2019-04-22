import { connect } from 'react-redux';

import RootState from '../../types/redux';

import FriendsSelector from '../../screen-components/friends-selector';

const mapStateToProps = (state: RootState) => ({
	color: state.newTicket.themeColor,
	friends: state.newTicket.participants,
});

const mapDispatchToProps = {};

const FriendsSelectorContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(FriendsSelector);

export default FriendsSelectorContainer;
