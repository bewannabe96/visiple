import { connect } from 'react-redux';

import RootState from '../../types/redux';

import {
	openPeriodModal,
	switchFromToTab,
	openInviteModal,
} from '../../actions/screens/new-ticket-screen';

import NewTicketScreen from '../../screens/new-ticket-screen';

const mapStateToProps = (state: RootState) => ({
	newTicket: state.newTicket,
});

const mapDispatchToProps = {
	openPeriodModal,
	switchFromToTab,
	openInviteModal,
};

const NewTicketContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(NewTicketScreen);

export default NewTicketContainer;
