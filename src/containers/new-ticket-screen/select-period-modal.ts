import { connect } from 'react-redux';

import RootState from '../../types/redux';

import {
	closePeriodModal,
	switchFromToTab,
} from '../../actions/new-ticket-screen/ui';
import {
	setFromDateTime,
	setToDateTime,
} from '../../actions/new-ticket-screen/data';

import SelectPeriodModal from '../../screens/new-ticket-screen/select-period-modal';

const mapStateToProps = (state: RootState) => ({
	themeColor: state.NewTicketScreen.Data.themeColor,
	fromDateTime: state.NewTicketScreen.Data.period.from,
	toDateTime: state.NewTicketScreen.Data.period.to,
	periodModalVisible: state.NewTicketScreen.UI.periodModalVisible,
	fromtoTab: state.NewTicketScreen.UI.fromtoTab,
});

const mapDispatchToProps = {
	switchFromToTab,
	closePeriodModal,
	setFromDateTime,
	setToDateTime,
};

const SelectPeriodModalContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(SelectPeriodModal);

export default SelectPeriodModalContainer;
