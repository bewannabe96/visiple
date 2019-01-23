import { createStackNavigator } from "react-navigation";
import VSPTicketScreen from "../screens/vsp-ticket-screen";

const VSPTicketStack = createStackNavigator(
    {
        TicketScreen: {
            screen: VSPTicketScreen,
        },
    },
    {
        initialRouteName: 'TicketScreen',
    }
);

export default VSPTicketStack;