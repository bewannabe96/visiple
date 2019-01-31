import { connect } from "react-redux";

import RootState from "../../types/redux";

import InvitedFriendsList from "../../screens/new-ticket-screen/invited-friends-list";

const mapStateToProps = (state: RootState) => ({
    ticketColor: state.NewTicketScreen.TicketData.ticketColor,
});

const mapDispatchToProps = {
};

const InvitedFriendsListContainer = connect(mapStateToProps, mapDispatchToProps)(InvitedFriendsList);

export default InvitedFriendsListContainer;