import { connect } from 'react-redux';

import RootState from '../../types/redux';

import { openInviteModal } from '../../actions/screens/new-ticket-screen';

import NewTicketScreen from '../../screens/new-ticket-screen';

const mapStateToProps = (state: RootState) => ({
	themeColor: state.newTicket.themeColor,
});

const mapDispatchToProps = {
	openInviteModal,
};

const NewTicketContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(NewTicketScreen);

export default NewTicketContainer;
