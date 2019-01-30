import { connect } from "react-redux";

import RootState from "../../types/redux";

import NewTicketScreen from "../../screens/new-ticket-screen";

import { setTicketColor } from '../../actions/new-ticket-actions'

const mapStateToProps = (state: RootState) => ({
    ticketData: state.NewTicketScreen.TicketData,
});

const mapDispatchToProps = {
    setTicketColor,
};

const VSPNewTicketContainer = connect(mapStateToProps, mapDispatchToProps)(NewTicketScreen);

export default VSPNewTicketContainer;