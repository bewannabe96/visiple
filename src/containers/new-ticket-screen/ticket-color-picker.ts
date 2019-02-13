/** @format */

import { connect } from 'react-redux';

import RootState from '../../types/redux';

import { setTicketColor } from '../../actions/new-ticket-screen/data';

import TicketColorPicker from '../../screens/new-ticket-screen/ticket-color-picker';

const mapStateToProps = (state: RootState) => ({
	ticketColor: state.NewTicketScreen.Data.ticketColor,
});

const mapDispatchToProps = {
	setTicketColor,
};

const TicketColorPickerContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(TicketColorPicker);

export default TicketColorPickerContainer;