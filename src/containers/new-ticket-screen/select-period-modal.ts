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
	ticketColor: state.NewTicketScreen.Data.ticketColor,
	fromDate: state.NewTicketScreen.Data.period.from,
	toDate: state.NewTicketScreen.Data.period.to,
	periodModalVisible: state.NewTicketScreen.UI.periodModalVisible,
	fromtoTab: state.NewTicketScreen.UI.fromtoTab,
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
