import { connect } from "react-redux";

import RootState from "../../types/redux";

import {
    setTicketColor,
    openPeriodModal,
    switchFromToTab,
    openInviteModal,
} from '../../actions/new-ticket-actions'

import NewTicketScreen from "../../screens/new-ticket-screen";

const mapStateToProps = (state: RootState) => ({
    ticketData: state.NewTicketScreen.TicketData,
});

const mapDispatchToProps = {
    setTicketColor,
    openPeriodModal,
    switchFromToTab,
    openInviteModal,
};

const VSPNewTicketContainer = connect(mapStateToProps, mapDispatchToProps)(NewTicketScreen);

export default VSPNewTicketContainer;