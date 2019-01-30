import { createStackNavigator } from "react-navigation";
import VSPTicketScreen from "../screens/vsp-ticket-screen";
import VSPNewTicketContainer from "../containers/vsp-new-ticket-container";

const VSPTicketStack = createStackNavigator(
    {
        TicketScreen: {
            screen: VSPTicketScreen,
        },
        
        NewTicketScreen: {
            screen: VSPNewTicketContainer,
        },
    },
    {
        initialRouteName: 'TicketScreen',
    }
);

export default VSPTicketStack;