import { connect } from 'react-redux';

import RootState from '../../types/redux';

import { closeInviteModal } from '../../actions/screens/new-ticket-screen';

import FriendInviteModal from '../../screen-components/friend-invite-modal';

const mapStateToProps = (state: RootState) => ({
	themeColor: state.newTicket.themeColor,
	inviteModalVisible: state.screens.newTicketScreen.inviteModalVisible,
});

const mapDispatchToProps = {
	closeInviteModal,
};

const FriendInviteModalContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(FriendInviteModal);

export default FriendInviteModalContainer;
