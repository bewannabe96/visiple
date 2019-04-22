import { connect } from 'react-redux';

import RootState from '../../types/redux';

import { setToDate, setFromDate } from '../../actions/new-ticket';

import PeriodSelector from '../../screen-components/period-selector';

const mapStateToProps = (state: RootState) => ({
	color: state.newTicket.themeColor,
	period: state.newTicket.period,
});

const mapDispatchToProps = {
	setFromDate,
	setToDate,
};

const PeriodSelectorContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(PeriodSelector);

export default PeriodSelectorContainer;
