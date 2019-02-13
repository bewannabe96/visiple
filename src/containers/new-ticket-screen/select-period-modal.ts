/** @format */

import { connect } from 'react-redux';

import RootState from '../../types/redux';

import {
	closePeriodModal,
	switchFromToTab,
} from '../../actions/new-ticket-screen/ui';
import { setFromDate, setToDate } from '../../actions/new-ticket-screen/data';

import SelectPeriodModal from '../../screens/new-ticket-screen/select-period-modal';

const mapStateToProps = (state: RootState) => ({
	ticketColor: state.NewTicketScreen.TicketData.ticketColor,
	fromDate: state.NewTicketScreen.TicketData.period.from,
	toDate: state.NewTicketScreen.TicketData.period.to,
	periodModalVisible: state.NewTicketScreen.Screen.periodModalVisible,
	fromtoTab: state.NewTicketScreen.Screen.fromtoTab,
});

const mapDispatchToProps = {
	switchFromToTab,
	closePeriodModal,
	setFromDate,
	setToDate,
};

const SelectPeriodModalContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(SelectPeriodModal);

export default SelectPeriodModalContainer;
