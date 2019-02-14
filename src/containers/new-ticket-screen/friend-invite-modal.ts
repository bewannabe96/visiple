import { connect } from 'react-redux';

import RootState from '../../types/redux';

import { closeInviteModal } from '../../actions/new-ticket-screen/ui';

import FriendInviteModal from '../../screens/new-ticket-screen/friend-invite-modal';

const mapStateToProps = (state: RootState) => ({
	ticketColor: state.NewTicketScreen.Data.ticketColor,
	inviteModalVisible: state.NewTicketScreen.UI.inviteModalVisible,
});

const mapDispatchToProps = {
	closeInviteModal,
};

const FriendInviteModalContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(FriendInviteModal);

export default FriendInviteModalContainer;
