import { connect } from 'react-redux';

import RootState from '../../types/redux';

import {
	openPeriodModal,
	switchFromToTab,
} from '../../actions/screens/new-ticket-screen';

import PeriodDisplay from '../../screens/new-ticket-screen/period-display';

const mapStateToProps = (state: RootState) => ({
	themeColor: state.newTicket.themeColor,
	period: state.newTicket.period,
});

const mapDispatchToProps = {
	openPeriodModal,
	switchFromToTab,
};

const PeriodDisplayContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(PeriodDisplay);

export default PeriodDisplayContainer;
