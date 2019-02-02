import React from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from "react-native-modal";

import { HORIZONTAL_UNIT } from '../types/config/size';
import { THEME_COLORS, addShadowProperties, THEME_HEADER_FONTSIZE } from '../types/config/theme';

import VSPText from './vsp-text';
import VSPTextButton from './vsp-text-button';

interface VSPModalProps {
    /**
     * Title text in the middle of the header
     */
    titleText: string,

    /**
     * Button in the right side of the header
     */
    rightButton?: React.ReactElement<any>,
}

/**
 * VSPModal
 * 
 * @property
 * - ```titleText```: Title text in the middle of the header
 * =
 */
export default class VSPModal extends React.Component<VSPModalProps> {
    render() {
        let style = StyleSheet.create({
            container: {
                width: '90%',
                alignSelf: 'center',
            },

            headerView: {
                flexDirection: 'row',
                alignItems: 'center',
                height: 12*HORIZONTAL_UNIT,
                borderTopLeftRadius: 2*HORIZONTAL_UNIT,
                borderTopRightRadius: 2*HORIZONTAL_UNIT,
                backgroundColor: THEME_COLORS['grey-white'],
                ...addShadowProperties(),
            },

            headerTitleView: {
                flex: 3,
                alignItems: 'center',
            },

            headerTitleText: {
                fontSize: THEME_HEADER_FONTSIZE,
                color: THEME_COLORS['brown'],
            },

            headerLeftView: {
                flex: 2,
                alignItems: 'flex-start',
            },

            headerRightView: {
                flex: 2,
                alignItems: 'flex-end',
            },
            
            bodyView: {
                flex: 1,
                padding: 4*HORIZONTAL_UNIT,
                borderBottomLeftRadius: 2*HORIZONTAL_UNIT,
                borderBottomRightRadius: 2*HORIZONTAL_UNIT,
                backgroundColor: THEME_COLORS['white'],
            },

            resultView: {
                flex: 1,
            },
        });
        
        return (
            <Modal
                isVisible={true}
                avoidKeyboard={true}
            >
                <View style={style.container}>
                    <View style={style.headerView}>
                        <View style={style.headerLeftView}>
                            <VSPTextButton
                                icon='previous'
                                marginRight={4*HORIZONTAL_UNIT}
                            />
                        </View>
                        <View style={style.headerTitleView}>
                            <VSPText style={style.headerTitleText}>
                                {this.props.titleText}
                            </VSPText>
                        </View>
                        <View style={style.headerRightView}>
                            {this.props.rightButton}
                        </View>
                    </View>
                    <View style={style.bodyView}>
                        {this.props.children}
                    </View>
                </View>
            </Modal>
        );
    }
}