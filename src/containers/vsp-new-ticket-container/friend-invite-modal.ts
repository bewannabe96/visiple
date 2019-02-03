import { connect } from "react-redux";

import RootState from "../../types/redux";

import {
    closeInviteModal,
} from '../../actions/new-ticket-actions'

import FriendInviteModal from "../../screens/new-ticket-screen/friend-invite-modal";

const mapStateToProps = (state: RootState) => ({
    ticketColor: state.NewTicketScreen.TicketData.ticketColor,
    inviteModalVisible: state.NewTicketScreen.Screen.inviteModalVisible
});

const mapDispatchToProps = {
    closeInviteModal,
};

const FriendInviteModalContainer = connect(mapStateToProps, mapDispatchToProps)(FriendInviteModal);

export default FriendInviteModalContainer;