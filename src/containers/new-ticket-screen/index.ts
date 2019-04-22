import { connect } from 'react-redux';

import RootState from '../../types/redux';

import NewTicketScreen from '../../screens/new-ticket-screen';

const mapStateToProps = (state: RootState) => ({
	themeColor: state.newTicket.themeColor,
});

const mapDispatchToProps = {};

const NewTicketContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(NewTicketScreen);

export default NewTicketContainer;
