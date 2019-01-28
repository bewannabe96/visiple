import React from 'react';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import { NavigationScreenProp } from 'react-navigation';

import VSPHeader, { VSPHeaderTitle, VSPHeaderBack } from '../components/vsp-header';

import NewTicketReducer from "../reducers/new-ticket-reducers";
import NewTicketScreen from '../containers/new-ticket-containers';

const store = createStore(NewTicketReducer)

export default class VSPNewTicketScreen extends React.Component {
    static navigationOptions = ({ navigation }: { navigation: NavigationScreenProp<any> }) => {
        return {
            header: (
                <VSPHeader
                    headerTitle={ (<VSPHeaderTitle text='새로운 티켓' />) }
                    headerLeft={VSPHeaderBack(navigation)}
                />
            ),
        };
    };

    render() {
        return (
            <Provider store={store}>
                <NewTicketScreen />
            </Provider>
        );
    }
  }