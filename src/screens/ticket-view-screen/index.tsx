import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { VSPScreenProps } from '../../types/props/vsp-screen';
import { VERTICAL_UNIT, VSP_EDGE_PADDING, HORIZONTAL_UNIT, VSP_HEADER_PADDING } from '../../types/config/size';
import { addShadowProperties, THEME_COLORS, THEME_HEADER_FONTSIZE } from '../../types/config/theme';

import VSPHeader from '../../components/vsp-header';
import VSPContainer from '../../components/vsp-container';
import { TICKET_COLORS } from '../../types/config/ticket_theme';
import VSPTextButton from '../../components/vsp-text-button';
import VSPProfile from '../../components/vsp-profile';
import VSPText from '../../components/vsp-text';

const DEV_TICKET_COLOR = TICKET_COLORS.HEADER['blue'];

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
                    transparent={true}
                    headerLeft={(
                        <VSPTextButton
                            icon='leftarrow'
                            theme='white'
                            fontSize={28}
                            onPress={()=>{navigation.pop()}}
                        />
                    )}
                    headerRight={(
                        <VSPTextButton
                            icon='more'
                            theme='white'
                            fontSize={28}
                        />
                    )}
                />
            ),
        };
    };

    render() {
        let style = StyleSheet.create({
            headerView: {
                height: 30*VERTICAL_UNIT,
                backgroundColor: DEV_TICKET_COLOR,
            },

            bottomView: {
                position: 'absolute',
                bottom: 0,
                width: '100%',
            },

            profilesView: {
                flexDirection: 'row',
                marginHorizontal: VSP_EDGE_PADDING,
                marginBottom: VERTICAL_UNIT,
                zIndex: 1,
            },

            stackedProfile: {
                left: -3*1*HORIZONTAL_UNIT,
                zIndex: 1,
            },

            bodyCapView: {
                position: 'absolute',
                bottom: 0,
                height: 5*HORIZONTAL_UNIT,
                width: '100%',
                backgroundColor: THEME_COLORS['white'],
            },

            bodyView: {
                flex: 1,
                backgroundColor: THEME_COLORS['white'],
                paddingTop: VSP_HEADER_PADDING,
            },

            categoryView: {
                marginVertical: 2*VERTICAL_UNIT,
                backgroundColor: THEME_COLORS['grey-white'],
                borderRadius: 2*VERTICAL_UNIT,
                marginHorizontal: VSP_EDGE_PADDING,
                ...addShadowProperties(),
                height:400,
            }
        });

        return (
            <VSPContainer>
                <View style={style.headerView}>
                    <View style={style.bottomView}>
                        <View style={style.profilesView}>
                            <VSPProfile />
                            <VSPProfile style={style.stackedProfile}/>
                        </View>
                        <View style={style.bodyCapView} />
                    </View>
                </View>
                <View style={style.bodyView}>
                <VSPText
                        fontSize={THEME_HEADER_FONTSIZE}
                        color={DEV_TICKET_COLOR}
                        fontWeight='bold'
                        marginX={VSP_EDGE_PADDING}
                        marginBottom={2*VERTICAL_UNIT}
                    >
                        {'나혼자 여행갈꼬얌'}
                    </VSPText>
                    <ScrollView>
                        <View style={style.categoryView}>

                        </View>
                        <View style={style.categoryView}>
                        </View>
                    </ScrollView>
                </View>
            </VSPContainer>
        );
    };
}