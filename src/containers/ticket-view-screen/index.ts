/** @format */

import { connect } from 'react-redux';

import RootState from '../../types/redux';
import TicketViewScreen from '../../screens/ticket-view-screen';

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {};

const VSPTicketViewContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(TicketViewScreen);

export default VSPTicketViewContainer;
