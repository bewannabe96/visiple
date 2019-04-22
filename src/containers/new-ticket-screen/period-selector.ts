import { connect } from 'react-redux';

import RootState from '../../types/redux';

import { setToDate, setFromDate } from '../../actions/new-ticket';

import PeriodDisplay from '../../screen-components/period-selector';

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
)(PeriodDisplay);

export default PeriodSelectorContainer;
