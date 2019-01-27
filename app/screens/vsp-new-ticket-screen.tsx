import React from 'react';
import { StyleProp, StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { VSPScreenProps } from '../props/vsp-screen';

import VSPHeader, { VSPHeaderTitle, VSPHeaderBack } from '../components/vsp-header';
import VSPContainer from '../components/vsp-container';

export default class VSPNewTicketScreen extends React.Component<VSPScreenProps> {
    private _fixed_style: StyleProp<any>;

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

    constructor(props: VSPScreenProps) {
        super(props);

        this._fixed_style = StyleSheet.create({
        });
    }

    render() {
        return (
            <VSPContainer>
            </VSPContainer>
        );
    };
}