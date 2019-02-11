import React from 'react';
import { View, StyleSheet } from 'react-native';

import { THEME_HEADER_FONTSIZE, THEME_COLORS, addShadowProperties } from '../../types/config/theme';
import { HORIZONTAL_UNIT, VERTICAL_UNIT, VSP_EDGE_PADDING } from '../../types/config/size';

import VSPIcon from '../../components/vsp-icon';
import VSPText from '../../components/vsp-text';
import VSPExpandable from '../../components/vsp-expandable';
import { formatDateString } from '../../types/lib/vsp-date';

interface PlanTimelineProps {
    // STATES
    plans: {}[]
    ticketColor: any
}

/**
 * PlanTimeline
 */
export default class PlanTimeline extends React.Component<PlanTimelineProps> {
    _render_expandable() {
        let style = StyleSheet.create({
            container: {
                flexDirection: 'row',
                alignItems: 'center',
            },

            bulletDot: {
                height: 4*HORIZONTAL_UNIT,
                width: 4*HORIZONTAL_UNIT,
                borderRadius: 2*HORIZONTAL_UNIT,
                marginVertical: 3*HORIZONTAL_UNIT,
                backgroundColor: this.props.ticketColor,
            },

            timelineLine: {
                width: '40%',
                position: 'absolute',
                marginHorizontal: '30%',
                backgroundColor: this.props.ticketColor,
            },
        });

        return this.props.plans.map((plan: any, index: number, array: {}[]) => (
                <VSPExpandable
                    key={plan.date}
                    header={
                        <View style={style.container}>
                            <View>
                                <View style={style.bulletDot} />
                                <View style={
                                    {
                                        ...style.timelineLine,
                                        height: (index==0 || index===array.length-1) ? '50%' : '100%',
                                        bottom: index==0 ? 0 : '50%',
                                    }
                                } />
                            </View>
                            <VSPText
                                color={this.props.ticketColor}
                                marginLeft={2*HORIZONTAL_UNIT}
                            >
                                {
                                    //formatDateString(plan.date)
                                    (index==0 || index===array.length-1).toString()
                                }
                            </VSPText>
                        </View>
                    }
                    body={
                        <View>
                        </View>
                    }
                    color={this.props.ticketColor}
                />
            )
        );
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
                        iconName='planning'
                        size={THEME_HEADER_FONTSIZE}
                        theme='ocean-blue'
                    />
                    <VSPText
                        fontSize={THEME_HEADER_FONTSIZE}
                        marginLeft={2*HORIZONTAL_UNIT}
                    >
                        일정
                    </VSPText>
                </View>
                {this._render_expandable()}
            </View>
        );
    }
}