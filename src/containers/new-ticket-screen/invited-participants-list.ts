import { connect } from 'react-redux';

import RootState from '../../types/redux';

import InvitedParticipantsList from '../../screens/new-ticket-screen/invited-participants-list';

const mapStateToProps = (state: RootState) => ({
	themeColor: state.newTicket.themeColor,
	participants: state.newTicket.participants,
});

const mapDispatchToProps = {};

const InvitedParticipantsListContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(InvitedParticipantsList);

export default InvitedParticipantsListContainer;
