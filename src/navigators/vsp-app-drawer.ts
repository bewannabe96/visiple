import { createDrawerNavigator } from "react-navigation";
import VSPSideDrawer from "../components/vsp-sidedrawer";
import VSPHomeStack from "./vsp-home-stack";
import VSPFriendStack from "./vsp-friend-stack";
import VSPTicketStack from "./vsp-ticket-stack";

const VSPAppDrawer = createDrawerNavigator(
    {
        HomeStack: {
            screen: VSPHomeStack,
        },
        FriendStack: {
            screen: VSPFriendStack,
        },
        TicketStack: {
            screen: VSPTicketStack,
        },
    },
    {
        initialRouteName: 'HomeStack',
        contentComponent: VSPSideDrawer,
    }
);

export default VSPAppDrawer;