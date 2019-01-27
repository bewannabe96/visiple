import { createStackNavigator } from "react-navigation";
import VSPTicketScreen from "../screens/vsp-ticket-screen";
import VSPNewTicketScreen from "../screens/vsp-new-ticket-screen";

const VSPTicketStack = createStackNavigator(
    {
        TicketScreen: {
            screen: VSPTicketScreen,
        },
        
        NewTicketScreen: {
            screen: VSPNewTicketScreen,
        },
    },
    {
        initialRouteName: 'TicketScreen',
    }
);

export default VSPTicketStack;