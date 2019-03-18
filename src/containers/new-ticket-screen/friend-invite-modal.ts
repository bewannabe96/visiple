import { connect } from 'react-redux';

import RootState from '../../types/redux';

import { closeInviteModal } from '../../actions/new-ticket-screen/ui';

import FriendInviteModal from '../../screen-components/friend-invite-modal';

const mapStateToProps = (state: RootState) => ({
	themeColor: state.NewTicketScreen.Data.themeColor,
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
