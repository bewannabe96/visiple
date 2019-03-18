import { connect } from 'react-redux';

import RootState from '../../types/redux';

import {
	closePeriodModal,
	switchFromToTab,
} from '../../actions/screens/new-ticket-screen';
import { setFromDate, setToDate } from '../../actions/new-ticket';

import SelectPeriodModal from '../../screens/new-ticket-screen/select-period-modal';

const mapStateToProps = (state: RootState) => ({
	themeColor: state.newTicket.themeColor,
	fromDateTime: state.newTicket.period.from,
	toDateTime: state.newTicket.period.to,
	periodModalVisible: state.screens.newTicketScreen.periodModalVisible,
	fromtoTab: state.screens.newTicketScreen.fromtoTab,
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
