import { connect } from "react-redux";

import RootState from "../../types/redux";

import NewTicketScreen from "../../screens/new-ticket-screen";

import {
    setTicketColor,
    openPeriodModal,
    switchFromToTab
} from '../../actions/new-ticket-actions'

const mapStateToProps = (state: RootState) => ({
    ticketData: state.NewTicketScreen.TicketData,
});

const mapDispatchToProps = {
    setTicketColor,
    openPeriodModal,
    switchFromToTab,
};

const VSPNewTicketContainer = connect(mapStateToProps, mapDispatchToProps)(NewTicketScreen);

export default VSPNewTicketContainer;