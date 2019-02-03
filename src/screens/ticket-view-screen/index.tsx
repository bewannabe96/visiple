import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { VSPScreenProps } from '../../types/props/vsp-screen';
import { VERTICAL_UNIT, VSP_EDGE_PADDING } from '../../types/config/size';
import { addShadowProperties } from '../../types/config/theme';

import VSPHeader, { VSPHeaderTitle, VSPHeaderBack, VSPHeaderButton } from '../../components/vsp-header';
import VSPContainer from '../../components/vsp-container';

interface TicketViewScreenProps extends VSPScreenProps {
}

/**
 * TicketViewScreen
 */
export default class TicketViewScreen extends React.Component<TicketViewScreenProps> {
    static navigationOptions = ({ navigation }: { navigation: NavigationScreenProp<any> }) => {
        return {
            header: (
                <VSPHeader
                    headerTitle={ (<VSPHeaderTitle text='나혼자 여행갈꼬얌' />) }
                    headerLeft={VSPHeaderBack(navigation)}
                    headerRight={(
                        <VSPHeaderButton
                            icon='trash'
                        />
                    )}
                />
            ),
        };
    };

    render() {
        let style = StyleSheet.create({
            categoryView: {
                marginTop: 5*VERTICAL_UNIT,
                marginHorizontal: VSP_EDGE_PADDING,
                backgroundColor: 'blue',
                ...addShadowProperties(),
                height:40,
            }
        });

        return (
            <VSPContainer>
                <ScrollView>
                    <View style={style.categoryView}>
                    </View>
                    <View style={style.categoryView}>
                    </View>
                    <View style={style.categoryView}>
                    </View>
                </ScrollView>
            </VSPContainer>
        );
    };
}