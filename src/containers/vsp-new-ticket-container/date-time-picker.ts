import { connect } from "react-redux";

import RootState from "../../types/redux";

import DateTimePicker from "../../screens/new-ticket-screen/date-time-picker";

const mapStateToProps = (state: RootState) => ({
    ticketColor: state.NewTicketScreen.TicketData.ticketColor,
});

const mapDispatchToProps = {
};

const DateTimePickerContainer = connect(mapStateToProps, mapDispatchToProps)(DateTimePicker);

export default DateTimePickerContainer;