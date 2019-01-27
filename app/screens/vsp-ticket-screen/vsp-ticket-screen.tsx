import React from 'react';
import { ScrollView, StyleSheet, StyleProp } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { VSPScreenProps } from '../../props/vsp-screen';

import TicketItem from './ticket-item';

import VSPHeader, { VSPHeaderTitle, VSPHeaderButton, VSPHeaderMenu } from '../../components/vsp-header';
import VSPContainer from '../../components/vsp-container';
import VSPBottomBar from '../../components/vsp-bottombar';

export default class VSPTicketScreen extends React.Component<VSPScreenProps> {
    private _fixed_style: StyleProp<any>;

    static navigationOptions = ({ navigation }: { navigation: NavigationScreenProp<any> }) => {
        return {
            header: (
                <VSPHeader
                    headerTitle={ (<VSPHeaderTitle text='티켓' />) }
                    headerLeft={VSPHeaderMenu(navigation)}
                    headerRight={(
                        <VSPHeaderButton
                            icon='plus'
                            onPress={()=>{navigation.navigate('NewTicketScreen')}}
                        />
                    )}
                />
            ),
        };
    };

    constructor(props: any) {
        super(props);

        this._fixed_style = StyleSheet.create({
        });
    }

    render() {
        return (
            <VSPContainer>
                <ScrollView>
                    <TicketItem
                        startDate={new Date('2020-01-15')}
                        endDate={new Date('2020-02-02')}
                        title='여자친구와 함께하는 신나는 이별여행'
                    />
                    <TicketItem
                        startDate={new Date('2020-01-15')}
                        endDate={new Date('2020-02-02')}
                        title='여자친구와 함께하는 신나는 이별여행'
                    />
                </ScrollView>
                <VSPBottomBar />
            </VSPContainer>
        );
    };
}