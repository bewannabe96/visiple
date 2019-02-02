import { connect } from "react-redux";

import RootState from "../../types/redux";

import {
    openPeriodModal,
    closePeriodModal,
    switchFromToTab
} from '../../actions/new-ticket-actions'

import DateTimePicker from "../../screens/new-ticket-screen/date-time-picker";

const mapStateToProps = (state: RootState) => ({
    ticketColor: state.NewTicketScreen.TicketData.ticketColor,
    periodModalVisible: state.NewTicketScreen.Screen.periodModalVisible,
    fromtoTab: state.NewTicketScreen.Screen.fromtoTab,
});

const mapDispatchToProps = {
    openPeriodModal,
    closePeriodModal,
    switchFromToTab,
};

const DateTimePickerContainer = connect(mapStateToProps, mapDispatchToProps)(DateTimePicker);

export default DateTimePickerContainer;