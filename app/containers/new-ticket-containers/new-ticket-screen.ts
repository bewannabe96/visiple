import { connect } from "react-redux";

import { NewTicketScreen } from "../../screen-components/new-ticket-screen-components";

const mapStateToProps = (state: any) => ({
    themeColor: state.themeColor,
});

export default connect(mapStateToProps, null)(NewTicketScreen);