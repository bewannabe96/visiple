import { connect } from 'react-redux';

import RootState from '../../types/redux';

import {
	openPeriodModal,
	switchFromToTab,
	closePeriodModal,
} from '../../actions/screens/new-ticket-screen';
import { setToDate, setFromDate } from '../../actions/new-ticket';

import PeriodDisplay from '../../screen-components/period-selector';

const mapStateToProps = (state: RootState) => ({
	color: state.newTicket.themeColor,
	period: state.newTicket.period,
	isModalVisible: state.screens.newTicketScreen.periodModalVisible,
	fromtoTab: state.screens.newTicketScreen.fromtoTab,
});

const mapDispatchToProps = {
	openPeriodModal,
	switchFromToTab,
	closePeriodModal,
	setFromDate,
	setToDate,
};

const PeriodSelectorContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(PeriodDisplay);

export default PeriodSelectorContainer;
