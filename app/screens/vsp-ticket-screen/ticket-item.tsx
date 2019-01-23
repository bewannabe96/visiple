import React from 'react';
import { View, Text, StyleProp, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { addShadowProperties, THEME_FONT } from '../../config/theme';
import { VERTICAL_UNIT, VSP_HEADER_PADDING } from '../../config/size';
import { TicketHeaderColorType, TICKET_COLORS, TICKET_TEXTS } from '../../config/ticket_theme';

import VSPProfile from '../../components/vsp-profile';

interface TicketItemProps {
    /**
     * Date which it starts from
     */
    startDate: Date,

    /**
     * Date which it ends
     */
    endDate: Date,

    /**
     * Title of the ticket
     */
    title: string,

    /**
     * Color of the header (by default 'blue')
     */
    headercolor?: TicketHeaderColorType,
}

/**
 * TicketItem
 * 
 * @property 
 * - 'startDate' (required): Date which it starts from
 * - 'endDate' (required): Date which it ends
 * - 'title' (required): Title of the ticket
 * - 'headercolor': Color of the header (by default 'blue')
 */
export default class TicketItem extends React.Component<TicketItemProps> {
    private _fixed_style: StyleProp<any>;

    constructor(props: TicketItemProps) {
        super(props);

        this._fixed_style = StyleSheet.create({
            ticketView: {
                marginTop: 4*VERTICAL_UNIT,
                marginHorizontal: VSP_HEADER_PADDING,
                ...addShadowProperties(),
            },
    
            headerView: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                height: 6*VERTICAL_UNIT,
                backgroundColor: props.headercolor
                    ? TICKET_COLORS.HEADER[props.headercolor]
                    :  TICKET_COLORS.HEADER['blue'],
                paddingHorizontal: 3*VERTICAL_UNIT,
                paddingVertical: VERTICAL_UNIT,
                borderTopLeftRadius: 2*VERTICAL_UNIT,
                borderTopRightRadius: 2*VERTICAL_UNIT,
            },
    
            bodyView: {
                justifyContent: 'space-between',
                height: 18*VERTICAL_UNIT,
                backgroundColor: TICKET_COLORS.BODY,
                paddingHorizontal: 3*VERTICAL_UNIT,
                paddingVertical: 2*VERTICAL_UNIT,
            },
    
            footerView: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: 7*VERTICAL_UNIT,
                backgroundColor: TICKET_COLORS.FOOTER,
                paddingHorizontal: 4*VERTICAL_UNIT,
                paddingVertical: VERTICAL_UNIT,
                borderBottomLeftRadius: 2*VERTICAL_UNIT,
                borderBottomRightRadius: 2*VERTICAL_UNIT,
            },
    
            topleftText: {
                fontSize: 2.5*VERTICAL_UNIT,
                fontFamily: THEME_FONT,
                fontWeight: 'bold',
                color: TICKET_COLORS.TEXT,
            },
    
            toprightSecondaryText: {
                fontSize: VERTICAL_UNIT,
                fontFamily: THEME_FONT,
                color: TICKET_COLORS.TEXT,
            },
    
            toprightPrimaryText: {
                fontSize: 2*VERTICAL_UNIT,
                fontFamily: THEME_FONT,
                color: TICKET_COLORS.TEXT,
            },
    
            fromtoView: {
                flexDirection: 'row',
                justifyContent: 'space-between',
            },
    
            fromtoInnerView: {
                flex: 1,
                alignItems: 'flex-start',
                marginHorizontal: VERTICAL_UNIT,
            },
    
            fromtoText: {
                fontFamily: THEME_FONT,
                fontSize: 2*VERTICAL_UNIT,
                color: TICKET_COLORS.TEXT,
            },
    
            dateText: {
                fontFamily: THEME_FONT,
                fontSize: 3*VERTICAL_UNIT,
                color: TICKET_COLORS.DATE,
            },
    
            titleText: {
                fontFamily: THEME_FONT,
                fontSize: 3*VERTICAL_UNIT,
                color: TICKET_COLORS.TITLE,
            },
    
            passengerView: {
                flexDirection: 'row',
                alignItems: 'flex-end',
            },
    
            passengerText: {
                fontFamily: THEME_FONT,
                fontSize: 1.5*VERTICAL_UNIT,
                color: TICKET_COLORS.TEXT,
            },
    
            barcode: {
                width: '40%',
                borderRadius: 2,
                height: 5*VERTICAL_UNIT,
                resizeMode: 'cover',
                tintColor: TICKET_COLORS.TEXT,
            }
        });
    }
    render() {
        return (
            <TouchableOpacity style={this._fixed_style.ticketView}>
                <View style={this._fixed_style.headerView}>
                    <Text style={this._fixed_style.topleftText}>
                        {TICKET_TEXTS.TOPLEFT}
                    </Text>
                    <View>
                        <Text style={this._fixed_style.toprightSecondaryText}>
                            {TICKET_TEXTS.TOPRIGHT.SECONDARY}
                        </Text>
                        <Text style={this._fixed_style.toprightPrimaryText}>
                            {TICKET_TEXTS.TOPRIGHT.PRIMARY}
                        </Text>
                    </View>
                </View>
                <View style={this._fixed_style.bodyView}>
                    <View style={this._fixed_style.fromtoView}>
                        <View style={this._fixed_style.fromtoInnerView}>
                            <Text style={this._fixed_style.fromtoText}>
                                {TICKET_TEXTS.FROM}
                            </Text>
                            <Text style={this._fixed_style.dateText}>
                                {this.props.startDate.toLocaleDateString()}
                            </Text>
                        </View>
                        <View style={this._fixed_style.fromtoInnerView}>
                            <Text style={this._fixed_style.fromtoText}>
                                {TICKET_TEXTS.TO}
                            </Text>
                            <Text style={this._fixed_style.dateText}>
                                {this.props.endDate.toLocaleDateString()}
                            </Text>
                        </View>
                    </View>
                    <Text style={this._fixed_style.titleText}>
                        {this.props.title}
                    </Text>
                </View>
                <View style={this._fixed_style.footerView}>
                    <Image
                        style={this._fixed_style.barcode}
                        source={require('./src/barcode.png')}
                    />
                    <View style={this._fixed_style.passengerView}>
                        <Text style={this._fixed_style.passengerText}>
                            {TICKET_TEXTS.PASSENGER}
                        </Text>
                        <VSPProfile size={5*VERTICAL_UNIT} marginLeft={VERTICAL_UNIT} castShadow={false}/>
                        <VSPProfile size={5*VERTICAL_UNIT} marginLeft={VERTICAL_UNIT} castShadow={false}/>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}