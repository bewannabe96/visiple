import { connect } from 'react-redux';

import RootState from '../../types/redux';

import {
	openPeriodModal,
	switchFromToTab,
	openInviteModal,
} from '../../actions/new-ticket-screen/ui';

import NewTicketScreen from '../../screens/new-ticket-screen';

const mapStateToProps = (state: RootState) => ({
	ticketData: state.NewTicketScreen.Data,
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
