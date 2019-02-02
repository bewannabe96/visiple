import { connect } from "react-redux";

import RootState from "../../types/redux";

import DateTimePicker from "../../screens/new-ticket-screen/date-time-picker";

import {
    closePeriodModal,
    switchFromToTab
} from '../../actions/new-ticket-actions'

const mapStateToProps = (state: RootState) => ({
    ticketColor: state.NewTicketScreen.TicketData.ticketColor,
    periodModalVisible: state.NewTicketScreen.Screen.periodModalVisible,
    fromtoTab: state.NewTicketScreen.Screen.fromtoTab,
});

const mapDispatchToProps = {
    switchFromToTab,
    closePeriodModal,
};

const DateTimePickerContainer = connect(mapStateToProps, mapDispatchToProps)(DateTimePicker);

export default DateTimePickerContainer;