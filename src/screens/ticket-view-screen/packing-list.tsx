import React from 'react';
import { StyleSheet, View } from 'react-native';

import { THEME_HEADER_FONTSIZE, THEME_COLORS, addShadowProperties } from '../../types/config/theme';
import { VERTICAL_UNIT, HORIZONTAL_UNIT, VSP_EDGE_PADDING } from '../../types/config/size';

import VSPIcon from '../../components/vsp-icon';
import VSPText from '../../components/vsp-text';
import VSPExpandable from '../../components/vsp-expandable';
import VSPCheckbox from '../../components/vsp-checkbox';

interface PackingListProps {
    // STATES
    ticketColor: any
}

/**
 * PackingList
 */
export default class PackingList extends React.Component<PackingListProps> {
    _render_packing_list() {
        let style = StyleSheet.create({
            packingItem: {
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: VSP_EDGE_PADDING,
                marginTop: 2*VERTICAL_UNIT,
            },
        });

        return (
            <VSPExpandable
                    header={
                        <View style={{flexDirection: 'row',}}>
                            <VSPIcon
                                iconName='teamwork'
                                size={THEME_HEADER_FONTSIZE}
                                marginRight={HORIZONTAL_UNIT}
                                color={this.props.ticketColor}
                            />
                            <VSPText
                                color={this.props.ticketColor}
                                fontSize={THEME_HEADER_FONTSIZE}
                            >
                                공통
                            </VSPText>
                        </View>
                    }
                    body={
                        <View>
                            <View style={style.packingItem}>
                                <VSPCheckbox marginRight={2*HORIZONTAL_UNIT} />
                                <VSPText>커피포트</VSPText>
                            </View>
                            <View style={style.packingItem}>
                                <VSPCheckbox marginRight={2*HORIZONTAL_UNIT} />
                                <VSPText>요가메트</VSPText>
                            </View>
                            <View style={style.packingItem}>
                                <VSPCheckbox marginRight={2*HORIZONTAL_UNIT} />
                                <VSPText>헬멧</VSPText>
                            </View>
                        </View>
                    }
                    color={this.props.ticketColor}
                    marginTop={4*VERTICAL_UNIT}
            />
        )
    }

    render() {
        let style = StyleSheet.create({
            categoryView: {
                marginVertical: 2*VERTICAL_UNIT,
                backgroundColor: THEME_COLORS['grey-white'],
                borderRadius: 2*VERTICAL_UNIT,
                padding: 4*HORIZONTAL_UNIT,
                marginHorizontal: VSP_EDGE_PADDING,
                ...addShadowProperties(),
            },

            categoryTitleView: {
                flexDirection: 'row',
            },
        });

        return (
            <View style={style.categoryView}>
                <View style={style.categoryTitleView}>
                    <VSPIcon
                        iconName='backpack'
                        size={THEME_HEADER_FONTSIZE}
                        theme='ocean-blue'
                    />
                    <VSPText
                        fontSize={THEME_HEADER_FONTSIZE}
                        marginLeft={2*HORIZONTAL_UNIT}
                    >
                        준비물품
                    </VSPText>
                </View>
                {this._render_packing_list()}
            </View>
        );
    }
}